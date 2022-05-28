class Project {
    constructor(name) {
        this.name = name;
        this.todos = []
    }

    getName() {
        return this.name
    }

    getTODOs() {
        return this.todos
    }

    setName(name){
        this.name = name;
    }

    addTODO(todo) {
        this.todos.push(todo)
    }

    replaceTODO(index, todo) {
        this.todos[index] = todo
    }

    removeTODO(index) {
        if (index == 0 && this.todos.length == 1) {
            this.todos = []
        }
        this.todos.splice(index, 1);
    }
}
export default Project;