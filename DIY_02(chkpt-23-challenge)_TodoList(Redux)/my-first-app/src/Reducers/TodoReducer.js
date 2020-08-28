import { ADD_TODO, DELETE_TODO } from '../Actions/ActionsTypes';

const initialState= [
    {id: Math.random(),
        text: "task 1"
    },{id: Math.random(),
        text: "task 2"
    },{id: Math.random(),
        text: "task 3"
    }
]

const TodoReducer=(state=initialState, action) => {
    switch(action.type){
        case ADD_TODO:
            return state.concat(action.payload)

        case DELETE_TODO:
            return state.filter(todo => todo.id !== action.id);
        
        default: 
            return state
    }

}

export default TodoReducer;



