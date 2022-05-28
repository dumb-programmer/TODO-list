import {
  addProject,
  getProjectsList,
  removeProject,
  replaceProject,
} from "./index.js";
import Project from "./Project.js";
import TODO_DOM from "./TODO_DOM.js";
import upChevronIcon from "../images/chevron-up.svg";
import downChevronIcon from "../images/chevron-down.svg";

function ProjectDOM(user) {
  function setSelectedProject(index) {
    selectedProject.index = index;
    reRender();
  }

  let selectedProject = { index: 0, setSelectedProject };

  const todo_dom = TODO_DOM(selectedProject, user);

  function renderProjects(projectsList) {
    for (let i = 1; i < projectsList.length; i++) {
      if (projectsList[i] != null) {
        appendProject(projectsList, i);
      }
    }
  }

  function renderEditProjectForm(index, project, target, target_icons) {
    target.innerHTML = "";

    const input = document.createElement("input");
    input.type = "text";
    input.maxLength = "30";
    input.style.marginRight = "0.5rem";
    input["value"] = project.getName();

    input.addEventListener("click", (e) => {
      e.stopPropagation();
    });

    const addBtn = document.createElement("button");
    addBtn.setAttribute("id", "add-project-btn");
    addBtn.classList.add(".ok-btn");
    addBtn.textContent = "Add";

    addBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const name = input.value;
      const new_project = new Project(name);

      replaceProject(index, new_project, user);

      target.innerHTML = "";
      const projectName = document.createElement("p");
      projectName.textContent = new_project.getName();
      projectName.classList.add("project-name");
      target.appendChild(projectName);
      target.append(target_icons);
      reRenderProjects();
    });

    const cancelBtn = document.createElement("button");
    cancelBtn.classList.add("cancel-btn");
    cancelBtn.textContent = "Cancel";

    cancelBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      target.innerHTML = "";
      const projectName = document.createElement("p");
      projectName.textContent = project.getName();
      projectName.classList.add("project-name");
      target.appendChild(projectName);
      target.appendChild(target_icons);
    });

    target.setAttribute("id", "project-input");
    target.append(input);
    target.append(addBtn);
    target.append(cancelBtn);
  }

  function appendProject(projectsList, index) {
    const li = document.createElement("li");
    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("remove-btn-index", index);
    deleteBtn.setAttribute("aria-label", "delete project");
    deleteBtn.classList.add("project-delete-btn");
    deleteBtn.classList.add("icon");
    const editBtn = document.createElement("button");
    editBtn.setAttribute("aria-label", "edit project");
    editBtn.classList.add("edit-btn");
    editBtn.classList.add("icon");

    const iconsContainer = document.createElement("div");
    iconsContainer.classList.add("icons-container");
    iconsContainer.style.width = "3rem";

    iconsContainer.appendChild(editBtn);
    iconsContainer.appendChild(deleteBtn);

    editBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      const projectsList = getProjectsList();
      renderEditProjectForm(
        index,
        projectsList[index],
        event.target.parentNode.parentNode,
        iconsContainer
      );
    });

    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const projectsListDiv = document.querySelector("#projects");
      const li = e.target.parentNode.parentNode;
      projectsListDiv.removeChild(li);
      removeProject(index, user);
    });

    const project = projectsList[index];

    const p = document.createElement("p");
    p.style.marginRight = "0.9rem";
    p.textContent = project.getName();

    li.append(p);
    li.append(iconsContainer);
    li.style.display = "flex";

    const ulProjects = document.getElementById("projects");

    li.addEventListener("click", () => {
      selectedProject.setSelectedProject(index);
      reRender();
    });

    ulProjects.append(li);
  }

  function addEventListeners() {
    const newProjectBtn = document.querySelector("#new-project");
    const projectMoreBtn = document.querySelector("#more");
    const defaultProject = document.querySelector("#default");
    const ulProjects = document.getElementById("projects");

    newProjectBtn.addEventListener("click", () => {
      const li = document.createElement("li");
      const input = document.createElement("input");
      input.maxLength = "30";
      input.style.marginBottom = "0.5rem";

      const addBtn = document.createElement("button");
      addBtn.setAttribute("id", "add-project-btn");
      addBtn.classList.add("ok-btn");
      addBtn.textContent = "Add";

      addBtn.addEventListener("click", () => {
        const name = input.value;
        const project = new Project(name);
        addProject(project, user);

        const inputLi = document.querySelector("#project-input");
        ulProjects.removeChild(inputLi);

        const projectsList = getProjectsList();
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
      const projectsList = getProjectsList();
      if (lis.length > 0) {
        btn.style.background = `url(${upChevronIcon})`;
        clearProjectsList();
      } else {
        btn.style.background = `url(${downChevronIcon})`;
        renderProjects(projectsList);
      }
    });

    defaultProject.addEventListener("click", () => {
      selectedProject.setSelectedProject(0);
      reRender();
    });
  }

  function clearProjectsList() {
    const li = document.querySelectorAll("#projects>li");
    const projects = document.getElementById("projects");
    li.forEach((li) => {
      projects.removeChild(li);
    });
  }

  function highlightProject() {
    const defaultProject = document.getElementById("default");
    if (selectedProject.index === 0) {
      defaultProject.classList.add("highlighted");
    } else {
      const currentHighlightedProject = document.querySelector(".highlighted");
      if (currentHighlightedProject != null) {
        currentHighlightedProject.classList.remove("highlighted");
      }
      const projects = document.querySelectorAll("#projects>li");
      projects[selectedProject.index - 1].classList.add("highlighted");
    }
  }

  function render() {
    clearProjectsList();
    renderProjects(getProjectsList());
    addEventListeners();
    highlightProject();
    todo_dom.render();
  }

  function reRender() {
    clearProjectsList();
    renderProjects(getProjectsList());
    highlightProject();
    todo_dom.reRender(selectedProject);
  }

  function reRenderProjects() {
    clearProjectsList();
    renderProjects(getProjectsList());
  }

  return { render };
}

export default ProjectDOM;
