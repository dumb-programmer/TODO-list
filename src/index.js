import './style.css';
import TODO from './TODO.js';
import Project from './Project.js';
import DOM from './DOM.js';

let projectsList = [];

if (JSON.parse(localStorage.getItem('projectsList')) == null) {

    projectsList.push(new Project("Default"));

    projectsList[0].addTODO(new TODO('TEST1', 'lorem epsum', '10/9/2021'));
    projectsList[0].addTODO(new TODO('TEST2', 'lorem e1312', '14/9/2021'));
    projectsList[0].addTODO(new TODO('TEST3', 'lorem 76576', '16/9/2021'));

    localStorage.setItem('projectsList', JSON.stringify(projectsList));

}

else {
    projectsList = getProjectsList();
}

function getProjectsList() {
    // Adds the methods back to projects
    let temp = []
    let projectsList = JSON.parse(localStorage.getItem('projectsList'))
    for (let i = 0; i < projectsList.length; ++i) {
        if (projectsList[i] != null) {
            Object.setPrototypeOf(projectsList[i], Project.prototype);
            for (let j = 0; j < projectsList[i].TODOs.length; ++j) {
                Object.setPrototypeOf(projectsList[i].TODOs[j], TODO.prototype);
            }
            temp.push(projectsList[i])
        }
    }
    return temp;
}

function updateLocalStorage() {
    localStorage.setItem('projectsList', JSON.stringify(projectsList));
}

function addProject(project) {
    projectsList.push(project);
    updateLocalStorage();
}

function removeProject(index) {
    projectsList[index] = null
    updateLocalStorage();
}

function addTODO(index, TODO) {
    projectsList[index].addTODO(TODO);
    updateLocalStorage();
}

function removeTODO(TODOindex, projectIndex) {
    if (projectIndex == null) {
        projectIndex = 0;
    }
    projectsList[projectIndex].removeTODO(TODOindex);
    console.log(projectsList[projectIndex].getTODOs());
    updateLocalStorage();
}

let dom = DOM();

dom.render();

export { projectsList, addProject, getProjectsList, removeProject, addTODO, removeTODO };