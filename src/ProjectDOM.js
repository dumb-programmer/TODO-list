import { projectsList, addProject, getProjectsList, removeProject, replaceProject } from './index.js';
import Project from './Project.js';
import TODO_DOM from './TODO_DOM.js';
import upChevronIcon from './chevron-up.svg';
import downChevronIcon from './chevron-down.svg';
import plusIcon from './plus.svg';
import trashIcon from './trash-2.svg';
import inboxIcon from './inbox.svg';
import editIcon from './edit-2.svg';

let selectedProject = document.querySelector("#default");

function ProjectDOM() {
    const ulProjects = document.querySelector("#projects");
    const todo_dom = TODO_DOM();

    function addEventListenersToProject(li) {
        li.addEventListener('click', () => {
            selectedProject.style.backgroundColor = "#282828";
            li.style.backgroundColor = "#363636";
            selectedProject = li;
            todo_dom.renderTODOs(selectedProject);
        });
    }

    function renderProjects(projectsList) {
        for (let i = 1; i < projectsList.length; i++) {
            if (projectsList[i] != null) {
                appendProject(projectsList, i);
            }
        }
    }

    function appendProject(projectsList, index) {
        const li = document.createElement('li');
        const deleteBtn = document.createElement('div');
        deleteBtn.setAttribute('remove-btn-index', index);
        deleteBtn.setAttribute('id', 'project-delete-btn');
        deleteBtn.style.background = `url(${trashIcon})`;
        deleteBtn.style.marginLeft = "5px";
        const editBtn = document.createElement('div');
        editBtn.style.display = "inline-block";
        editBtn.style.position = "relative";
        editBtn.style.top = "3px";
        editBtn.style.marginLeft = "5px";
        editBtn.style.background = `url(${editIcon})`;
        editBtn.style.backgroundRepeat = 'no-repeat';
        editBtn.style.height = '19px';
        editBtn.style.width = '19px';

        editBtn.addEventListener('click', (event) => {
            const current_li = event.target.parentNode;
            current_li.innerHTML = "";

            const input = document.createElement('input');
            input['value'] = project.getName();

            const addBtn = document.createElement('button');
            addBtn.setAttribute("id", "add-project-btn");
            addBtn.textContent = "Add"

            addBtn.addEventListener('click', () => {
                const name = input.value;
                const new_project = new Project(name);

                replaceProject(index, new_project);

                current_li.innerHTML = "";
                current_li.textContent = new_project.getName();
                current_li.append(editBtn);
                current_li.append(deleteBtn);
                projectsList = getProjectsList();
                project = projectsList[index];
            })

            const cancelBtn = document.createElement('button');
            cancelBtn.setAttribute("id", "cancel-project-btn");
            cancelBtn.textContent = "Cancel";

            cancelBtn.addEventListener('click', () => {
                current_li.textContent = project.getName();
                current_li.append(editBtn);
                current_li.append(deleteBtn);
            });

            current_li.setAttribute('id', 'project-input');
            current_li.append(input);
            current_li.append(addBtn);
            current_li.append(cancelBtn);
        });

        deleteBtn.addEventListener('click', (event) => {
            const projectsListDiv = document.querySelector("#projects");
            const li = event.target.parentNode;
            projectsListDiv.removeChild(li);
            removeProject(index);
        });

        let project = projectsList[index];

        li.textContent = project.getName();
        li.setAttribute('data-index', index);
        li.append(editBtn);
        li.append(deleteBtn);
        ulProjects.append(li);
        addEventListenersToProject(li);
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
                addProject(project);

                const inputLi = document.querySelector("#project-input");
                ulProjects.removeChild(inputLi);
                appendProject(projectsList, projectsList.length - 1);
            })

            const cancelBtn = document.createElement('button');
            cancelBtn.setAttribute("id", "cancel-project-btn");
            cancelBtn.textContent = "Cancel";

            cancelBtn.addEventListener('click', () => {
                const li = document.querySelector("#project-input");
                ulProjects.removeChild(li);
            })

            li.setAttribute('id', 'project-input');
            li.append(input);
            li.append(addBtn);
            li.append(cancelBtn);
            ulProjects.append(li);

        })

        projectMoreBtn.addEventListener('click', () => {
            const lis = document.querySelectorAll("#projects>li");
            const icon = document.querySelector("#more");
            if (lis.length > 0) {
                icon.style.background = `url(${upChevronIcon})`;
                clearProjectsList();
            }
            else {
                icon.style.background = `url(${downChevronIcon})`;
                renderProjects(projectsList);
            }
        })

        defaultProject.addEventListener('click', (event) => {
            selectedProject.style.backgroundColor = "#282828";
            defaultProject.style.backgroundColor = "#363636";
            selectedProject = event.target; 
            todo_dom.renderTODOs(selectedProject);
        })
    }

    function clearProjectsList() {
        const li = document.querySelectorAll("#projects>li");
        li.forEach((li) => {
            ulProjects.removeChild(li);
        });
    }

    function render() {
        const chevronIcon = document.querySelector("#more");
        chevronIcon.style.background = `url(${downChevronIcon})`;
        const addProject = document.querySelector("#new-project");
        addProject.style.background = `url(${plusIcon})`;
        const defaultImg = document.querySelector("#default>img");
        defaultImg['src'] = inboxIcon;

        renderProjects(getProjectsList());
        addEventListeners();
    }

    return { render }
}

export { ProjectDOM, selectedProject };