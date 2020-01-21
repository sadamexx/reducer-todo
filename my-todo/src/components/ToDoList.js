import React, { useState, useReducer } from "react";
import { initialState } from "../reducers/list-reducer";


const ToDoList= () => {
    const [state, dispatch] = useReducer(listReducer, initialState);
    const [task, setTask] = useState('')
    const [newTaskText, setNewInputText] = useState('');
    

    handleChange =(e) => {
        const newValue = event.target.value;
        setInputText(newValue);
    }

    addItem = () => {
        setTask(prevItems => {
            return [...prevItems, inputText]
        });
        setInputText('');
    }

    return(
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <div className="form">
                <input 
                type="text"
                onChange={handleChange}
                value={newTaskText}
                 />
                <button onClick={addItem}>
                    <span>Add</span>
                </button>
            </div>
            <div>
                <ul>
                    {items.map(todoItem => {
                        return <li>{todoItem}</li>
                    })};
                </ul>
            </div>
        </div>
    );
};

export default ToDoList;