import React, { Component } from "react";
import PropTypes from "prop-types";

export class ToDoItem extends Component {
  getStyle = () => {
    return {
      backgroundColor: "#f4f4f4",
      padding: "10px",
      boarderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  markComplete = id => {
    console.log(id);
  };

  render() {
    const { id, title } = this.props.todo;

    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.markComplete.bind(this, id)} />{" "}
          {"  "}
          {title}
          <button onCLick={this.props.delToDo.bind(this, id)} style={btnStyle}>
            {" "}
            X{" "}
          </button>
        </p>
      </div>
    );
  }
}

const btnStyle = {
  background: "#ff0000",
  color: "#000",
  border: "none",
  padding: "5px 8px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right"
};

//prop types
ToDoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

export default ToDoItem;
