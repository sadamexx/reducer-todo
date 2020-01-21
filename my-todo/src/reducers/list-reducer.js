

export const initialState = [
       {
        item: 'Wash my dog',
        completed: false,
        id: 1234
        },
        {
        item: 'Go grocery shopping',
        completed: false,
        id: 4321
        },
        {
            item: 'Make phone calls',
            completed: false,
            id: 4567
        },
        {
            item: 'Put gas in car',
            completed: false,
            id: 7894
        },

   ];



const listReducer = (state, action) => {
    switch(action.type) {
        case: "ADD_TODO":
        return {
            ...state,
        }
    }
}



