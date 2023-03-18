import React, { useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import TaskContainer from './components/TaskContainer';
import { v4 as uuidv4 } from 'uuid';


const App =()=>{
  const [tasks, setTasks] = useState([
    {
      id:1,
      taskName:'this is first task',
      status:'pending'
    },
    {
      id:2,
      taskName:'this is Second task',
      status:'pending'
    },
    {
      id:3,
      taskName:'this is third task',
      status:'pending'
    },
    {
      id:4,
      taskName:'this is fourth task',
      status:'pending'
    }
  ]);

  

  const handleAddClick = (task) =>{
    const id = uuidv4();
    setTasks([...tasks,
      {
        id,
        taskName:task, 
        status:'pending'
      }]);
  }



  return (
    <div className='container'>
      <AddTask handleClick={handleAddClick}/>
      <TaskContainer tasksList={tasks}/>
    </div>
  )
}

export default App;
