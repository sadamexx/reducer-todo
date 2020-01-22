import React, { useReducer } from "react";
import  {startingTodo, listReducer}  from "../reducers/list-reducer";
import ToDoForm from "./ToDoForm";
import Task from "./Task";


const ToDoList= () => {
    const [state, dispatch] = useReducer(listReducer, startingTodo);
        
    const deleteItems = e => {
        e.preventDefault()
        dispatch({ type: "CLEAR_COMPLETED"})
    }
    return(
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <ToDoForm dispatch={dispatch}/>
            
            {state.map(task => {
                return <Task key={task.id} task={task} dispatch={dispatch} />
            })}
            <button onClick={deleteItems}>
                    <span>Delete Completed</span>
                </button>
        </div>
    );
};

export default ToDoList;