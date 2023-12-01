import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const CreateTask = ({modal, toggle, save}) => {
 
  const [taskName, setTaskName] = useState("");

  const [description, setDescription] = useState("");

  const handleChange = (e) => {
    const {name, value} = e.target

    if (name === "taskName"){
      setTaskName(value)
    } else {
      setDescription(value)
    }
  }

  const handleSave = () => {
    let taskObj = {}
    taskObj["Name"] = taskName
    taskObj["Description"] = description
    save(taskObj);
    console.log(taskObj, taskName);
  }
  const colors = [
    {
        primaryColor : "#5D93E1",
        secondaryColor : "#ECF3FC"
    },
  ]
  return (
    <>
      <Modal
        isOpen={modal}
        modalTransition={{ timeout: 700 }}
        backdropTransition={{ timeout: 1300 }}
        toggle={toggle}
        
      >
        <ModalHeader toggle={toggle} style={{"paddingLeft" : "auto", "fontFamily" : "calibri", "textTransform" : "uppercase", "fontWeight" : "800", "color" : "#301934", "textSize" : "8rem" }}>Create Task</ModalHeader>
        <ModalBody>
          <form>

           <div className="form-group">
            <label for="taskname" className=" pb-2 " style={{"fontFamily" : "calibri", "fontWeight" : "500", "letterSpacing" : "0.03em" , "color" : "#301934"}}>Task Name:</label>
             <input type="text" className = "form-control" id="taskname" value = {taskName} onChange = {handleChange} name="taskName" />
           </div>
           <div className="form-group">
            <label className="pt-2 pb-1.5"  style={{"fontFamily" : "calibri", "fontWeight" : "500", "letterSpacing" : "0.03em" , "color" : "#301934"}}>Description:</label>
            <textarea rows = "5" className = "form-control mt-3" value = {description} onChange = {handleChange} name="description">

            </textarea>
           </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={handleSave} style={{"backgroundColor" : "#301934","fontFamily" : "calibri", "textTransform":"uppercase", "letterSpacing" : "0.05rem", "border" : "none", "fontWeight" : "500"}}>
            Create
          </Button>{" "}
          <Button color="secondary" onClick={toggle} style={{"backgroundColor" : "#483248","fontFamily" : "calibri", "textTransform":"uppercase", "letterSpacing" : "0.05rem", "border" : "none", "fontWeight" : "500", "color" : "#FFF"}}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default CreateTask;
