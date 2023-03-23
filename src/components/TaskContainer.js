import React, {useState} from "react";

const TaskContainer = ({tasksList, pendingStatus, doneTask, undoTask, deleteTask, saveTask}) =>{
    const Title = pendingStatus? 'Pending Tasks':'Completed Tasks';
   
    const [title, setTitle] = useState(null)
    const [showEdit, setShowEdit] = useState(false)
    const [taskID, setTaskID] = useState(null)

    const handleEdit = (value, id)=>{
        setShowEdit(true)
        setTitle(value)
        setTaskID(id)
    }

    const handleUndo =()=>{
        setShowEdit(false)
    }

    const handleSave=()=>{
        saveTask(title, taskID)
        setShowEdit(false)
    }

    return(
       <div className="task-wrapper">
          <p className="task-header">{Title}</p>
          {
            tasksList.map((task) => {
                if (showEdit && task.id ===taskID){
                    return(
                        <div className="task" key={task.id}>
                            <input value={title} onChange={(event)=>setTitle(event.target.value)}/>
                            <i className="fa-solid fa-floppy-disk" onClick={handleSave}></i>
                            <i className="fa-solid fa-rotate-right" onClick={handleUndo}></i>
                        </div>
                    )
                }else{
                    return(
                       <div className="task" key={task.id}>
                         <p className={task.completed===true ? "strike-through":undefined}>{task.title}</p>
                            {
                                task.completed ===false? (
                                    <>
                                     <i className="fa-solid fa-circle-check" onClick={()=>doneTask(task.id)}></i>
                                     <i className="fa-regular fa-pen-to-square" onClick={()=>handleEdit(task.title, task.id)}></i>
                                    </>
                                ):(
                                    <>
                                     <i className="fa-solid fa-rotate-right" onClick={()=>undoTask(task.id)}></i>
                                     <i className="fa-solid fa-trash" onClick={()=>deleteTask(task.id)}></i>
                                    </>
                                )
                            }
                        </div>   
                    )
                }
            }
            )
          }
       </div>
    )
}

export default TaskContainer;