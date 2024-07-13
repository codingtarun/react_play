import PrimaryHeading from "../typography/PrimaryHeading";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function StepBox() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <PrimaryHeading>Step Buttons</PrimaryHeading>
      <div className="d-flex justify-content-center aligh-items-center ">
        <Button variant="primary" onClick={handleShow} className="stepModalBtn">
          Steps
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Step A</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="d-flex justify-content-between">
              <span className="stepNum active">1</span>
              <span className="stepNum">2</span>
              <span className="stepNum">3</span>
            </div>
            <div className="stepStatus mt-5 mb-5">
              <h5 className="text-center">Step Description</h5>
            </div>
            <div className="d-flex justify-content-around">
              <Button variant="primary" className="" onClick={handleClose}>
                Previous
              </Button>
              <Button variant="secondary" onClick={handleClose}>
                Next
              </Button>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}
