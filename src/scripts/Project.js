class Project {
    constructor(name) {
        this.name = name;
        this.TODOs = []
    }

    getName() {
        return this.name
    }

    getTODOs() {
        return this.TODOs
    }

    addTODO(todo) {
        this.TODOs.push(todo)
    }

    replaceTODO(index, todo) {
        this.TODOs[index] = todo
    }

    removeTODO(index) {
        if (index == 0 && this.TODOs.length == 1) {
            this.TODOs = []
        }
        this.TODOs.splice(index, 1);
    }
}
export default Project;