import React from "react";

const TaskContainer = ({tasksList}) =>{
    return(
       <div className="task-wrapper">
            {
                tasksList.map((task) => (
                    <div className="task" key={task.id}>
                        <p>{task.taskName}</p>
                        <i className="fa-regular fa-pen-to-square"></i>
                        <i className="fa-solid fa-circle-check"></i>
                    </div>   
                ))
            }
       </div>
    )
}

export default TaskContainer;