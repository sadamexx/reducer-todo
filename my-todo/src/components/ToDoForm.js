import React, { useState } from 'react';

const ToDoForm = ({dispatch}) => {
    const [item, setItem] = useState('');
    
    const handleChange = event => {
        setItem(event.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: "ADD_TODO", payload: item})
        setItem('');
    }

    return(
        <div>
        <div className="form">
                <input 
                type="text"
                placeholder="Add Task"
                onChange={handleChange}
                value={item}
                 />
                <button onClick={handleSubmit}>
                    <span>Add</span>
                </button>
            </div>
           
        </div>
    )
};

export default ToDoForm;