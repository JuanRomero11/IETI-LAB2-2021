import React from 'react';
import {Todo} from './Todo';
import {TodoList} from "./TodoList";



export class TodoApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {items:[{text:"Learn React", priority:5, dueDate: new Date() },
      {text:"Learn about APIs", priority:4, dueDate: new Date(2020,1,23) },
      {text:"write TODO App", priority:3, dueDate: new Date(2020,1,30) }], text: '', priority:'',dueDate:new Date(Date.now()) };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChangePrio = this.handleChangePrio.bind(this);
      this.handleChangeDue = this.handleChangeDue.bind(this);

    }
  
    render() {
      return (
        <div class="grid-block"  className="TodoApp" >
          
          <h1>TODO APP</h1>
         
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="new-todo">
              <h3>Ingrese el texto</h3>
            </label>
            <input
              id="new-todo"
            
              onChange={this.handleChange}
              value={this.state.text}
            />
            <input
              id="new-todo2"
              
              onChange={this.handleChangePrio}
              value={this.state.priority}
            />

            <button class ="myButton">
              Add #{this.state.items.length + 1}
            </button>
            <TodoList numbers={this.state.items} />
          </form>

           
        </div>
      );
    }
  
    handleChange(e) {
      this.setState({ text: e.target.value });
    }

    handleChangePrio(e){
        this.setState({ priority: e.target.value })
    }

    handleChangeDue(e){
        this.setState({ dueDate: e.target.value })
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (!this.state.text.length) {
        return;
      }
      const newItem = {
        text: this.state.text,
        priority : this.state.priority,
        dueDate : new Date()
      };
      this.setState(prevState => ({
        items: prevState.items.concat(newItem),
        text: ''
      }));
    }
  }