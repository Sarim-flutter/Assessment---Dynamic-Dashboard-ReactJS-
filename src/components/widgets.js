
const Widget = (props) => {
    const widgetDelete = () => {
        props.onWidgetDeleting(props.id)
    }
    return (
                <div className='custom-card'>
                    <button type="button" className="btn btn-primary customBtn custom-btn delete-button" onClick={widgetDelete}><i class="fa-solid fa-trash"></i></button>

                    <div className="card-body">
                        <b className="card-title"> {props.title}</b>
                        <div className="card-content">
                            {props.children}

                        </div>
                    </div>
                </div>)
}
export default Widget