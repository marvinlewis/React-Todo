import React from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";


const tasks = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
 ];



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super()
    this.state = {
      tasks,
      task: "",
  
    }
  }

  toggleCompleted = clickedID => {
    this.setState({
      tasks: this.state.tasks.map(item => {
        if(item.id === clickedID) {
          return {...item, 
            completed : !item.completed
                  };
        }
        else {
          return item
        }
      })
    })

  }


  addNewTask = (addeditem) => {
    const newTask = {
      task: addeditem,
      id: Date.now(),
      completed: false
    };

    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  clearCompleted = () => {
    this.setState({
      ...this.state,
      tasks: tasks.filter(task => !task.completed )        
  })}




  render() 
  {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm 
        addNewTask={this.addNewTask}
        clearCompleted={this.clearCompleted}
        />
        <TodoList 
        tasks={this.state.tasks}
        toggleCompleted={this.toggleCompleted}  
        />
      </div>
    );
  }
}

export default App;
