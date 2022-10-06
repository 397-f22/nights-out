import { useState } from "react";
import "./App.css";
import RestCardList from "./components/restCardList";
import { useDbData } from "./utilities/firebase";
import AddPlace from "./components/addPlace";

const App = () => {
  const [data, error] = useDbData("/");
  if (error) return <h1>Error loading data: {error.toString()}</h1>;
  if (data === undefined) return <h1>Loading data...</h1>;
  if (!data) return <h1>No data found</h1>;

  console.log(data);

  return (
    <div className="container">
      <h1>NightsOut</h1>
      <RestCardList data={data} />

      <button type="button" class="btn btn-outline-danger" data-toggle="modal" data-target="#addModal">
        Add a new place
      </button>
      <AddPlace />
    </div>
  );
};

export default App;
