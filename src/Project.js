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
        if(index == 0 && this.TODOs.length == 1){
            this.TODOs = []
        }
        this.TODOs.splice(index, index);
    }
}
export default Project;