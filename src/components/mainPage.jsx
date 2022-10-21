import { useState } from "react";
import RestCardList from "./restCardList";
import { useDbData } from "../utilities/firebase";
import AddPlace from "./addPlace";
import Header from "./Header";
import AddPlaceForm from "./addPlaceForm";

function MainPage(){
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
		return (<div>Loading</div>);
	}

    return(
        <>
            {/* <SidePanel open={openSidePanel} close={closeSideModal} /> */}
            <RestCardList data={data} />

            <button type="button" id="addButton" className="btn" onClick={openModal}>
                <p>+</p>
            </button>
            <AddPlace open={open} close={closeModal}>
            <AddPlaceForm data={data} message={message} setMessage={setMessage}/>
            </AddPlace>
        </>
    )
}

export default MainPage