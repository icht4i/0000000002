import React, { Component } from "react";
import Todo from "./Todo"
import NewTodoForm from "./NewTodoForm"
import "./TodoList.css"

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [],
        }
        this.create = this.create.bind(this)
        this.update = this.update.bind(this)
        this.toggleCompletion = this.toggleCompletion.bind(this)
    }
    create(newTodo) {
        this.setState({
            todos: [...this.state.todos, newTodo],
        })
    }
    remove(id) {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }
    update(id, updateTask) {
        const updateTodos = this.state.todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, task: updateTask }
            }
            return todo
        })
        this.setState({ todos: updateTodos })
    }
    toggleCompletion(id) {
        const updateTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed }
            }
            return todo
        })
        this.setState({
            todos: updateTodos,
        })
    }

    render() {
        const todos = this.state.todos.map((todo) => {
            return (
                <Todo
                    key={todo.id}
                    id={todo.id}
                    completed={todo.completed}
                    updateTodo={this.update}
                    task={todo.task}
                    removeTodo={() => this.remove(todo.id)}
                    toggleTodo={this.toggleCompletion} />
            )
        })
        return (
            <div className='TodoList'>
                <h1>
                    Yapılacaklar Listesi <span>React ile Todo List Uygulaması</span>
                </h1>
                <ul> {todos} </ul>
                <NewTodoForm createTodo={this.create} />
            </div>
        )
    }
}
export default TodoList