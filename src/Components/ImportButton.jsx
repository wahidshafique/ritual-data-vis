import React, { createRef, useState } from "react";
import CheckIcon from "@material-ui/icons/Check";
import SaveIcon from "@material-ui/icons/Save";
import clsx from "clsx";
import { blueGrey } from "@material-ui/core/colors";
import { CircularProgress, Fab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import { useAppDispatch } from "../appContext";

const useStyles = makeStyles(theme => ({
  wrapper: {
    marginTop: theme.spacing(2),
    position: "relative"
  },
  button: {
    marginTop: 16
  },
  buttonSuccess: {
    backgroundColor: blueGrey[300],
    "&:hover": {
      backgroundColor: blueGrey[400]
    }
  },
  fabProgress: {
    color: blueGrey[100],
    position: "absolute",
    top: 34,
    left: -6,
    zIndex: 1
  },
  buttonProgress: {
    color: blueGrey[100],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12
  },
  alert: {
    placeSelf: "flex-end",
    marginLeft: "auto",
    visibility: "hidden",
    marginTop: 12
  },
  alertActive: {
    visibility: "visible"
  },
  controlRow: {
    display: "flex"
  }
}));

export default function ImportButton({ setPanelOpen, setMinHeight }) {
  const fileInput = createRef();
  //const [ritualData, setRitualData] = useState(null);
  const dispatch = useAppDispatch();
  const [errMsg, setErrMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const classes = useStyles();

  const buttonClassname = clsx({
    [classes.button]: true,
    [classes.buttonSuccess]: success
  });

  const alertClassname = clsx({
    [classes.alert]: true,
    [classes.alertActive]: errMsg
  });

  const handleSubmit = e => {
    e.preventDefault();
    const files = fileInput.current.files;
    if (files.length <= 0 || files.length > 1) {
      setErrMsg("Please upload a file");
      return false;
    }

    const file = files.item(0);
    if (file.type !== "application/json") {
      setErrMsg("Please upload a JSON file");
      return;
    }

    if (errMsg) {
      setErrMsg(null);
    }

    const fr = new FileReader();

    fr.readAsText(file);

    fr.onload = e => {
      console.log(e);
      dispatch({ type: "setRitualData", payload: JSON.parse(e.target.result) });

      setPanelOpen(false);
      setMinHeight("0vh");
    };

    fr.onloadstart = e => {
      setSuccess(false);
      setLoading(true);
    };

    fr.onloadend = e => {
      setSuccess(true);
      setLoading(false);
    };
  };

  return (
    <>
      <div className={classes.wrapper}>
        <form onSubmit={handleSubmit}>
          <div className={classes.input}>
            <label>
              <input type="file" ref={fileInput} />
            </label>
          </div>
          <div className={classes.controlRow}>
            <Fab
              type="submit"
              aria-label="save"
              color="default"
              className={buttonClassname}
            >
              {success ? <CheckIcon /> : <SaveIcon />}
            </Fab>
            {loading && (
              <CircularProgress size={68} className={classes.fabProgress} />
            )}
            <Alert className={alertClassname} severity="error">
              {errMsg}
            </Alert>
          </div>
        </form>
      </div>
    </>
  );
}
