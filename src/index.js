import './style.css';
import TODO from './TODO.js';
import Project from './Project.js';
import DOM from './DOM.js';

// let todo1 = TODO('Test1', 'lorem epsum', '21/09/2021');
// let todo2 = TODO('Test2', 'lorem epsum', '21/10/2021');
// let todo3 = TODO('Test3', 'lorem epsum', '21/11/2021');

// let project1 = Project('Test Project');
// project1.addTODO(todo1);
// project1.addTODO(todo2);
// project1.addTODO(todo3);

let projectsList = [Project("Default")];

// let myStorage = localStorage;
// myStorage.setItem('projectsList', JSON.stringify([new Project('Default')]));

// let projectsList = JSON.parse(myStorage.getItem('projectsList'));
// console.log(projectsList[0]);

projectsList[0].addTODO(TODO('TEST1', 'lorem epsum', '10/9/2021'))
projectsList[0].addTODO(TODO('TEST2', 'lorem e1312', '14/9/2021'))
projectsList[0].addTODO(TODO('TEST3', 'lorem 76576', '16/9/2021'))

let dom = DOM();

// dom.renderProjects(projectsList);

dom.render();

export { projectsList };