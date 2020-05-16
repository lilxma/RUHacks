import React, { Component } from "react";
import todosData from "./todosData";
import TodoItem from "./TodoItem";


class Shopping extends Component {
    constructor() {
        super()
        this.state={
            todos: todosData
        }
    
    
    }
    
    
    
    
    
  render() {
       const todoComponents = this.state.todos.map(el => {
        return <TodoItem id={el.id}
        text={el.text}
        completed={el.completed}
           
        />
       })
    
               
               return  <div>
        <h2>Start Shopping</h2>
        
      <div className="todo-list">
                 {todoComponents}
                 </div>
      </div>
    
  }
}
 
export default Shopping;