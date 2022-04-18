import { ProxyState } from "../AppState.js";
import { Todo } from "../Models/Todo.js";
import { imagesService } from "../Services/ImagesService.js";
import { todosService } from "../Services/TodosService.js";
import { Pop } from "../Utils/Pop.js";
import { ImagesController } from "./ImagesController.js";



function _drawTodos() {
    let template = ''
    ProxyState.myTodos.forEach(m => template += m.Template)
    document.getElementById("todos").innerHTML = template

}

// // function _getTodos() {
// //     ProxyState.myTodos.forEach(m => {const newTodo = new Todo(m)
        
// //     } )
// }

export class TodosController {
    constructor() {
        
        ProxyState.on("myTodos", _drawTodos)

        todosService.getTodos()
       
        _drawTodos()
        
    
       
    }

       async getTodos() {
        try {
           await todosService.getTodos()
        } catch (error) {
            Pop.toast(error.message, "error")
        }
    }

    async addTodo() {
        
        window.event.preventDefault()
        const formData = window.event.target
        const newTodo = {
            // @ts-ignore
            description: formData.description.value
        }
        await todosService.addTodo(newTodo)
        _drawTodos()
        
        
        
        
        
    }
    async removeTodo(id) {
        const yes = await Pop.confirm('Remove Todo?')
        if (yes) {
            todosService.removeTodo(id)
        }
    }
    async removeAllTodos(id) {
        await todosService.removeAllTodos(id)
    }

    async checkTodo(id) {
        
        await todosService.checkTodo(id)
        _drawTodos()
    }

}