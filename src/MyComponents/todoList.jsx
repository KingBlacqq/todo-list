import React, {useEffect, useState}from "react";
import ReactDOM from 'react-dom/client'
import CreateTask from "../Modals/createTask";
import Card from "./card";

const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [tasklist, setTasklist] = useState([])

  useEffect(() => {
    let arr = localStorage.getItem("tasklist")
   

    if(arr){
      let obj = JSON.parse(arr)
      setTasklist(obj)
    }
  }, [])

  const toggle = () => {
    setModal(!modal);
  }
 
  const saveTask = (taskObj) => {
    let templist = tasklist
    templist.push(taskObj)
    localStorage.setItem("tasklist", JSON.stringify(templist))
    setTasklist(templist)
    setModal(false)
  }

  const deleteTask = (index) => {
    let templist = tasklist
    templist.splice(index, 1)
    localStorage.setItem("tasklist", JSON.stringify(templist))
    setTasklist(templist)
    window.location.reload()
  
  }

   const updateListArray = () =>{
    let templist = tasklist
    templist[index] = obj
    localStorage.setItem("tasklist", JSON.stringify(templist))
    setTasklist(templist)
    window.location.reload()
   } 
  
   
   
  return(
    <>

    <div className="header text-center">
     <h2 className="header-text">To-do List</h2>
     <button id="button" className="btn mt-2"  onClick = {() => setModal(true)}>Create Task</button>
    </div>

    <div className="task-container">
      {tasklist.map((obj, index) => <Card taskObj = {obj} index={index} deleteTask = {deleteTask} updateListArray = {updateListArray} />)}
    </div>
    <CreateTask toggle = {toggle} modal = {modal} save = {saveTask}/>
    </>
  );
};

export default TodoList;