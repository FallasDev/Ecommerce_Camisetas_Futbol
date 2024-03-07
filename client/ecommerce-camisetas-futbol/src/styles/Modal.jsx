import "../styles/Modal.css"

function Modal({src,content,progressBar}){
    return (
        <div className="modal-box">
            <img src={src} alt="Imagen equipo" />
            <p>{content}</p>
        </div>
    )
};

export default Modal;