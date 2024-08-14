import styles from './catagories.module.css';
import Widget from './widgets';

const Catagories = (props) => {
    const addWidget = () => {
        props.onWidgetAdd (props.categoryId)
    }
    return (
        <div className="row">
            {props.widgets.map((widget) => (
                <div className="col" key={widget.id}>

                    <Widget title={widget.WidgetName} content={widget.WidgetContent}></Widget>

                </div>
            ))}
            <div className='col'>
                <div className="card">
                    <div className="card-body">
                    <button type="button" className="btn btn-primary" onClick={addWidget}> Add Widget</button>
                    </div>
                </div>
            </div>
        </div>
    )


}
export default Catagories