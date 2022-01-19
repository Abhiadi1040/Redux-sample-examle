import React from 'react';
import Modal from 'react-bootstrap/Modal'
import '../styles/Modal.css';
function ModalComponent(props) {
  const {title,body,onHide,modalStatus,size,style,modalBodyStyle}=props;
    return (
      <>
        <Modal
        style={style}
        className="ModalWidth"
          size={size}
          show={modalStatus}
          onHide={onHide}
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton className="Mheader">
            <Modal.Title id="example-custom-modal-styling-title" className="Mheadings">
           <p style={{color:"white"}}>{title}</p> 
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={modalBodyStyle}>
           {body}
          </Modal.Body>

        </Modal>
      </>
    );
  }
  export default ModalComponent;
