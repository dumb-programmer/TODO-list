import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInAnonymously,
  signInWithPopup,
} from "firebase/auth";
import loaderDom from "./loaderDOM";

import googleIcon from "../images/google-icon.svg";
import maskIcon from "../images/mask-solid.svg";
import githubIcon from "../images/github-icon.svg";

function AuthenticationDOM() {
  function renderLoader() {
    const loader = loaderDom();
    loader.render();
  }

  async function signInWithGoogle(e) {
    e.preventDefault();
    let provider = new GoogleAuthProvider();
    await signInWithPopup(getAuth(), provider);
    renderLoader();
  }

  async function signInWithAnonymous(e) {
    e.preventDefault();
    const auth = getAuth();
    await signInAnonymously(auth);
    renderLoader();
  }

  async function signInWithGithub(e) {
    e.preventDefault();
    let provider = new GithubAuthProvider();
    await signInWithPopup(getAuth(), provider);
    renderLoader();
  }

  const renderForm = () => {
    const form = document.createElement("form");
    form.setAttribute("id", "sign-in-form");

    const buttons = [
      {
        caption: "Sign in with Google",
        icon: googleIcon,
        callback: signInWithGoogle,
      },
      {
        caption: "Sign in with Github",
        icon: githubIcon,
        callback: signInWithGithub,
      },
      {
        caption: "Sign in Anonymously",
        icon: maskIcon,
        callback: signInWithAnonymous,
      },
    ];

    buttons.forEach((button) => {
      const btn = document.createElement("button");
      btn.classList.add("sign-in-btn");

      const btnText = document.createElement("span");
      btnText.textContent = button.caption;
      const btnIcon = document.createElement("img");
      btnIcon.classList.add("sign-in-btn-icon");
      btnIcon.src = button.icon;

      btn.appendChild(btnIcon);
      btn.appendChild(btnText);

      btn.addEventListener("click", button.callback);

      form.appendChild(btn);
    });

    const main = document.querySelector("main");
    main.style.display = "flex";
    main.style.justifyContent = "center";
    main.style.alignItems = "center";
    main.appendChild(form);
    const firebaseUIcontainer = document.createElement("div");
    firebaseUIcontainer.setAttribute("id", "firebaseui-auth-container");
    firebaseUIcontainer.setAttribute("lang", "ur");
    main.appendChild(firebaseUIcontainer);
  };

  function render() {
    renderForm();
  }

  return { render };
}

export default AuthenticationDOM;
