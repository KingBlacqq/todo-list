import React, {useEffect, useState}from "react";
import ReactDOM from 'react-dom/client'
import CreateTask from "../Modals/createTask";
import Card from "./card";

const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([])

  useEffect(() => {
    let arr = localStorage.getItem("taskList")
   

    if(arr){
      let obj = JSON.parse(arr)
      setTaskList(obj)
    }
  }, [])

  const toggle = () => {
    setModal(!modal);
  }
 
  const saveTask = (taskObj) => {
    let tempList = taskList
    tempList.push(taskObj)
    localStorage.setItem("tasklist", JSON.stringify(tempList))
    setTaskList(tempList)
    setModal(false)
  }

  const deleteTask = (index) => {
    let tempList = taskList
    tempList.splice(index, 1)
    localStorage.setItem("tasklist", JSON.stringify(tempList))
    setTaskList(tempList)
    window.location.reload()
  
  }

   const updateListArray = () =>{
    let tempList = taskList
    tempList[index] = obj
    localStorage.setItem("taskList", JSON.stringify(tempList))
    setTaskList(tempList)
    window.location.reload()
   } 
  
   const backgroundImageUrl = 'url("src/Images/header-bg.jpg")';
   const containerStyle = {
    backgroundImage: backgroundImageUrl,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    minHeight: '300px',
    
   };
  return(
    <>

    <div className="header text-center" style={containerStyle}>
     <h2 className="header-text">To-do List</h2>
     <button id="button" className="btn mt-2"  onClick = {() => setModal(true)}>Create Task</button>
    </div>

    <div className="task-container">
      {taskList.map((obj, index) => <Card taskObj = {obj} index={index} deleteTask = {deleteTask} updateListArray = {updateListArray} />)}
    </div>
    <CreateTask toggle = {toggle} modal = {modal} save = {saveTask}/>
    </>
  );
};

export default TodoList;