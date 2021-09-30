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

// let projectsList = [project1];

let dom = DOM();

// dom.renderProjects(projectsList);

dom.render();