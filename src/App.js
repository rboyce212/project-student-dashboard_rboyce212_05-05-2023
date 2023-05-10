import React from "react";
import "./App.css";
import { Cards } from "./Components/Cards";
import { CohortDashboard } from "./Components/CohortDashboard";
import { FilteredCohort } from "./Components/FilteredCohort";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Student Dashboard</h1>
      </header>
      <nav>
        <CohortDashboard />
        Filter By Class Start Date
        <FilteredCohort />
      </nav>
    </div>
  );
}

export default App;
