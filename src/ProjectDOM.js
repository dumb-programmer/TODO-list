import {
  projectsList,
  addProject,
  getProjectsList,
  removeProject,
  replaceProject,
} from "./index.js";
import Project from "./Project.js";
import TODO_DOM from "./TODO_DOM.js";
import upChevronIcon from "./chevron-up.svg";
import downChevronIcon from "./chevron-down.svg";

let selectedProject = document.querySelector("#default");

function ProjectDOM() {
  const ulProjects = document.querySelector("#projects");
  const todo_dom = TODO_DOM();

  function addEventListenersToProject(li) {
    li.addEventListener("click", () => {
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
    const li = document.createElement("li");
    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("remove-btn-index", index);
    deleteBtn.classList.add("project-delete-btn");
    deleteBtn.classList.add("icon");
    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.classList.add("icon");

    const iconsContainer = document.createElement("div");
    iconsContainer.classList.add("icons-container");
    iconsContainer.style.width = "3rem";

    iconsContainer.appendChild(editBtn);
    iconsContainer.appendChild(deleteBtn);

    editBtn.addEventListener("click", (event) => {
      const current_li = event.target.parentNode.parentNode;
      current_li.innerHTML = "";

      const input = document.createElement("input");
      input["value"] = project.getName();

      const addBtn = document.createElement("button");
      addBtn.setAttribute("id", "add-project-btn");
      addBtn.classList.add(".ok-btn");
      addBtn.textContent = "Add";

      addBtn.addEventListener("click", () => {
        const name = input.value;
        const new_project = new Project(name);

        replaceProject(index, new_project);

        current_li.innerHTML = "";
        current_li.textContent = new_project.getName();
        current_li.append(iconsContainer);
        projectsList = getProjectsList();
        project = projectsList[index];
      });

      const cancelBtn = document.createElement("button");
      cancelBtn.setAttribute("id", "cancel-project-btn");
      cancelBtn.textContent = "Cancel";

      cancelBtn.addEventListener("click", () => {
        current_li.textContent = project.getName();
        current_li.append(editBtn);
        current_li.append(deleteBtn);
      });

      current_li.setAttribute("id", "project-input");
      current_li.append(input);
      current_li.append(addBtn);
      current_li.append(cancelBtn);
    });

    deleteBtn.addEventListener("click", (event) => {
      const projectsListDiv = document.querySelector("#projects");
      const li = event.target.parentNode.parentNode;
      projectsListDiv.removeChild(li);
      removeProject(index);
    });

    let project = projectsList[index];

    const p = document.createElement("p");
    p.style.marginRight = "0.9rem";
    p.textContent = project.getName();

    li.setAttribute("data-index", index);
    li.append(p);
    li.append(iconsContainer);
    li.style.display = "flex";

    ulProjects.append(li);
    addEventListenersToProject(li);
  }

  function addEventListeners() {
    const projectAddBtn = document.querySelector("#new-project");
    const projectMoreBtn = document.querySelector("#more");
    const defaultProject = document.querySelector("#default");

    projectAddBtn.addEventListener("click", () => {
      const li = document.createElement("li");
      const input = document.createElement("input");
      input.style.marginBottom = "0.5rem";

      const addBtn = document.createElement("button");
      addBtn.setAttribute("id", "add-project-btn");
      addBtn.classList.add("ok-btn");
      addBtn.textContent = "Add";

      addBtn.addEventListener("click", () => {
        const name = input.value;
        const project = new Project(name);
        addProject(project);

        const inputLi = document.querySelector("#project-input");
        ulProjects.removeChild(inputLi);
        appendProject(projectsList, projectsList.length - 1);
      });

      const cancelBtn = document.createElement("button");
      cancelBtn.setAttribute("id", "cancel-project-btn");
      cancelBtn.classList.add("cancel-btn");
      cancelBtn.textContent = "Cancel";

      cancelBtn.addEventListener("click", () => {
        const li = document.querySelector("#project-input");
        ulProjects.removeChild(li);
      });

      li.setAttribute("id", "project-input");
      li.append(input);
      li.append(addBtn);
      li.append(cancelBtn);
      ulProjects.append(li);
    });

    projectMoreBtn.addEventListener("click", () => {
      const lis = document.querySelectorAll("#projects>li");
      const btn = document.querySelector("#more");
      if (lis.length > 0) {
        btn.style.background = `url(${upChevronIcon})`;
        clearProjectsList();
      } else {
        btn.style.background = `url(${downChevronIcon})`;
        renderProjects(projectsList);
      }
    });

    defaultProject.addEventListener("click", (event) => {
      selectedProject.style.backgroundColor = "#282828";
      defaultProject.style.backgroundColor = "#363636";
      selectedProject = event.target;
      todo_dom.renderTODOs(selectedProject);
    });
  }

  function clearProjectsList() {
    const li = document.querySelectorAll("#projects>li");
    li.forEach((li) => {
      ulProjects.removeChild(li);
    });
  }

  function render() {
    renderProjects(getProjectsList());
    addEventListeners();
  }

  return { render };
}

export { ProjectDOM, selectedProject };
