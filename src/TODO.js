function TODO(Title, Description, DueDate) {
    function getTitle() {
        return Title
    }
    function getDescription() {
        return Description
    }
    function getDueDate() {
        return DueDate
    }

    function setTitle(newTitle) {
        Title = newTitle
        return Title
    }
    function setDescription(newDescription) {
        Description = newDescription
        return Description
    }
    function setDueDate(newDueDate) {
        DueDate = newDueDate
        return DueDate
    }

    return { getTitle, getDescription, getDueDate, setTitle, setDescription, setDueDate }
}

export default TODO;