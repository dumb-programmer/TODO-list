import { addTODO, getProjectsList, removeTODO, replaceTODO } from "./index.js";
import TODO from "./TODO.js";
import toTitleCase from "./toTitleCase.js";

function TODO_DOM(selectedProject, user) {
  const content = document.querySelector("#content");
  function renderTODOs() {
    clearScreen();
    const projectsList = getProjectsList();
    const todos = projectsList[selectedProject.index].getTODOs();
    todos.forEach((todo, i) => {
      appendTODO(todo, i);
    });
  }

  function getColorIndicator(priority) {
    let color = "";
    switch (priority) {
      case "high":
        color = "red";
        break;
      case "medium":
        color = "orange";
        break;
      case "low":
        color = "green";
        break;
    }
    return color;
  }

  function createTodoDetail(todo) {
    const detailsContainer = document.createElement("div");
    detailsContainer.classList.add("details-container");
    const desc = document.createElement("div");
    desc.classList.add("description");

    const descHeader = document.createElement("h3");
    descHeader.textContent = "Description";
    const descText = document.createElement("p");
    descText.textContent = todo.getDescription();
    desc.appendChild(descHeader);
    desc.appendChild(descText);

    const urgency = document.createElement("div");
    urgency.classList.add("urgency");
    const calIcon = document.createElement("span");
    calIcon.classList.add("calender");
    calIcon.classList.add("small-icon");
    const dueDate = document.createElement("p");
    dueDate.textContent = todo.getDueDate();
    dueDate.style.marginLeft = "2rem";
    const priorityHeading = document.createElement("span");
    priorityHeading.textContent = "Priority";
    priorityHeading.classList.add("small-heading");
    const priorityIndicator = document.createElement("span");
    priorityIndicator.classList.add("priority-indicator");
    priorityIndicator.style.backgroundColor = getColorIndicator(
      todo.getPriority()
    );
    const priority = document.createElement("p");
    priority.textContent = toTitleCase(todo.getPriority());

    const dueDateInfo = document.createElement("div");
    dueDateInfo.style.paddingBottom = "0.5rem";
    dueDateInfo.appendChild(calIcon);
    dueDateInfo.appendChild(dueDate);

    const priorityInfo = document.createElement("div");
    priorityInfo.style.display = "flex";
    priorityInfo.style.alignItems = "center";
    priorityInfo.style.flexWrap = "wrap";
    priorityInfo.appendChild(priorityHeading);
    priorityInfo.appendChild(priorityIndicator);
    priorityInfo.appendChild(priority);

    const elems = [dueDateInfo, priorityInfo];
    elems.forEach((elem) => {
      urgency.appendChild(elem);
    });

    detailsContainer.appendChild(desc);
    detailsContainer.appendChild(urgency);

    return detailsContainer;
  }

  function removeTodoDetails(target) {
    const detailsContainer = target.querySelector(".details-container");
    target.removeChild(detailsContainer);
  }

  function appendTODO(todo, index) {
    const lis = document.querySelectorAll("#content>ul>li");
    const last_li = lis[lis.length - 1];

    let expandTodo = false;
    const expandTodoBtn = document.createElement("button");
    expandTodoBtn.classList.add("icon");
    expandTodoBtn.classList.add("expand-todo-btn");
    expandTodoBtn.setAttribute("aria-label", "expand todo");

    const removeBtn = document.createElement("button");
    removeBtn.classList.add("todo-remove-btn");
    removeBtn.classList.add("icon");
    removeBtn.setAttribute("aria-label", "remove todo");

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.classList.add("icon");
    editBtn.setAttribute("aria-label", "edit todo");

    const iconsContainer = document.createElement("div");
    iconsContainer.classList.add("icons-container");
    iconsContainer.appendChild(expandTodoBtn);
    iconsContainer.appendChild(editBtn);
    iconsContainer.appendChild(removeBtn);

    const li = document.createElement("li");
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.justifyContent = "space-between";
    container.style.width = "100%";
    const p = document.createElement("p");
    p.textContent = todo.getTitle();
    li.classList.add("todo-item");

    container.appendChild(p);
    container.appendChild(iconsContainer);
    li.appendChild(container);

    last_li.parentNode.insertBefore(li, last_li);
    expandTodoBtn.addEventListener("click", (e) => {
      if (!expandTodo) {
        expandTodoBtn.classList.remove("expand-todo");
        expandTodoBtn.classList.add("less-btn");
        li.appendChild(createTodoDetail(todo));
        li.classList.add("detailed-view-open");
      } else {
        removeTodoDetails(li);
        expandTodoBtn.classList.remove("less-btn");
        expandTodoBtn.classList.add("expand-todo");
        li.classList.remove("detailed-view-open");
      }
      expandTodo = !expandTodo;
    });

    removeBtn.addEventListener("click", () => {
      removeTODO(index, selectedProject.index, user);
      renderTODOs(selectedProject.index);
    });

    editBtn.addEventListener("click", () => {
      renderEditForm(index);
    });
  }

  function addEventListeners() {
    const addTODO = document.querySelector("#add-todo");
    if (!addTODO.onclick) {
      addTODO.onclick = () => {
        renderForm();
      };
    }
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
    const todoContainer = document.querySelector("#content>ul");
    const todos = todoContainer.querySelectorAll(".todo-item");
    if (todos != null) {
      todos.forEach((todo) => {
        todoContainer.removeChild(todo);
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
