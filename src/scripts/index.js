import "../style.css";
import TODO from "./TODO.js";
import Project from "./Project.js";
import DOM from "./DOM.js";
import {
  getFirestore,
  collection,
  addDoc,
  updateDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";

let projectsList = [];

const firebaseConfig = {
  apiKey: "AIzaSyB5KDeER-3LcSMtdt5PvXsFKVP0hp5yGAo",
  authDomain: "todo-app-e52fb.firebaseapp.com",
  projectId: "todo-app-e52fb",
  storageBucket: "todo-app-e52fb.appspot.com",
  messagingSenderId: "852196044978",
  appId: "1:852196044978:web:1e978741870f44671f19ab",
  measurementId: "G-RE1D95706F",
};

const app = initializeApp(firebaseConfig);

function setupLocalStorage(projectsList) {
  console.log(projectsList);
  localStorage.setItem("projectsList", JSON.stringify(projectsList));
}

function getProjectsList() {
  // Adds the methods back to projects
  let temp = [];
  let projectsList = JSON.parse(localStorage.getItem("projectsList"));
  for (let i = 0; i < projectsList.length; ++i) {
    if (projectsList[i] != null) {
      Object.setPrototypeOf(projectsList[i], Project.prototype);
      for (let j = 0; j < projectsList[i].todos.length; ++j) {
        Object.setPrototypeOf(projectsList[i].todos[j], TODO.prototype);
      }
      temp.push(projectsList[i]);
    }
  }
  return temp;
}

function updateLocalStorage(projectsList) {
  localStorage.setItem("projectsList", JSON.stringify(projectsList));
}

async function addProject(project, user) {
  const projectsList = getProjectsList();
  projectsList.push(project);
  updateLocalStorage(projectsList);
  console.log("addProject() called", new Date().toLocaleTimeString());
  const db = getFirestore();
  const projCol = collection(db, user.uid);
  await addDoc(projCol, {
    name: project.getName(),
    createdAt: serverTimestamp(),
    todos: [],
  });
}

function removeProject(index) {
  const projectsList = getProjectsList();
  projectsList.splice(index, 1);
  updateLocalStorage(projectsList);
}

function replaceProject(projectIndex, project) {
  const projectsList = getProjectsList();
  projectsList[projectIndex] = project;
  updateLocalStorage(projectsList);
}

async function addTODO(index, TODO, user) {
  console.log("addTODO() called", new Date().toLocaleTimeString());
  const projectsList = getProjectsList();
  projectsList[index].addTODO(TODO);
  updateLocalStorage(projectsList);

  const db = getFirestore();
  const projectRef = doc(db, user.uid, projectsList[index].id);
  await updateDoc(projectRef, {
    todos: projectsList[index].getTODOs().map((todo) => {
      console.log({
        title: todo.getTitle(),
        description: todo.getDescription(),
        dueDate: todo.getDueDate(),
        priority: todo.getPriority(),
      });
      return {
        title: todo.getTitle(),
        description: todo.getDescription(),
        dueDate: todo.getDueDate(),
        priority: todo.getPriority(),
      };
    }),
  });
}

function replaceTODO(projectIndex, TODOIndex, TODO) {
  const projectsList = getProjectsList();
  projectsList[projectIndex].replaceTODO(TODOIndex, TODO);
  updateLocalStorage(projectsList);
}

function removeTODO(TODOindex, projectIndex) {
  const projectsList = getProjectsList();
  projectsList[projectIndex].removeTODO(TODOindex);
  updateLocalStorage(projectsList);
}

let dom = DOM();
dom.render();


export {
  projectsList,
  addProject,
  getProjectsList,
  removeProject,
  replaceProject,
  addTODO,
  removeTODO,
  replaceTODO,
  setupLocalStorage,
};
