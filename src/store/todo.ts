import {makeAutoObservable} from "mobx";

type TodoType = { id: number; title: string; completed: boolean; }

class Todo {
    todos: TodoType[] = [
        {id: 1, title: 'task 1', completed: false},
        {id: 2, title: 'task 2', completed: false},
        {id: 3, title: 'task 3', completed: false},
    ]

    constructor() {
        makeAutoObservable(this)
    }

    addTodo(newTodo: TodoType) {
        this.todos.push(newTodo)
    }

    removeTodo(id: number | string) {
        this.todos = this.todos.filter(todo => todo.id !== id)
        console.log('removeTodo id :', id)
    }

    completeTodo(id: number | string) {
        this.todos = this.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
        console.log('completeTodo id :', id)
    }
}

export const todo = new Todo()


