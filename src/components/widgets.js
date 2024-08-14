import styles from './widget.module.css';

const Widget = (props) => {
    return (
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title"> {props.title}</h5>
                        <p className="card-text">{props.content}</p>
                    </div>
                </div>)
}
export default Widget