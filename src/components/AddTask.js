import React, {useState} from 'react';


const AddTask = ({handleClick}) =>{

    const [task, setTask]= useState('');

   const addTaskClick =()=>{
    handleClick(task);
    setTask('');
   }
    
    return(
        <div className='add-task'>
            <input className='add-task-input' placeholder="Add task here" value={task} onChange={(event)=>setTask(event.target.value)} />
            <button className='btn'onClick={addTaskClick}>Add Task</button>
            
        </div>
    )
}

export default AddTask;