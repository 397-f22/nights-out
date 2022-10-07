import { useState } from "react";
import "./App.css";
import RestCardList from "./components/restCardList";
import { useDbData } from "./utilities/firebase";
import AddPlace from "./components/addPlace";

const data = {
	"Tommate": {
		"numVisted": 4,
		"datesVisited": ["06/11/22", "06/12/22", "06/13/22", "06/14/22"]
	},
	"Joy Yee's": {
		"numVisted": 3,
		"datesVisited": ["03/11/22", "03/12/22", "03/13/22"]
	},
	"10Q": {
		"numVisted": 2,
		"datesVisited": ["04/11/22", "04/12/22"]
	},
	"Tapville": {
		"numVisted": 1,
		"datesVisited": ["07/11/22"]
	}
}

const App = () => {

  // const [data, error] = useDbData("/");
  // if (error) return <h1>Error loading data: {error.toString()}</h1>;
  // if (data === undefined) return <h1>Loading data...</h1>;
  // if (!data) return <h1>No data found</h1>;

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
