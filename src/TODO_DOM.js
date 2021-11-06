import { addProject, addTODO, projectsList, removeTODO } from './index.js';
import { selectedProject } from './ProjectDOM.js';
import TODO from './TODO.js';
import removeIcon from './delete.svg';
import editIcon from './edit-2.svg';
import plusIcon from './plus.svg';

function TODO_DOM() {
    const content = document.querySelector("#content");

    function renderTODOs(project) {
        let i = 0;
        clearScreen();
        const todos = project.getAttribute('data-index') == null ? projectsList[0].getTODOs() : projectsList[+project.getAttribute('data-index')].getTODOs();
        todos.forEach((todo) => {
            appendTODO(todo, i);
            i += 1;
        })
    }

    function appendTODO(todo, index) {
        const lis = document.querySelectorAll("#content>li");
        const last_li = lis[lis.length - 1];

        const removeBtn = document.createElement('div');
        removeBtn.style.backgroundImage = `url(${removeIcon})`;
        removeBtn.setAttribute('id', 'todo-remove-btn');

        const editBtn = document.createElement('div');
        editBtn.style.backgroundImage = `url(${editIcon})`;
        editBtn.style.backgroundRepeat = "no-repeat";
        editBtn.style.height = "19px";
        editBtn.style.width = "19px";
        editBtn.style.cursor = "pointer";
        editBtn.style.position = "relative";
        editBtn.style.top = "13px";
        editBtn.style.marginRight = "40px";

        const iconContainer = document.createElement('div');
        iconContainer.style.display = "inline-block";
        iconContainer.appendChild(removeBtn);
        iconContainer.append(editBtn);

        removeBtn.addEventListener('click', (event) => {
            const TODOindex = event.target.parentNode.parentNode.getAttribute('data-index');
            removeTODO(+TODOindex, +selectedProject.getAttribute('data-index'));
            renderTODOs(selectedProject);
        })

        const li = document.createElement('li');
        li.setAttribute('data-index', index)
        li.textContent = todo.getTitle();
        li.style.display = 'flex';
        li.style.flexDirection = "row";
        li.style.justifyContent = "space-between";
        li.appendChild(iconContainer);

        last_li.parentNode.insertBefore(li, last_li);
    }

    function addEventListeners() {
        const addTODO = document.querySelector("#new-todo");
        addTODO.addEventListener('click', () => {
            renderForm();
        })

    }

    function renderForm() {
        const formContainer = document.createElement("div");
        formContainer.setAttribute('class', 'form-container');
        const container = document.createElement("div");
        container.setAttribute('class', 'container');
        const form = document.createElement('form');
        const flexContainer = document.createElement('div');
        flexContainer.setAttribute('class', 'flex-container');
        const first = document.createElement('div');
        first.setAttribute('class', 'first');
        const second = document.createElement('div');
        second.setAttribute('class', 'second');

        first.innerHTML = '<label for= "title" > Title : <br><input type="text" id="title"></label><br> <label for="description">Description : <br><textarea id="description"></textarea></label><br></br>'
        second.innerHTML = '<label for="due">Due Date : <br><input type="date" id="due"></label><br> <label for= "priority" > Priority: <br> <select name="priority" id="priority"> <option value="high">High</option> <option value="medium">Medium</option> <option value="low">Low</option> </select> </label>'

        flexContainer.appendChild(first);
        flexContainer.appendChild(second);

        container.append(flexContainer);


        const okBtn = document.createElement('button');
        okBtn.textContent = "OK";
        okBtn.setAttribute('id', 'add-todo');

        okBtn.addEventListener('click', (event) => {
            event.preventDefault();
            const Title = document.querySelector("#title").value;
            const Description = document.querySelector("#description").value;
            const Due = document.querySelector("#due").value;
            const Priority = document.querySelector("#priority").value;
            const todo = new TODO(Title, Description, Due, Priority);
            let index = 0;
            if (selectedProject.getAttribute('data-index')) {
                index = selectedProject.getAttribute('data-index');
            }
            addTODO(index, todo);
            removeForm();
            let projectIndex = selectedProject.getAttribute('data-index') == null ? 0 : selectedProject.getAttribute('data-index');
            let i = projectsList[projectIndex].TODOs.length;
            appendTODO(todo, i);
        })

        const cancelBtn = document.createElement('button');
        cancelBtn.textContent = "Cancel";
        cancelBtn.setAttribute('id', 'cancel-todo');

        cancelBtn.addEventListener('click', (event) => {
            event.preventDefault();
            removeForm();
        })

        container.appendChild(okBtn);
        container.appendChild(cancelBtn);

        form.appendChild(container);

        formContainer.appendChild(form);

        content.appendChild(formContainer);

    }
    function removeForm() {
        const formContainer = document.querySelector(".form-container");
        content.removeChild(formContainer);
    }

    function clearScreen() {
        const lis = document.querySelectorAll("#content>li");
        let i = 0;
        while (i < lis.length - 1) {
            content.removeChild(lis[i]);
            i++;
        }
    }

    function render() {
        const addTODO = document.querySelector("#add-todo");
        addTODO.style.background = `url(${plusIcon})`;
        addEventListeners();
        renderTODOs(selectedProject);
    }

    return { render, clearScreen, renderTODOs };
}

export default TODO_DOM;