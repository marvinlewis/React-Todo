import React from "react";
import "./Todo.css";

const Todo = props => {
    console.log(props)

    return (
        <div
         onClick={() => props.toggleCompleted(props.item.id)}
         >
            <p className={`item${props.item.completed ? 'completed' : ""}`} >{props.task}</p>
        </div>
    )
}

export default Todo; 