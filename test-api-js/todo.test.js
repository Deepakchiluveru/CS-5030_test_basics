

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

    // const add_test = [{
    //     "title": "DeepakAdd1",
    //     "description": "Deepu1",
    //     "done": false
    // },
    // {
    //     "title": "DeepakAdd2",
    //     "description": "Deepu2",
    //     "done": true
    // },
    // {
    //     "title": "DeepakAdd3",
    //     "description": "Deepu3",
    //     "done": false
    // }
    // ];



    // // test case for add



    // test("add-todo", () => {
    //     add_test.forEach(function (obj) {
    //         expect(todo_service.add_todo(obj)).toEqual(obj);
    //     })
    // });

    // // //test case for update

    // const update_test = [{
    //     "title": "DeepakUpdate1",
    //     "description": "DeepuUpdate1",
    //     "done": false
    // },
    // {
    //     "title": "DeepakUpdate2",
    //     "description": "DeepuUpdate2",
    //     "done": false
    // },
    // {
    //     "title": "DeepakUpdate3",
    //     "description": "DeepuUpdate3",
    //     "done": true
    // }
    // ]

    // test("Update-todo", () => {
    //     for (i = 0; i < update_test.length; i++) {
    //         let obj = update_test[i];
    //         expect(todo_service.update_todo(i, obj)).toEqual(obj);
    //     }
    // })                              


    //test case for delete

    const delete_test = [{
        "title": "DeepakDelete1",
        "description": "Deepudelete1",
        "done": false
    },
    {
        "title": "DeepakDelete2",
        "description": "DeepuDelete2",
        "done": false
    },
    {
        "title": "DeepakDelete3",
        "description": "DeepuDelete3",
        "done": true
    }
    ]
    test("delete_todo", ()=> {
        todo_service.delete_todo(3);
        expect(todo_service.get_todos().length>1);
    });
})