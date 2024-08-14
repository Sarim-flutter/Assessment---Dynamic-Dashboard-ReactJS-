import Widget from './widgets';

const Catagories = (props) => {
    const addWidget = () => {
        props.onWidgetAdd (props.categoryId)
    }
    const deleteWidget = (widgetId) => {
        props.onWidgetDelete (props.categoryId,widgetId)
    }
    return (
        <div className="row">
            {props.widgets.map((widget) => (
                <div className="col-4 col-xsm-6 mt-4" key={widget.id}>
                    <Widget title={widget.WidgetName} onWidgetDeleting={(id) =>{deleteWidget(id)}} content={widget.WidgetContent} id={widget.id}>
                            <p>{widget.WidgetContent}</p>
                    </Widget>

                </div>
            ))}
            <div className='col-4 col-xsm-6 mt-4'>
                <div className="custom-card add-widget-card">
                    <div className="card-body">
                    <button type="button" className="btn btn-primary custom-btn" onClick={addWidget}><i class="fa-solid fa-plus"></i> Add Widget</button>
                    </div>
                </div>
            </div>
        </div>
    )


}
export default Catagories