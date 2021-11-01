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

else{
    projectsList = getProjectsList();
}

function getProjectsList() {
    // Adds the methods back to projects
    let temp = []
    let projectsList = JSON.parse(localStorage.getItem('projectsList'))
    for (let i = 0; i < projectsList.length; ++i) {
        if(projectsList[i] != null){
            Object.setPrototypeOf(projectsList[i], Project.prototype);
            for (let j = 0; j < projectsList[i].TODOs.length; ++j) {
                Object.setPrototypeOf(projectsList[i].TODOs[j], TODO.prototype);
            }
            temp.push(projectsList[i])
        }
    }
    return temp;
}

function updateProjectsList() {
    projectsList = getProjectsList();
}

function addProject(project) {
    projectsList.push(project);
    localStorage.setItem('projectsList', JSON.stringify(projectsList));
}

function removeProject(index){
    projectsList[index] = null
    localStorage.setItem('projectsList', JSON.stringify(projectsList));
    updateProjectsList();
}

function addTODO(index, TODO){
    projectsList[index].addTODO(TODO);
    localStorage.setItem('projectsList', JSON.stringify(projectsList));
}

let dom = DOM();

dom.render();

export { projectsList, addProject, getProjectsList, removeProject, addTODO };