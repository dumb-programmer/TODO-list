import { addTODO, projectsList, removeTODO, replaceTODO } from "./index.js";
import { selectedProject } from "./ProjectDOM.js";
import TODO from "./TODO.js";
import plusIcon from "./plus.svg";

function TODO_DOM() {
  const content = document.querySelector("#content");

  function renderTODOs(project) {
    let i = 0;
    clearScreen();
    const projectToRender =
      project.getAttribute("data-index") == null
        ? projectsList[0]
        : projectsList[+project.getAttribute("data-index")];
    const todos =
      projectToRender == null
        ? projectsList[+project.getAttribute("data-index") - 1].getTODOs()
        : projectToRender.getTODOs();
    todos.forEach((todo) => {
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

    removeBtn.addEventListener("click", (event) => {
      const TODOindex =
        event.target.parentNode.parentNode.getAttribute("data-index");
      removeTODO(+TODOindex, +selectedProject.getAttribute("data-index"));
      renderTODOs(selectedProject);
    });

    editBtn.addEventListener("click", (event) => {
      renderEditForm(
        event.target.parentNode.parentNode.getAttribute("data-index")
      );
    });

    const li = document.createElement("li");
    li.setAttribute("data-index", index);
    const p = document.createElement("p");
    p.textContent = todo.getTitle();
    li.classList.add("todo-item");
    li.appendChild(p);
    li.appendChild(iconContainer);

    last_li.parentNode.insertBefore(li, last_li);
  }

  function addEventListeners() {
    const addTODO = document.querySelector("#new-todo");
    addTODO.addEventListener("click", () => {
      renderForm();
    });
  }

  function renderForm() {
    const addTODOBtn = document.querySelector("#add-todo");
    addTODOBtn.style.display = "None";
    const formContainer = document.createElement("div");
    formContainer.setAttribute("class", "form-container");
    const container = document.createElement("div");
    container.setAttribute("class", "container");
    const form = document.createElement("form");
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
    okBtn.textContent = "OK";
    okBtn.setAttribute("id", "add-todo");

    okBtn.addEventListener("click", (event) => {
      addTODOBtn.style.display = "";
      event.preventDefault();
      const Title = document.querySelector("#title").value;
      const Description = document.querySelector("#description").value;
      const Due = document.querySelector("#due").value;
      const Priority = document.querySelector("#priority").value;
      const todo = new TODO(Title, Description, Due, Priority);
      let index = 0;
      if (selectedProject.getAttribute("data-index")) {
        index = selectedProject.getAttribute("data-index");
      }
      addTODO(index, todo);
      removeForm();
      let projectIndex =
        selectedProject.getAttribute("data-index") == null
          ? 0
          : selectedProject.getAttribute("data-index");
      let i = projectsList[projectIndex].TODOs.length - 1;
      appendTODO(todo, i);
    });

    const cancelBtn = document.createElement("button");
    cancelBtn.textContent = "Cancel";
    cancelBtn.setAttribute("id", "cancel-todo");

    cancelBtn.addEventListener("click", (event) => {
      addTODOBtn.style.display = "";
      event.preventDefault();
      removeForm();
    });

    container.appendChild(okBtn);
    container.appendChild(cancelBtn);

    form.appendChild(container);

    formContainer.appendChild(form);

    content.appendChild(formContainer);
  }

  function renderEditForm(TODOindex) {
    const projectIndex =
      selectedProject.getAttribute("data-index") == null
        ? 0
        : selectedProject.getAttribute("data-index");
    const project = projectsList[projectIndex];
    const currentTODO = project.getTODOs()[+TODOindex];

    const title = currentTODO.getTitle();
    const description = currentTODO.getDescription();
    const dueDate = currentTODO.getDueDate();
    const priority = currentTODO.getPriority();

    const addTODOBtn = document.querySelector("#add-todo");
    addTODOBtn.style.display = "None";
    const formContainer = document.createElement("div");
    formContainer.setAttribute("class", "form-container");
    const container = document.createElement("div");
    container.setAttribute("class", "container");
    const form = document.createElement("form");
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
    okBtn.setAttribute("id", "add-todo");

    okBtn.addEventListener("click", (event) => {
      addTODOBtn.style.display = "";
      event.preventDefault();
      const Title = document.querySelector("#title").value;
      const Description = document.querySelector("#description").value;
      const Due = document.querySelector("#due").value;
      const Priority = document.querySelector("#priority").value;
      const todo = new TODO(Title, Description, Due, Priority);
      let index = 0;
      if (selectedProject.getAttribute("data-index")) {
        index = selectedProject.getAttribute("data-index");
      }
      replaceTODO(index, TODOindex, todo);
      removeForm();
      renderTODOs(selectedProject);
    });

    const cancelBtn = document.createElement("button");
    cancelBtn.textContent = "Cancel";
    cancelBtn.setAttribute("id", "cancel-todo");

    cancelBtn.addEventListener("click", (event) => {
      addTODOBtn.style.display = "";
      event.preventDefault();
      removeForm();
    });

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
