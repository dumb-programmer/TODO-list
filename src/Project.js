class Project{
    constructor(name){
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

    removeTODO(index){
        this.TODOs.splice(index, index);
    }
}
export default Project;