import React, { useState } from "react";
import "./App.css";
import EntryCard from "./Components/EntryCard";
import { Grid } from "@material-ui/core";
import PieChart from "./Components/PieChart";
import { AppProvider } from "./appContext";

function App() {
  const [minHeight, setMinHeight] = useState("100vh");
  return (
    <AppProvider>
      <div className="App">
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight }}
        >
          {" "}
          <EntryCard setMinHeight={setMinHeight} />
          <PieChart />
        </Grid>
      </div>
    </AppProvider>
  );
}

export default App;
