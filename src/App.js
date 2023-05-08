import React from "react";
import "./App.css";
import { Cards } from "./Components/Cards";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Student Dashboard</h1>
      </header>
      <nav>Filter By Class Start Date</nav>
      <main>
        <h3>"Cohort Name"</h3>
        <h5>Total Students: "Count"</h5>
        <Cards />
      </main>
    </div>
  );
}

export default App;
