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
  deleteDoc,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";

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

initializeApp(firebaseConfig);

function setupLocalStorage(projectsList) {
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
  const db = getFirestore();
  const colRef = collection(db, user.uid);
  await addDoc(colRef, {
    name: project.getName(),
    createdAt: serverTimestamp(),
    todos: [],
  });
}

async function removeProject(index, user) {
  const projectsList = getProjectsList();
  const id = projectsList[index].id;
  projectsList.splice(index, 1);

  updateLocalStorage(projectsList);

  const db = getFirestore();
  const docRef = doc(db, user.uid, id);
  await deleteDoc(docRef);
}

async function replaceProject(projectIndex, project, user) {
  const projectsList = getProjectsList();
  const id = projectsList[projectIndex].id;
  project.id = id;
  projectsList[projectIndex].setName(project.getName());
  updateLocalStorage(projectsList);

  const newName = project.getName();
  const db = getFirestore();
  const projRef = doc(db, user.uid, id);
  await updateDoc(projRef, { name: newName });
}

async function addTODO(index, TODO, user) {
  const projectsList = getProjectsList();
  projectsList[index].addTODO(TODO);
  updateLocalStorage(projectsList);

  const db = getFirestore();
  const projectRef = doc(db, user.uid, projectsList[index].id);
  await updateDoc(projectRef, {
    todos: projectsList[index].getTODOs().map((todo) => {
      return {
        title: todo.getTitle(),
        description: todo.getDescription(),
        dueDate: todo.getDueDate(),
        priority: todo.getPriority(),
      };
    }),
  });
}

async function replaceTODO(projectIndex, TODOIndex, TODO, user) {
  const projectsList = getProjectsList();
  projectsList[projectIndex].replaceTODO(TODOIndex, TODO);
  updateLocalStorage(projectsList);

  const db = getFirestore();
  const projectRef = doc(db, user.uid, projectsList[projectIndex].id);
  await updateDoc(projectRef, {
    todos: projectsList[projectIndex].getTODOs().map((todo) => {
      return {
        title: todo.getTitle(),
        description: todo.getDescription(),
        dueDate: todo.getDueDate(),
        priority: todo.getPriority(),
      };
    }),
  });
}

async function removeTODO(TODOindex, projectIndex, user) {
  const projectsList = getProjectsList();
  const project = projectsList[projectIndex];
  project.removeTODO(TODOindex);
  updateLocalStorage(projectsList);

  const db = getFirestore();
  const projRef = doc(db, user.uid, project.id);
  await updateDoc(projRef, {
    todos: project.getTODOs().map((todo) => {
      return {
        title: todo.getTitle(),
        description: todo.getDescription(),
        dueDate: todo.getDueDate(),
        priority: todo.getPriority(),
      };
    }),
  });
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
