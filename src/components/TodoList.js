// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";


const TodoList = props => {
    return (
        <div>
        {props.tasks.map(item => (  
        <Todo
        key={item.id}
        task={item.task} 
        toggleCompleted={props.toggleCompleted}
        item={item}
        />))}   

                      
        </div> 
    )
}

export default TodoList;

