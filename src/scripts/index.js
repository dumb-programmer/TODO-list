import "../style.css";
import TODO from "./TODO.js";
import Project from "./Project.js";
import DOM from "./DOM.js";

let projectsList = [];

if (JSON.parse(localStorage.getItem("projectsList")) == null) {
  projectsList.push(new Project("Default"));

  projectsList[0].addTODO(new TODO("TEST1", "lorem epsum", "10/9/2021"));
  projectsList[0].addTODO(new TODO("TEST2", "lorem e1312", "14/9/2021"));
  projectsList[0].addTODO(new TODO("TEST3", "lorem 76576", "16/9/2021"));

  localStorage.setItem("projectsList", JSON.stringify(projectsList));
} else {
  projectsList = getProjectsList();
}

function getProjectsList() {
  // Adds the methods back to projects
  let temp = [];
  let projectsList = JSON.parse(localStorage.getItem("projectsList"));
  // let projectsList = await getDocs(collection(db, "proj"));
  for (let i = 0; i < projectsList.length; ++i) {
    if (projectsList[i] != null) {
      Object.setPrototypeOf(projectsList[i], Project.prototype);
      for (let j = 0; j < projectsList[i].TODOs.length; ++j) {
        Object.setPrototypeOf(projectsList[i].TODOs[j], TODO.prototype);
      }
      temp.push(projectsList[i]);
    }
  }
  return temp;
}

function updateLocalStorage() {
  localStorage.setItem("projectsList", JSON.stringify(projectsList));
}

function addProject(project) {
  projectsList.push(project);
  updateLocalStorage();
}

function removeProject(index) {
  projectsList.splice(index, 1);
  updateLocalStorage();
}

function replaceProject(projectIndex, project) {
  projectsList[projectIndex] = project;
  updateLocalStorage();
}

function addTODO(index, TODO) {
  projectsList[index].addTODO(TODO);
  updateLocalStorage();
}

function replaceTODO(projectIndex, TODOIndex, TODO) {
  projectsList[projectIndex].replaceTODO(TODOIndex, TODO);
  updateLocalStorage();
}

function removeTODO(TODOindex, projectIndex) {
  projectsList[projectIndex].removeTODO(TODOindex);
  updateLocalStorage();
}

// --------------------------- Firebase ------------------------------------------------ //
import { initializeApp } from "firebase/app";
// import { getFirestore } from "@firebase/firestore";
// import { collection, addDoc } from "firebase/firestore";
// import { getDocs } from "firebase/firestore";
// import { getUA } from "@firebase/util";
// import { getAuth } from "firebase/auth";

// (async () => {
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
  // const auth = getAuth(app);
  // try {
  //   const docRef = await addDoc(collection(db, "proj"), {
  //     Name: "Test",
  //     todos: {
  //       title: "Test3",
  //       description: "This is a test3 todo",
  //       dueDate: "21/05/2022",
  //       priority: "medium",
  //     },
  //   });
  //   console.log("Document written with ID: ", docRef.id);
  // } catch (e) {
  //   console.error("Error adding document: ", e);
  // }

  // const projects = await getDocs(collection(db, "proj"));
  // projects.snap

  // async function addData() {
  //   try {
  //     const docRef = await addDoc(collection(db, "proj"), {
  //       Name: "Test",
  //       todos: {
  //         title: "Test3",
  //         description: "This is a test3 todo",
  //         dueDate: "21/05/2022",
  //         priority: "medium",
  //       },
  //     });
  //     console.log("Document written with ID: ", docRef.id);
  //   } catch (e) {
  //     console.error("Error adding document: ", e);
  //   }
  // }

  // setTimeout(addData, 100);

  // const querySnapshot = await getDocs(collection(db, "proj"));
  // console.log(querySnapshot);
  // ------------------------------------------------------------------------------------- //

  let dom = DOM();
  dom.render();
// })();

export {
  projectsList,
  addProject,
  getProjectsList,
  removeProject,
  replaceProject,
  addTODO,
  removeTODO,
  replaceTODO,
};
