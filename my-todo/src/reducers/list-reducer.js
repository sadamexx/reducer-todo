
export const startingTodo = [
        {
        item: 'Wash my dog',
        completed: false,
        id: 1
        },
        {
        item: 'Go grocery shopping',
        completed: false,
        id: 2
        },
        {
            item: 'Make phone calls',
            completed: false,
            id: 3
        },
        {
            item: 'Put gas in car',
            completed: false,
            id: 4
        },
   ];



export const listReducer = (state, action) => {
    switch(action.type) {
        case "ADD_TODO":
            return [
                ...state,
                {item: action.payload,
                completed: false,
                id: Date.now()}
            ]
        
        case "TOGGLE_COMPLETE":
            return state.map(task => {
                if (task.id === action.payload) {
                    return {...task, completed: !task.completed};
                } else {
                    return task;
                }
            })    

        case "CLEAR_COMPLETED":
               return state.filter(task => !task.completed);
    
        default:
            return state;
    }
};


