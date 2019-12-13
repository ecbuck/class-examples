import React from "react";
import ToDo from "../ToDo/ToDo";
//import './Todo.css';
import { create } from "domain";
import { throwStatement } from "@babel/types";

class ToDoList extends React.Component {
  constructor(props) {
    super(props);

    this.state= {
      toDoInput: 'in'
    };
  

    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    this.handletoDoInputChange= this.handleToDoInputChange.bind(this);
    this.handleAdd=this.handleAdd.bind(this);
    this.handleKeyPress= this.handleKeyPress.bind(this);
  }

  createToDoListElements() {
    return this.props.list.map((todo, index) => {
      const item = {
        todo,
        index
      };
      return (
        <ToDo
          item={item}
          key={index}
          handleDeleteItem={this.handleDeleteItem}
        />
      );
    });
  }

  handleDeleteItem(index) {
    this.props.handleDeleteItem(index);
  }

  handleToDoInputChange(event){
    const newValue= event.target.value;
    this.setState({toDoInput: newValue})
  }
  handleKeyPress(event){
    if(event.key === 'Enter'){
      this.handleAdd();
    }
  }

  handleAdd(){
   const todo = this.state.toDoInput;

   if(todo){
     this.props.onAddItem(todo);
   }
  

  
   this.setState({
     toDoInput:''
   })
   this.nameInput.focus();
  }

  componentDidMount(){
    this.nameInput.focus();
  }

  render() {
    return (
      <div className="to-do-list-container">
        <h1>{this.props.name}</h1>
        <div>Add ToDo:</div>
        <input type="text" 
        value={this.state.toDoInput}
        onChange={this.handletoDoInputChange} 
        onKeyPress={ this.handleKeyPress}
        ref={(input)=> {this.nameInput = input;}}

        />
        <button onClick={ this.handleAdd }>ADD</button>
        <div className="list">{this.createToDoListElements()}</div>
      </div>
    );
  }
}
export default ToDoList;
