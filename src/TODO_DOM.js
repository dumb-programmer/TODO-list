import { projectsList } from './index.js';
import { selectedProject } from './ProjectDOM.js';
import TODO from './TODO.js';

function TODO_DOM() {
    const content = document.querySelector("#content");

    function renderTODOs(project) {
        clearScreen();
        const todos = project.getAttribute('id') == 'default' ? projectsList[0].getTODOs() : projectsList[project.getAttribute('data-index')].getTODOs();
        // console.log(todos);
        // console.log(projectsList);
        todos.forEach((todo) => {
            appendTODO(todo);
        })
    }

    function appendTODO(todo) {
        const lis = document.querySelectorAll("#content>li");
        const last_li = lis[lis.length - 1];

        const li = document.createElement('li');
        li.textContent = todo.getTitle();

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

        okBtn.addEventListener('click', () => {
            const Title = document.querySelector("#title").value;
            const Description = document.querySelector("#description").value;
            const Due = document.querySelector("#due").value;
            const Priority = document.querySelector("#priority").value;
            // const project_dom = ProjectDOM();

            const todo = new TODO(Title, Description, Due, Priority);
            let index = 0;
            if (selectedProject.getAttribute('data-index')) {
                index = selectedProject.getAttribute('data-index');
                // console.log(index);
            }
            // console.log(index);
            // console.log(selectedProject);
            projectsList[index].addTODO(todo);

            // console.log(projectsList[index].getTODOs()[0].getTitle());
            // console.log(Title, Description, Due, Priority);
            removeForm();
            appendTODO(todo);
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
        // let id = lis[i].getAttribute('id');
        while (i < lis.length - 1) {
            content.removeChild(lis[i]);
            i++;
        }
    }

    function render() {
        addEventListeners();
        renderTODOs(selectedProject);
    }

    return { render, clearScreen, renderTODOs };
}

export default TODO_DOM;