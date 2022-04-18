import { ProxyState } from "../AppState.js"
import { Todo } from "../Models/Todo.js"
import { sandboxApi } from "./AxiosService.js"

class TodosService {
    async checkTodo(id) {
        
        let found = ProxyState.myTodos.find(m => m.id == id)
         found.completed = !found.completed
         ProxyState.myTodos = ProxyState.myTodos
         await sandboxApi.put('tobycomon/todos/' + found.id, found)

         
    }
    async addTodo(data) {
        const res = await sandboxApi.post('tobycomon/todos/', data)
        const myTodos = new Todo(res.data)
        // ProxyState.todos = [...ProxyState.todos, myTodos]
        ProxyState.myTodos = [...ProxyState.myTodos, myTodos]
        // return myTodos.description

    }

    async getTodos(){
        const res = await sandboxApi.get('tobycomon/todos/')
        res.data.forEach(t => {const newTodo = new Todo(t)
        ProxyState.myTodos = [...ProxyState.myTodos, newTodo]
        ProxyState.myTodos.length
           
    })
       
        
        
    }
    async removeTodo(id) {
        await sandboxApi.delete('tobycomon/todos/' + id)
        ProxyState.myTodos = ProxyState.myTodos.filter(m => m.id !== id)
    }
    async removeAllTodos(id) {
        sandboxApi.delete('tobycomon/todos/' + id)
        ProxyState.myTodos = ProxyState.myTodos.filter(m => m.description !== id)
    }
    
    
}






export const todosService = new TodosService()