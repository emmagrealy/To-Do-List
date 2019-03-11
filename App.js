import React, { Component } from "react";
import "./App.css";
import ToDos from "./components/ToDos";
import Header from "./components/layout/Header";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take Out Trash",
        completed: false
      },
      {
        id: 2,
        title: "Study",
        completed: false
      },
      {
        id: 3,
        title: "Clean Room",
        completed: false
      }
    ]
  };

  //toggle completed
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  delToDo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <ToDos
          todos={this.state.todos}
          markComplete={this.markComplete}
          delToDo={this.delToDo}
        />
      </div>
    );
  }
}

export default App;
