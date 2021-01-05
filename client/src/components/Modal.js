import React from "react";

function Modal({ children, show, setModalProps }) {
    return (
        <div
            className="modalOuterCover"
            style={show ? { opacity: "100%", pointerEvents: "all" } : {}}
        >
            <div className="modal">
                <div
                    className="modalCloseButton"
                    onClick={() => {
                        setModalProps(false, "");
                    }}
                >
                    &times;
                </div>
                <div className="modalContent">{children}</div>
            </div>
        </div>
    );
}

export default Modal;
