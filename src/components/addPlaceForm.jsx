import "./addPlaceForm.css";

const cb = (e, data, setData) => {
  e.preventDefault();
  data[document.getElementById("placeName").value] = {
		"numVisited": 0,
		"datesVisited": []
	};
  setData(data);
  console.log(data);
};

const AddPlaceForm = ({data, setData}) => {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="placeName">Place</label>
                <input className="form-control" type="text" id="placeName" placeholder="Your New Favorite Place"></input>
            </div>
            <button type="submit" className="btn btn-outline-danger" onClick={e => cb(e, data, setData)}>Submit</button>
        </form>
    )
};

export default AddPlaceForm;
