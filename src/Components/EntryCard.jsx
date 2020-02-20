import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  Typography,
  Paper,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ImportButton from "./ImportButton";

const useStyles = makeStyles(theme => ({
  root: {
    transition: "0.3s all ease",
    verticalAlign: "center",
    margin: "0 auto",
    minWidth: 300,
    maxWidth: 450,
    padding: theme.spacing(1)
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24
  },
  pos: {
    marginBottom: 12
  },
  paper: {
    "& > p": {
      fontWeight: "bold",
      color: "white"
    },
    backgroundColor: "#00A7C4",
    padding: 24,
    marginBottom: 12,
    marginTop: 12
  },
  wrapper: {
    marginTop: theme.spacing(2),
    position: "relative"
  },
  expPanel: {
    backgroundColor: "#00A7C4"
  }
}));

export default function EntryCard({ setMinHeight }) {
  const [panelOpen, setPanelOpen] = useState(true);
  const classes = useStyles();

  return (
    <ExpansionPanel
      onChange={(e, expanded) => setPanelOpen(expanded)}
      expanded={panelOpen}
    >
      <ExpansionPanelSummary
        className={classes.expPanel}
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.title}>
          Ritual Data Visualizer
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes.expPanel}>
        <Card variant="outlined" className={classes.root}>
          <CardContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography gutterBottom>
                Request your <a href="https://www.ritual.co/">Ritual</a> usage
                data by emailing{" "}
                <a
                  href="mailto:privacy@ritual.co?Subject=Personal%20Data%20Request"
                  target="_top"
                >
                  privacy@ritual.co
                </a>
              </Typography>
            </Paper>
            <Paper className={classes.paper} elevation={3}>
              <Typography gutterBottom>
                Once you have the requested JSON file, import it here for
                processing
              </Typography>
            </Paper>
            <ImportButton
              setMinHeight={setMinHeight}
              setPanelOpen={setPanelOpen}
            />
          </CardContent>
        </Card>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}
