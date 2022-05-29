import { addTODO, getProjectsList, removeTODO, replaceTODO } from "./index.js";
import TODO from "./TODO.js";

function TODO_DOM(selectedProject, user) {
  const content = document.querySelector("#content");
  function renderTODOs() {
    clearScreen();
    const projectsList = getProjectsList();
    const todos = projectsList[selectedProject.index].getTODOs();
    todos.forEach((todo, i) => {
      appendTODO(todo, i);
      i += 1;
    });
  }

  function appendTODO(todo, index) {
    const lis = document.querySelectorAll("#content>li");
    const last_li = lis[lis.length - 1];

    const removeBtn = document.createElement("button");
    removeBtn.classList.add("todo-remove-btn");
    removeBtn.classList.add("icon");

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.classList.add("icon");

    const iconContainer = document.createElement("div");
    iconContainer.classList.add("icons-container");
    iconContainer.append(editBtn);
    iconContainer.appendChild(removeBtn);

    removeBtn.addEventListener("click", () => {
      removeTODO(index, selectedProject.index, user);
      renderTODOs(selectedProject.index);
    });

    editBtn.addEventListener("click", () => {
      renderEditForm(index);
    });

    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = todo.getTitle();
    li.classList.add("todo-item");
    li.appendChild(p);
    li.appendChild(iconContainer);

    last_li.parentNode.insertBefore(li, last_li);
  }

  function addEventListeners() {
    const addTODO = document.querySelector("#add-todo");
    addTODO.addEventListener("click", () => {
      renderForm();
    });
  }

  function removeForm() {
    const modalContainer = document.querySelector("#modal-container");
    const content = document.querySelector("#content");
    content.removeChild(modalContainer);
  }

  function renderForm() {
    const projectsList = getProjectsList();
    const formContainer = document.createElement("div");
    formContainer.setAttribute("class", "form-container");
    const container = document.createElement("div");
    container.setAttribute("class", "container");
    const form = document.createElement("form");
    form.setAttribute("id", "todo-form");
    const flexContainer = document.createElement("div");
    flexContainer.setAttribute("class", "flex-container");
    const first = document.createElement("div");
    first.setAttribute("class", "first");
    const second = document.createElement("div");
    second.setAttribute("class", "second");

    first.innerHTML =
      '<label for= "title" > Title : <br><input type="text" id="title"></label><br> <label for="description">Description : <br><textarea id="description"></textarea></label><br></br>';
    second.innerHTML =
      '<label for="due">Due Date : <br><input type="date" id="due"></label><br> <label for= "priority" > Priority: <br> <select name="priority" id="priority"> <option value="high">High</option> <option value="medium">Medium</option> <option value="low">Low</option> </select> </label>';

    flexContainer.appendChild(first);
    flexContainer.appendChild(second);

    container.append(flexContainer);

    const okBtn = document.createElement("button");
    okBtn.textContent = "Add";
    okBtn.classList.add("ok-btn");

    okBtn.addEventListener("click", (event) => {
      event.preventDefault();
      const Title = document.querySelector("#title").value;
      const Description = document.querySelector("#description").value;
      const Due = document.querySelector("#due").value;
      const Priority = document.querySelector("#priority").value;
      const todo = new TODO(Title, Description, Due, Priority);
      let index = selectedProject.index;
      addTODO(index, todo, user);
      removeForm();
      let projectIndex = selectedProject.index;
      let i = projectsList[projectIndex].todos.length - 1;
      renderTODOs();
    });

    const cancelBtn = document.createElement("button");
    cancelBtn.textContent = "Cancel";
    cancelBtn.setAttribute("id", "cancel-todo");
    cancelBtn.classList.add("cancel-btn");

    cancelBtn.addEventListener("click", (event) => {
      event.preventDefault();
      removeForm();
    });

    container.appendChild(okBtn);
    container.appendChild(cancelBtn);

    form.appendChild(container);

    formContainer.appendChild(form);

    const modalContainer = document.createElement("div");
    modalContainer.setAttribute("id", "modal-container");

    modalContainer.appendChild(formContainer);

    content.appendChild(modalContainer);
  }

  function renderEditForm(TODOindex) {
    const projectIndex = selectedProject.index;
    const projectsList = getProjectsList();
    const project = projectsList[projectIndex];
    const currentTODO = project.getTODOs()[+TODOindex];

    const title = currentTODO.getTitle();
    const description = currentTODO.getDescription();
    const dueDate = currentTODO.getDueDate();
    const priority = currentTODO.getPriority();

    const formContainer = document.createElement("div");
    formContainer.setAttribute("class", "form-container");
    const container = document.createElement("div");
    container.setAttribute("class", "container");
    const form = document.createElement("form");
    form.setAttribute("id", "todo-form");
    const flexContainer = document.createElement("div");
    flexContainer.setAttribute("class", "flex-container");
    const first = document.createElement("div");
    first.setAttribute("class", "first");
    const second = document.createElement("div");
    second.setAttribute("class", "second");

    first.innerHTML = `<label for= "title" > Title : <br><input type="text" id="title" value="${title}"></label><br> <label for="description">Description : <br><textarea id="description">${description}</textarea></label><br></br>`;
    second.innerHTML = `<label for="due">Due Date : <br><input type="date" id="due" value=${dueDate}></label><br> <label for= "priority" > Priority: <br> <select name="priority" id="priority" selected=${priority}> <option value="high">High</option> <option value="medium">Medium</option> <option value="low">Low</option> </select> </label>`;

    const prioritySelect = second.querySelector("label>#priority");

    if (priority == "low") {
      prioritySelect.selectedIndex = 2;
    } else if (priority == "medium") {
      prioritySelect.selectedIndex = 1;
    }

    flexContainer.appendChild(first);
    flexContainer.appendChild(second);

    container.append(flexContainer);

    const okBtn = document.createElement("button");
    okBtn.textContent = "OK";
    okBtn.classList.add("ok-btn");

    okBtn.addEventListener("click", (event) => {
      event.preventDefault();
      const Title = document.querySelector("#title").value;
      const Description = document.querySelector("#description").value;
      const Due = document.querySelector("#due").value;
      const Priority = document.querySelector("#priority").value;
      const todo = new TODO(Title, Description, Due, Priority);
      let index = selectedProject.index;
      replaceTODO(index, TODOindex, todo, user);
      removeForm();
      renderTODOs();
    });

    const cancelBtn = document.createElement("button");
    cancelBtn.textContent = "Cancel";
    cancelBtn.setAttribute("id", "cancel-todo");
    cancelBtn.classList.add("cancel-btn");

    cancelBtn.addEventListener("click", (event) => {
      event.preventDefault();
      removeForm();
    });

    container.appendChild(okBtn);
    container.appendChild(cancelBtn);

    form.appendChild(container);

    formContainer.appendChild(form);

    const modalContainer = document.createElement("div");
    modalContainer.setAttribute("id", "modal-container");

    modalContainer.appendChild(formContainer);

    content.appendChild(modalContainer);
  }

  function clearScreen() {
    const content = document.querySelector("#content");
    const todos = document.querySelectorAll("#content>.todo-item");
    if (todos != null) {
      todos.forEach((todo) => {
        content.removeChild(todo);
      });
    }
  }

  function render() {
    renderTODOs();
    addEventListeners();
  }

  function reRender(project) {
    selectedProject = project;
    renderTODOs();
  }

  return { render, clearScreen, renderTODOs, reRender };
}

export default TODO_DOM;
