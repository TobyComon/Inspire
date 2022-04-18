

export class Todo {
    constructor(data){
        this.description = data.description
        this.id = data.id
        this.completed = data.completed
    }
    get Template() {
        return /*html*/`
        
        <div>
        <i class="mdi ${this.completed ? "mdi-check strikethrough" : "mdi-square"} selectable" 
        onclick="app.todosController.checkTodo('${this.id}')"><h5>${this.description}</h5></i>
        </div>
        
        <div>
        <button class="btn-sm btn-danger" onclick="app.todosController.removeTodo('${this.id}')">Remove Todo
        </div>
        `
    }
}