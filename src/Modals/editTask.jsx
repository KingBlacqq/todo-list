import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const EditTask = ({ modal, toggle, updateTask, taskObj}) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "taskName") {
      setTaskName(value);
    } else {
      setDescription(value);
    }
  };

  useEffect(() => {
    setTaskName(taskObj.Name);
    setDescription(taskObj.Description);
  }, []);


  const handleUpdate = (e) =>{
    e.preventDefault();
    // let newTask = {}
    let tempObj = {}
    tempObj['Name'] = taskName
    tempObj['Description'] = description
    updateTask(tempObj)
  }
  

  return (
    <>
      <Modal
        isOpen={modal}
        modalTransition={{ timeout: 700 }}
        backdropTransition={{ timeout: 1300 }}
        toggle={toggle}
      >
        <ModalHeader toggle={toggle}>Update Task</ModalHeader>
        <ModalBody>
          <form>
            <div className="form-group">
              <label htmlFor="taskName" className=" pb-2">
                Task Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="taskName"
                value={taskName}
                onChange={handleChange}
                name="taskName"
              />
            </div>
            <div className="form-group">
              <label className="pt-2 pb-1.5">Description:</label>
              <textarea
                rows="5"
                className="form-control mt-3"
                value={description}
                onChange={handleChange}
                name="description"
              ></textarea>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleUpdate} style={{"backgroundColor" : "#301934","fontFamily" : "calibri", "textTransform":"uppercase", "letterSpacing" : "0.05rem", "border" : "none", "fontWeight" : "500"}}>
            Update
          </Button>{" "}
          <Button color="secondary" onClick={toggle} style={{"backgroundColor" : "#483248","fontFamily" : "calibri", "textTransform":"uppercase", "letterSpacing" : "0.05rem", "border" : "none", "fontWeight" : "500", "color" : "#FFF"}}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default EditTask;
