function TODO(Title, Description, DueDate, Priority) {
    function getTitle() {
        return Title
    }
    function getDescription() {
        return Description
    }
    function getDueDate() {
        return DueDate
    }
    function getPriority(){
        return Priority;
    }

    function setTitle(newTitle) {
        Title = newTitle
    }
    function setDescription(newDescription) {
        Description = newDescription
    }
    function setDueDate(newDueDate) {
        DueDate = newDueDate
    }
    
    function setPriority(newPriority){
        Priority = newPriority;
    }

    return { getTitle, getDescription, getDueDate, getPriority, setTitle, setDescription, setDueDate, setPriority }
}

export default TODO;