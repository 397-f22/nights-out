import { useState } from "react";
import { useParams } from "react-router-dom";
import RestCardList from "./restCardList";
import { useDbData, useDbUpdate } from "../utilities/firebase";
import AddPlace from "./addPlace";
import Header from "./Header";
import AddPlaceForm from "./addPlaceForm";

function MainPage(){
  const { user } = useParams();
  const [update, result] = useDbUpdate(`/`);
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

  let userData = data[user];
  if(userData == null) {
    update({[user]: ""});
    window.location.reload(false);
  }

  if(userData === "") userData = {};

    return(
        <>
            {/* <SidePanel open={openSidePanel} close={closeSideModal} /> */}
            <RestCardList data={userData} />

            <button type="button" id="addButton" className="btn" onClick={openModal}>
                <p>+</p>
            </button>
            <AddPlace open={open} close={closeModal}>
            <AddPlaceForm user={user} data={userData} message={message} setMessage={setMessage}/>
            </AddPlace>
        </>
    )
}

export default MainPage;
