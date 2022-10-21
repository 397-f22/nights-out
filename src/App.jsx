import { useState } from "react";
import "./App.css";
import RestCardList from "./components/restCardList";
import { useDbData } from "./utilities/firebase";
import AddPlace from "./components/addPlace";
import Header from "./components/Header";
// import SidePanel from "./components/sidePanel";
import AddPlaceForm from "./components/addPlaceForm";

const App = () => {	
	const[data, error] = useDbData('/');
	//console.log(data)  
	const [open, setOpen] = useState(false);
	const [message, setMessage] = useState("");
	// const [openSidePanel, setOpenSidePanel] = useState(false);
	// const openSideModal = () => setOpenSidePanel(true);
	// const closeSideModal = () => setOpenSidePanel(false);

	const openModal = () => { setOpen(true); setMessage("");};
	const closeModal = () => setOpen(false);

	if (!data){
		return (<div id="loading">The night is still young...</div>);
	}

	return (
		<div className="container">
			<Header />
			{/* <SidePanel open={openSidePanel} close={closeSideModal} /> */}
			<RestCardList data={data} />

			<button type="button" id="addButton" className="btn" onClick={openModal}>
				<p>+</p>
			</button>
			<AddPlace open={open} close={closeModal}>
				<AddPlaceForm data={data} message={message} setMessage={setMessage}/>
			</AddPlace>
		</div>
	);
};

export default App;
