import React, {useState} from 'react';
import {addTodo} from '../Actions/Actions';
import {connect} from 'react-redux'

//react
function TodoForm({addTodo}){
    //input state
    const [value, setValue]= useState("");

    //add task
    const handleADD=()=> {
        addTodo({
            id:Math.random(),
            text: value,
            //isComplete: false
        });
        setValue("");
    };

    return(
        <div>
            <input type="text" value={value}
            onChange={(e)=>setValue(e.target.value)}/>
            
            <button onClick={handleADD}>Add todo</button>
        </div>
    )
}

//redux
//1 : state




//2 : actions

const mapDispatchToProps= dispatch => {
    return {
        addTodo: (payload)=> dispatch(addTodo(payload))
    }
}

//connect redux to react
export default connect(null,mapDispatchToProps) (TodoForm)
