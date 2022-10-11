import { useState } from "react";
import "./App.css";
import RestCardList from "./components/restCardList";
import { useDbData } from "./utilities/firebase";
import AddPlace from "./components/addPlace";
import Header from "./components/Header";
import AddPlaceForm from "./components/addPlaceForm";

const initData = {
	"Tommate": {
		"numVisited": 4,
		"datesVisited": ["06/11/22", "06/12/22", "06/13/22", "06/14/22"]
	},
	"Joy Yee's": {
		"numVisited": 3,
		"datesVisited": ["03/11/22", "03/12/22", "03/13/22"]
	},
	"10Q": {
		"numVisited": 2,
		"datesVisited": ["04/11/22", "04/12/22"]
	},
	"Tapville": {
		"numVisited": 1,
		"datesVisited": ["07/11/22"]
	}
}

const App = () => {

	// const [data, error] = useDbData("/");
	// if (error) return <h1>Error loading data: {error.toString()}</h1>;
	// if (data === undefined) return <h1>Loading data...</h1>;
	// if (!data) return <h1>No data found</h1>;

	const[data, setData] = useState(initData);
	const [open, setOpen] = useState(false);

	const openModal = () => setOpen(true);
	const closeModal = () => setOpen(false);


	return (
		<div className="container">
			<Header />
			<RestCardList data={data} />

			<button type="button" id="addButton" className="btn btn-outline-danger" onClick={openModal}>
				Add a new place
			</button>
			<AddPlace open={open} close={closeModal}>
				<AddPlaceForm setData={setData} data={data}/>
			</AddPlace>
		</div>
	);
};

export default App;
