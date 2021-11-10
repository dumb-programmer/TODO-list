import { ProjectDOM } from './ProjectDOM.js';
import TODO_DOM from './TODO_DOM.js';

function DOM() {

    function render() {
        let projectDOM = ProjectDOM();
        let todoDOM = TODO_DOM();
        projectDOM.render();
        todoDOM.render();
    }

    return { render }
}

export default DOM;