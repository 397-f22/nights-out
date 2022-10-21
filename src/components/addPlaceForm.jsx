import "./addPlaceForm.css";
import { useDbUpdate } from "../utilities/firebase";
import { useState } from "react";

// const cb = (e, data, setData) => {
//   e.preventDefault();
//   data[document.getElementById("placeName").value] = {
// 		"numVisited": 0,
// 		"datesVisited": []
// 	};
//   setData(data);
//   console.log(data);
// };

const AddPlaceForm = ({data, message, setMessage}) => {
    
    const [update, result] = useDbUpdate(`/`);

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    
    const submit = (evt) => {
        evt.preventDefault();
        var name = document.getElementById("placeName").value;

        if (name in data){
            setMessage("Oops not a new place");
            console.log("Oops not a new place");
        }
        else {
            var newplace = {
                [name]: {
                    numVisited: 1,
                    datesVisited: [today]
                }
            }
            update(newplace);
            location.reload();
        }
    };
    
    return (
        <form>
            <div className="form-group">
                <label htmlFor="placeName">Place</label>
                <input className="form-control" type="text" id="placeName" placeholder="Your New Favorite Place"></input>
            </div>
            <span id="error-message" className="p-2">{message}</span>
            <button type="submit" className="btn btn-outline-danger" onClick={submit}>Submit</button>
        </form>
    )
};

export default AddPlaceForm;
