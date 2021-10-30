import React, { useState, useEffect } from "react";
import data from "./data";
import List from "./list";
import "./App.css";

import "./App.css";

function App() {
  const [peoples, setPeoples] = useState(data);
  useEffect(() => {
    const date = new Date();
    const today = peoples.filter((people) => {
      const dob = new Date(people.dob);
      return (
        dob.getDate() === date.getDate() && dob.getMonth() === date.getMonth()
      );
    });
    setPeoples(today);
  },[]);

  return (
    <div className="home container-fluid d-flex align-items-center flex-column">
      <div className="lists ">
        <h2 className="m-5">{peoples.length} birthday today </h2>
        {peoples.map((people) => {
          return (
            <List people={people} key={people.id} />
          );
        })}
        <button className="m-5 clear" onClick={() => setPeoples([])}>
          Clear All
        </button>
      </div>
    </div>
  );
}

export default App;
