import "./addPlaceForm.css";

const AddPlaceForm = ({data, setData}) => {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="placeName">Place</label>
                <input className="form-control" type="text" id="placeName" placeholder="Your New Favorite Place"></input>
            </div>
            <button type="submit" class="btn btn-outline-danger">Submit</button>
        </form>
    )

}


export default AddPlaceForm;