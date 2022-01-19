import React from "react";
import Modal from "react-bootstrap/Modal";
import ModalDialog from "react-bootstrap/ModalDialog";
import Draggable from "react-draggable";

import '../styles/Modal.css';

// interface Props {
//   eleId?: string;
//   title: string;
//   body: JSX.Element;
//   onHide: Function;
//   modalStatus: boolean;
//   size?: any;
//   style?: object;
//   modalBodyStyle?: object;
//   animation?: boolean;
//   backdrop?: boolean;
// }

class DraggableModalDialog extends React.Component {
  render() {
    return (
      <Draggable handle=".modal-header">
        <ModalDialog {...this.props} />
      </Draggable>
    );
  }
}

// const ModalComponent1 = (
//   title,
//   body,
//   onHide,
//   modalStatus,
//   size,
//   style,
//   modalBodyStyle,
//   animation,
//   backdrop,
//   eleId
//  ) => {
    function ModalComponent1({title,body,onHide,modalStatus,size,style,modalBodyStyle,eleId}) {
        // const {title,body,onHide,modalStatus,size,style,modalBodyStyle,eleId}=props;
  return (
    <>
      <Modal
        dialogAs={DraggableModalDialog}
        id={eleId}
        // backdrop={backdrop}
        // animation={animation}
        style={style}
        className="ModalWidth"
        size={size}
        show={modalStatus}
        onHide={onHide}
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header closeButton className="Mheader">
          <Modal.Title
            id="example-custom-modal-styling-title"
            className="Mheadings"
          >
            <p
              style={{
                color: "white",
                marginBottom: "0px",
                fontFamily: "Arial",
                fontSize: "13px"
              }}
              id="modalTitle"
            >
              {title}
            </p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={modalBodyStyle}>{body}</Modal.Body>
      </Modal>
    </>
  );
};
export default ModalComponent1;