import React from "react";

const Task = ({task, dispatch}) => {
    
    const toggledCompleted = () => {
        dispatch({
            type: "TOGGLE_COMPLETE",
            payload: task.id
        })
    }
    
    
    return(
         <div>
             
            <ul>
               <li
               onClick={toggledCompleted}
                className={`task$(task.completed ? "completed") : ""`}
                style={{textDecoration: task.completed ? "line-through" : ""}}
               >{task.item}</li>
            </ul>
        </div> 

    )
};

export default Task;