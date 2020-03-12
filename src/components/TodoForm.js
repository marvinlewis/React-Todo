import React, { Component } from "react";

class TodoForm extends Component {

constructor(){
    super()
    this.state = {
        input : "",
    }
}

    handleInput = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addNewTask(this.state.input);
        this.setState({
            input: " "
        });
    }



render(){
     return(
         <>
        <form onSubmit={this.handleSubmit}>
            <button>Add Task</button>
            <input
            type="text"
            name="input"
            placeholder="Type here"
            onChange={this.handleInput}
            value={this.state.input}
            />
        </form>
        <div>
            <button onClick={this.props.clearCompleted}>Clear Completed</button>
        </div>
        </>
    )
  }
}

export default TodoForm;