import "./addPlace.css";

const AddPlace = () => {
  return (
    <div class="modal" id="addModal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Tried Somewhere New?</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
                <input type="text" class="form-control" id="placeName" placeholder="The place's name"/>
            </div>
            <button type="submit" class="btn btn-outline-danger">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPlace;
