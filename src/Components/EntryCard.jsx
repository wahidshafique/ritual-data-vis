import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography, Paper } from "@material-ui/core";

import ImportButton from "./ImportButton";

const useStyles = makeStyles(theme => ({
  root: {
    transition: "0.3s all ease",
    backgroundColor: "#00A7C4",
    verticalAlign: "center",
    margin: "0 auto",
    minWidth: 300,
    maxWidth: 450,
    padding: theme.spacing(1)
  },
  title: {
    color: "white",
    paddingBottom: 10,
    fontWeight: "bold",
    fontSize: 24
  },
  pos: {
    marginBottom: 12
  },
  paper: {
    padding: 24,
    marginBottom: 12,
    marginTop: 12
  },
  wrapper: {
    marginTop: theme.spacing(2),
    position: "relative"
  }
}));

export default function EntryCard() {
  const classes = useStyles();

  return (
    <Card variant="outlined" className={classes.root}>
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          Ritual Data Visualizer
        </Typography>
        <Paper elevation={3} className={classes.paper}>
          <Typography gutterBottom>
            Request your <a href="https://www.ritual.co/">Ritual</a> usage data
            by emailing{" "}
            <a
              href="mailto:support@ritual.co?Subject=Personal%20Data%20Request"
              target="_top"
            >
              support@ritual.co
            </a>
          </Typography>
        </Paper>
        <Paper className={classes.paper} elevation={3}>
          <Typography gutterBottom>
            Once you have the requested JSON file, import it here for processing
          </Typography>
        </Paper>
        <ImportButton />
      </CardContent>
    </Card>
  );
}
