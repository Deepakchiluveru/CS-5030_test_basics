class todoservice{
    todo_data = {
        "todo":[{
            "title": "T1",
            "description": "Deepu",
            "done": false
        },{
            "title": "T1",
            "description": "Deepu",
            "done": false
        },{
            "title": "T1",
            "description": "Deepu",
            "done": false
        }]
    }
    constructor(){
        this.todos=this.todo_data;
    }

    get_todos(){
        return this.todos;
    }

    add_todo(todo){
        // Your code here
        this.todo_data.todo.push(todo);
        // console.log(todo);
        return this.todo_data.todo[this.todo_data.todo.length-1];
    }

}

module.exports= todoservice;