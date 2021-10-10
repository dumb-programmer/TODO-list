import { projectsList, myStorage } from './index.js';
import Project from './Project.js';
// import TODO from './TODO.js';
import TODO_DOM from './TODO_DOM.js';

let selectedProject = document.querySelector("#default");

function ProjectDOM() {
    const ulProjects = document.querySelector("#projects");
    const todo_dom = TODO_DOM();

    function addEventListenersToProjects() {
        const lis = document.querySelectorAll("#projects>li");
        // console.log(lis);
        lis.forEach((li) => {
            li.addEventListener('click', (event) => {
                // console.log(typeof JSON.parse(myStorage.projectsList));
                selectedProject.style.backgroundColor = "#282828";
                li.style.backgroundColor = "#363636";
                selectedProject = event.target;
                // console.log(selectedProject);
                // todo_dom.clearScreen();
                todo_dom.renderTODOs(selectedProject);
            })
        })
    }

    function renderProjects(projectsList) {
        // console.log(projectsList.length);
        for (let i = 1; i < projectsList.length; i++) {
            const li = document.createElement('li');
            li.setAttribute('data-index', i);
            const deleteBtn = document.createElement('button');
            const img = document.createElement('img');
            img['src'] = "../dist/delete.png";
            img.setAttribute('remove-btn-index', projectsList.length - 1);
            deleteBtn.setAttribute('id', 'project-delete-btn');
            deleteBtn.setAttribute('data-btn-index', i);
            deleteBtn.style.border = "none";
            deleteBtn.style.backgroundColor = "#282828";
            deleteBtn.append(img);


            deleteBtn.addEventListener('click', (event) => {
                let index = event.target.getAttribute("remove-btn-index");
                projectsList.splice(index, index);
                clearProjectsList();
                renderProjects(projectsList);
            })

            li.textContent = projectsList[i].getName();
            li.append(deleteBtn);
            ulProjects.append(li);
        }
        addEventListenersToProjects();
    }

    function appendProject(projectsList) {
        const li = document.createElement('li');
        const deleteBtn = document.createElement('button');
        const img = document.createElement('img');
        img['src'] = "../dist/delete.png";
        img.setAttribute('remove-btn-index', projectsList.length - 1);
        deleteBtn.setAttribute('id', 'project-delete-btn');
        deleteBtn.setAttribute('remove-btn-index', projectsList.length - 1);
        deleteBtn.style.border = "none";
        deleteBtn.style.backgroundColor = "#282828";
        // deleteBtn.textContent = "remove";
        // deleteBtn.style.backgroundImage = "url(../src/delete.png)";
        deleteBtn.append(img);


        deleteBtn.addEventListener('click', (event) => {
            let index = event.target.getAttribute("remove-btn-index");
            projectsList.splice(index, index);
            // console.log(projectsList);
            clearProjectsList();
            renderProjects(projectsList);
            // console.log(index);
        })

        li.textContent = projectsList[projectsList.length - 1].getName();
        li.setAttribute('data-index', projectsList.length - 1);
        li.append(deleteBtn);
        ulProjects.append(li);
        addEventListenersToProjects();
    }

    function addEventListeners() {
        const projectAddBtn = document.querySelector("#new-project");
        const projectMoreBtn = document.querySelector("#more");
        const defaultProject = document.querySelector("#default");

        projectAddBtn.addEventListener('click', () => {
            const li = document.createElement('li');
            const input = document.createElement('input');

            const addBtn = document.createElement('button');
            addBtn.setAttribute("id", "add-project-btn");
            addBtn.textContent = "Add"

            addBtn.addEventListener('click', () => {
                const name = input.value;
                const project = new Project(name);
                projectsList.push(project);

                const li = document.querySelector("#project-input");
                ulProjects.removeChild(li);
                appendProject(projectsList);
                // console.log(projectsList);
            })

            const cancelBtn = document.createElement('button');
            cancelBtn.setAttribute("id", "cancel-project-btn");
            cancelBtn.textContent = "Cancel";

            cancelBtn.addEventListener('click', () => {
                const li = document.querySelector("#project-input");
                ulProjects.removeChild(li);
                // console.log(projectsList);
            })

            li.setAttribute('id', 'project-input');
            li.append(input);
            li.append(addBtn);
            li.append(cancelBtn);
            ulProjects.append(li);

        })

        projectMoreBtn.addEventListener('click', () => {
            const lis = document.querySelectorAll("#projects>li");
            const icon = document.querySelector("#more>img");
            // console.log(lis);
            if (lis.length > 0) {
                icon['src'] = "../dist/up-chevron.png";
                lis.forEach((li) => {
                    ulProjects.removeChild(li);
                });
            }
            else {
                icon['src'] = "../dist/down-chevron.png";
                // console.log(icon);
                renderProjects(projectsList);
                // console.log("hello");
            }
        })

        defaultProject.addEventListener('click', (event) => {
            selectedProject.style.backgroundColor = "#282828";
            defaultProject.style.backgroundColor = "#363636";
            selectedProject = event.target;
            // console.log(selectedProject);
            // todo_dom.clearScreen();
            todo_dom.renderTODOs(selectedProject);
        })

        // if (projectDeleteBtns) {

        //     projectDeleteBtns.addEventListener('click', (event) => {
        //         let index = event.target.getAttribute("remove-btn-index");
        //         projectsList = projectsList.splice(index, index);
        //         clearProjectsList();
        //         renderProjects(projectsList);
        //     })
        // }
    }

    function clearProjectsList() {
        const li = document.querySelectorAll("#projects>li");
        li.forEach((li) => {
            ulProjects.removeChild(li);
        });
    }
    function render() {
        // renderProjects();
        addEventListeners();
    }

    return { render }
}

export { ProjectDOM, selectedProject };