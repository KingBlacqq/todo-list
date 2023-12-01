import React, {useState} from "react";
import ReactDOM from 'react-dom/client'
import EditTask from "../Modals/editTask";

const Card = ({taskObj, index, deleteTask, updateListArray}) =>{

  const [modal, setModal] = useState(false);
  const colors = [
    {
        primaryColor : "#5D93E1",
        secondaryColor : "#ECF3FC"
    },
    {
        primaryColor : "#F9D288",
        secondaryColor : "#FEFAF1"
    },
    {
        primaryColor : "#5DC250",
        secondaryColor : "#F2FAF1"
    },
    {
        primaryColor : "#F48687",
        secondaryColor : "#FDF1F1"
    },
    {
        primaryColor : "#B964F7",
        secondaryColor : "#F3F0FD"
    }
  ]
  
  const toggle = () => {
   setModal(!modal);
  }

 const updateTask = (obj) => {
  updateListArray(obj, index)
 }

  const handleDelete = () =>{
    deleteTask("index");
    
  }

 

  return(
    <div className ="card-wrapper mr-5">
      <div className ="card-top" style={{"background-color": colors[index%5].primaryColor}}>
        <div className ="task-holder">
          <span className ="card-header" style={{"background-color": colors[index%5].secondaryColor, "border-radius" : "0.625rem", "width" : "auto" }}>{taskObj.Name}</span>
          <p className="mt-3 ml-3">{taskObj.Description}</p>

          <div style={{"position": "absolute", "right" : "1.25rem", "top" : "10rem" }}>
             <i className = "far fa-edit" style={{"color" : colors[index%5].primaryColor, "margin-right" : "1rem", "cursor" : "pointer"}} onClick = {() => setModal(true)}></i>
             <i className = "fas fa-trash-alt" style={{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick ={handleDelete}></i>
          </div>
          <EditTask modal= {modal} toggle = {toggle} updateTask = {updateTask} taskObj = {taskObj}/>
        </div>
      </div>
    </div>
  );
};

export default Card;