import React, { useState, useEffect } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import TaskContainer from './components/TaskContainer';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';


const App =()=>{

  const [tasks, setTasks] = useState([]);

  const getApiData = async() =>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
    console.log(response)
    setTasks(response.data)
  }

  useEffect(()=>{
    getApiData();
  }, [])


  // 

  const handleAddClick = (task) =>{
    const id = uuidv4();
    setTasks([...tasks,
      {
        id,
        title:task, 
        completed:false
      }]);
  }

  const handleDone =(id)=>{
    const data = tasks.map(task=>{
      if(task.id===id){
        return{...task, completed: true}
      }
      return task
    })  
    setTasks(data)
  }

  const handleUndo =(id)=>{
    const data = tasks.map(task=>{
      if(task.id===id){
        return{...task, completed:false}
      }
      return task
    })  
    setTasks(data)
  }

  const handleDelete = (id) =>{
    const data = tasks.filter(task=>task.id!==id)
    setTasks(data)
  }

  const handleSave =(newTask, id)=>{
    const data = tasks.map(task=>{
      if(task.id===id){
        return{...task, title: newTask}
      }
      return task
    })  
    setTasks(data)
  }


  return (
    <div className='container'>
      <AddTask handleClick={handleAddClick}/>
      <TaskContainer tasksList={tasks.filter(task=>task.completed===false)} pendingStatus={true} doneTask={handleDone} saveTask={handleSave}/>
      <TaskContainer tasksList={tasks.filter(task=>task.completed===true)} undoTask={handleUndo} deleteTask={handleDelete}/>
    </div>
  )
}

export default App;
