function Project(Name) {
    let TODOs = []

    function getName() {
        return Name
    }

    function getTODOs() {
        return TODOs
    }

    function addTODO(todo) {
        TODOs.push(todo)
    }

    return { getName, getTODOs, addTODO }
}

export default Project;