import PrimaryHeading from "../typography/PrimaryHeading";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function StepBox() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const stepDescriptionList = [
    "Learn JavaScript",
    "Learn React",
    "Apply for Job",
  ];

  const [step, setStep] = useState(1);

  function handlePreviousStep() {
    setStep(step > 1 ? (s) => s - 1 : 1); // if we depends on the current value of the set state then use this type of expression
    //setStep(step < 3 ? step - 1 : 3);
  }

  function handleNextStep() {
    setStep(step < 3 ? (s) => s + 1 : 3);
    //setStep(step < 3 ? step + 1 : 3);
  }
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
              <span className={step >= 1 ? "stepNum active" : "stepNum"}>
                1
              </span>
              <span className={step >= 2 ? "stepNum active" : "stepNum"}>
                2
              </span>
              <span className={step >= 3 ? "stepNum active" : "stepNum"}>
                3
              </span>
            </div>
            <div className="stepStatus mt-5 mb-5">
              <h5 className="text-center">
                Step No. {step} : {stepDescriptionList[step - 1]}
              </h5>
            </div>
            <div className="d-flex justify-content-around">
              <Button
                variant="primary"
                className=""
                onClick={handlePreviousStep}
                disabled={step <= 1}
              >
                Previous
              </Button>
              <Button
                variant="primary"
                onClick={handleNextStep}
                disabled={step >= 3}
              >
                Next
              </Button>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}
