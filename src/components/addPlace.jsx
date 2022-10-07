import "./addPlace.css";

const AddPlace = () => {
  return (
    <div className="modal" id="addModal" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Tried Somewhere New?</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="form-group">
                <input type="text" className="form-control" id="placeName" placeholder="The place's name"/>
            </div>
            <button type="submit" className="btn btn-outline-danger">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPlace;
