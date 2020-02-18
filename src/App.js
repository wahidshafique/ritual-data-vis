import React from "react";
import "./App.css";
import EntryCard from "./Components/EntryCard";
import { Grid } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        {" "}
        <EntryCard />
      </Grid>
    </div>
  );
}

export default App;
