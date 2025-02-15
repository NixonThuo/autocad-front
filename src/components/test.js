<div className="modal fade" id="deviceModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
    aria-labelledby="deviceModalLabel" aria-hidden="true">
    <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header bg-primary">
                <h1 className="modal-title fs-5 text-light" id="staticBackdropLabel">Choose Device Right</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <div className='row'>
                    <div className='col-12'>
                        <form>
                            <input type='hidden' name='devicemodalposition' id='devicemodalposition' />
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="deviceaction" id="deviceaction"
                                    value="horizontal" />
                                <label className="form-check-label" htmlFor="deviceaction">
                                    Terminate Horizontal
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="deviceaction" id="deviceaction"
                                    value="vertical" />
                                <label className="form-check-label" htmlFor="deviceaction">
                                    Terminate Vertical
                                </label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => {
                    const position
                        = document.getElementById('devicemodalposition').value; terminateLine(position);
                }}
                >Terminate</button>
            </div>
        </div>
    </div>
</div>