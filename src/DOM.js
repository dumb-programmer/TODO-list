function DOM() {
    const main = document.querySelector("#content");
    const projects = document.querySelector("#projects");

    function renderProjects(projectsList) {
        for (let i = 0; i < projectsList.length; i++) {
            const li = document.createElement('li');
            li.textContent = projectsList[i].getName();
            projects.append(li);
        }
    }

    function addEventListenersToProjectBtns(){
        const projectAddBtn = document.querySelector("#add-project")
        const projectMoreBtn = document.querySelector("#more")

        projectAddBtn.addEventListener('click', () => {
            const li = document.createElement('li');
            const input = document.createElement('input');
            const removeBtn = document.createElement('button');
            removeBtn.setAttribute("id", "remove-project-btn");
            removeBtn.textContent = "Cancel";
            const addBtn = document.createElement('button');
            addBtn.setAttribute("id", "add-project-btn");
            addBtn.textContent = "Add"
            li.setAttribute('id', 'project-input');
            li.append(input);
            li.append(addBtn);
            li.append(removeBtn);
            projects.append(li);
        })
    }

    function addEventListenerToAside(){
        const aside = document.querySelector("")
    }

    function render(){
        // renderProjects();
        addEventListenersToProjectBtns();
    }

    return { render }
}

export default DOM;