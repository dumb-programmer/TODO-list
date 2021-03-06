import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import loaderDom from "./loaderDOM.js";
import genericIcon from "../images/SeekPng.com_default-avatar-png_5147412.png";
import {
  collection,
  getDocs,
  getFirestore,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import AuthenticationDOM from "./AuthDOM";
import ProjectDOM from "./ProjectDOM";
import { setupLocalStorage, setupFireStore } from "./index.js";

function DOM() {
  function clearScreen() {
    const main = document.querySelector("main");
    const header = document.querySelector("header");
    const container = document.querySelector("#user-controls");
    if (container != null) {
      header.removeChild(container);
    }
    main.innerHTML = "";
  }

  function initFirebaseAuth() {
    onAuthStateChanged(getAuth(), authStateObserver);
  }

  async function signOutUser() {
    signOut(getAuth());
    clearScreen();
    const AuthDOM = AuthenticationDOM();
    AuthDOM.render();
    localStorage.clear();
  }

  async function getProjects(q) {
    let list = [];
    await getDocs(q)
      .then((snapshot) => {
        snapshot.docs.forEach((item) => {
          list.push({ id: item.id, ...item.data() });
        });
      })
      .catch((error) => {
        console.log(error);
      });
    return list;
  }

  async function firestoreObserver(colRef, user) {
    onSnapshot(colRef, async (snapshot) => {
      if (!snapshot.metadata.hasPendingWrites) {
        const q = query(colRef, orderBy("createdAt"));
        const list = await getProjects(q);
        setupLocalStorage(list);
        const projectDOM = ProjectDOM(user);
        projectDOM.render();
      }
    });
  }

  function setupHeader() {
    const header = document.querySelector("header");
    const container = document.createElement("div");
    container.setAttribute("id", "user-controls");
    const p = document.createElement("p");
    p.textContent = getAuth().currentUser.displayName;
    const img = document.createElement("img");
    img.alt = "profile picture";
    img.src = getAuth().currentUser.photoURL || genericIcon;

    const btn = document.createElement("button");
    btn.setAttribute("aria-label", "sign out button");
    btn.textContent = "Sign out";
    btn.addEventListener("click", signOutUser);

    container.appendChild(img);
    if (getAuth().currentUser.displayName) {
      container.appendChild(p);
    }
    container.appendChild(btn);

    header.appendChild(container);
  }

  async function authStateObserver(user) {
    clearScreen();
    if (user) {
      const db = getFirestore();
      const colRef = collection(db, user.uid);
      const q = query(colRef, orderBy("createdAt"));

      if (localStorage.getItem("projectsList") == null) {
        let list = await getProjects(q);
        if (list.length == 0) {
          setupFireStore(colRef);
          list = getProjects(q);
        }
        setupLocalStorage(list);
      }
      setup();
      firestoreObserver(colRef, user);
    } else {
      const authDOM = AuthenticationDOM();
      authDOM.render();
    }
  }

  function setupLayout() {
    const main = document.querySelector("main");
    main.style.display = "flex";
    main.style.justifyContent = null;
    main.style.alignItems = null;
  }

  function setup() {
    clearScreen();
    setupHeader();
    setupLayout();

    const main = document.querySelector("main");

    const aside = document.createElement("aside");

    const projects = document.createElement("ul");
    projects.setAttribute("id", "projects");

    let defaultProject = document.createElement("div");
    defaultProject.setAttribute("id", "default");
    defaultProject.textContent = "Default";

    aside.appendChild(defaultProject);

    const projectAddBtn = document.createElement("button");
    projectAddBtn.setAttribute("id", "new-project");
    projectAddBtn.classList.add("icon");
    projectAddBtn.setAttribute("aria-label", "add project");
    const projectMoreBtn = document.createElement("button");
    projectMoreBtn.setAttribute("aria-label", "expand projects");
    projectMoreBtn.setAttribute("id", "more");
    projectMoreBtn.classList.add("icon");

    const projectControls = document.createElement("div");
    projectControls.setAttribute("id", "project-controls");

    const p = document.createElement("p");
    p.textContent = "Projects";

    projectControls.appendChild(projectMoreBtn);
    projectControls.appendChild(p);
    projectControls.appendChild(projectAddBtn);

    projects.appendChild(projectControls);

    aside.appendChild(projects);
    main.appendChild(aside);

    const content = document.createElement("div");
    content.setAttribute("id", "content");

    const todoContainer = document.createElement("ul");

    const addTodo = document.createElement("li");
    addTodo.setAttribute("id", "new-todo");
    const addTodoBtn = document.createElement("button");
    addTodoBtn.setAttribute("id", "add-todo");
    addTodoBtn.classList.add("icon");
    addTodoBtn.setAttribute("aria-label", "add todo");
    addTodo.appendChild(addTodoBtn);

    todoContainer.appendChild(addTodo);
    content.appendChild(todoContainer);
    main.appendChild(content);
  }

  function render() {
    const loader = loaderDom();
    loader.render();
    initFirebaseAuth();
  }

  return { render };
}

export default DOM;
