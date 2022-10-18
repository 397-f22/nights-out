import "./sidePanel.css";

const SidePanel = ({open, close}) => {
    return (
        <div className={`modal fade ${open ? 'show' : ''}`} id="exampleModal2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel2" aria-hidden="true">
        <div className="modal-dialog modal-dialog-slideout modal-sm" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal sideout small</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
                </button>
            </div>
            <div className="modal-body">
                <p>something</p>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
        </div>
    )
}

export default SidePanel;
