import React from 'react';
//import './TodoList.css';
import {connect} from 'react-redux'
import {deleteTodo} from '../Actions/Actions'

//react
function TodoList({todoList, deleteTodo}){
    
    return(
        <div className="alignItems">
            {todoList.map(todo =>
                <ul key={todo.id}>
                    <li>{todo.text}</li>
                    <button onClick={()=> deleteTodo(todo.id)}> DELETE </button>
                </ul>
            )}
        </div>
    );
}

//redux
// 1 state
const mapStateToProps=state=>{
    return {todoList: state}
}

// 2 action
const mapDispatchToProps=dispatch=>{
    return {
        deleteTodo:(id)=>dispatch(deleteTodo(id))
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (TodoList);

