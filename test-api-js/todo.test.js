var todoservice = require('./todo.service.js');
describe('todo test suite', () => {

    test("truth_value", () => {
        expect(true).toBe(true);
    });

    let todo_service = new todoservice();

    test("if service instance is created", () => {
        expect(todo_service instanceof todoservice).toBe(true);
    });


    // Initial length of the todo list is 3 // 3 default tasks
    test("get_todos", () => {
        expect(todo_service.get_todos().todo.length).toEqual(3);
    });
    // test case for add

    const add_test = [{
        "title": "DeepakAdd1",
        "description": "Deepu1",
        "done": false
    },
    {
        "title": "DeepakAdd2",
        "description": "Deepu2",
        "done": true
    },
    {
        "title": "DeepakAdd3",
        "description": "Deepu3",
        "done": false
    }
    ];



    // test case for add



    test("add-todo", () => {
        add_test.forEach(function (obj) {
            expect(todo_service.add_todo(obj)).toEqual(obj);
        })
    });
})
