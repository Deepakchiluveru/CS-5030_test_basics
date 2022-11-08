class todoservice {
    todo_data = {
        "todo": [{
            "title": "learning ",
            "description": "JS",
            "done": false
        }, {
            "title": "Reading",
            "description": "Novel ",
            "done": false
        }, {
            "title": "Playing",
            "description": "Cricket",
            "done": false
        }]
    }
    constructor() {
        this.todos = this.todo_data;
    }

    get_todos() {
        return this.todos;
    }

    add_todo(todo) {
        // Your code here
        this.todo_data.todo.push(todo);
        return this.todo_data.todo[this.todo_data.todo.length - 1];
    }

    update_todo(id, todo) {
        // Your code here
        this.todo_data.todo[id] = todo;
        return this.todo_data.todo[id];  
    }

    delete_todo(id){
        // Your code here
    this.todos = this.todo_data.todo.pop(id);
    return this.todo_data;
}
}
module.exports = todoservice;

