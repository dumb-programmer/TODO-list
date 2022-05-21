import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInAnonymously,
  signInWithPopup,
} from "firebase/auth";

// import * as firebaseui from "firebaseui";
// import "firebaseui/dist/firebaseui.css";

import googleIcon from "../images/google-icon.svg";
import maskIcon from "../images/mask-solid.svg";
import githubIcon from "../images/github-icon.svg";

function AuthenticationDOM() {
  // const ui = new firebaseui.auth.AuthUI(getAuth());
  // console.log(ui);
  // const uiConfig = {
  //   signInOptions: [
  //     GoogleAuthProvider.PROVIDER_ID,
  //     GithubAuthProvider.PROVIDER_ID,
  //   ],
  //   signInFlow: "popup",
  // };

  async function signInWithGoogle(e) {
    e.preventDefault();
    let provider = new GoogleAuthProvider();
    await signInWithPopup(getAuth(), provider);
  }

  async function anonymousSignIn(e) {
    e.preventDefault();
    const auth = getAuth();
    // let provider = new Provider
    signInAnonymously(auth);
  }

  async function signInWithGithub(e) {
    e.preventDefault();
    let provider = new GithubAuthProvider();
    await signInWithPopup(getAuth(), provider);
  }

  const renderForm = () => {
    const form = document.createElement("form");
    form.setAttribute("id", "sign-in-form");

    const googleBtn = document.createElement("button");
    googleBtn.classList.add("sign-in-btn");
    googleBtn.addEventListener("click", signInWithGoogle);

    const googleBtnText = document.createElement("span");
    googleBtnText.textContent = "Sign in With Google";
    const googleBtnIcon = document.createElement("img");
    googleBtnIcon.classList.add("sign-in-btn-icon");
    googleBtnIcon.src = googleIcon;

    googleBtn.appendChild(googleBtnIcon);
    googleBtn.appendChild(googleBtnText);

    const githubBtn = document.createElement("button");
    githubBtn.classList.add("sign-in-btn");
    githubBtn.addEventListener("click", signInWithGithub);

    const githubBtnText = document.createElement("span");
    githubBtnText.textContent = "Sign in with Github";
    const githubBtnIcon = document.createElement("img");
    githubBtnIcon.classList.add("sign-in-btn-icon");
    githubBtnIcon.src = githubIcon;

    githubBtn.appendChild(githubBtnIcon);
    githubBtn.appendChild(githubBtnText);

    const anonymousBtn = document.createElement("button");
    anonymousBtn.classList.add("sign-in-btn");
    anonymousBtn.addEventListener("click", anonymousSignIn);

    const anonymousBtnText = document.createElement("span");
    anonymousBtnText.textContent = "Sign in Anonymously";
    const anonymousBtnIcon = document.createElement("img");
    anonymousBtnIcon.classList.add("sign-in-btn-icon");
    anonymousBtnIcon.src = maskIcon;

    anonymousBtn.appendChild(anonymousBtnIcon);
    anonymousBtn.appendChild(anonymousBtnText);

    form.appendChild(googleBtn);
    form.appendChild(githubBtn);
    form.appendChild(anonymousBtn);

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
    // console.log(ui);
    renderForm();
    // ui.start("#firebaseui-auth-container", uiConfig);

    console.log("render called");
  }

  return { render };
}

export default AuthenticationDOM;
