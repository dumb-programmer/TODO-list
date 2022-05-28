import loaderAnimation from "../images/Rolling-1s-200px.svg";

function loaderDom() {
  function setupMainLayout() {
    const main = document.querySelector("main");
    main.style.display = "flex";
    main.style.justifyContent = "center";
    main.style.alignItems = "center";
  }
  function render() {
    setupMainLayout();
    const main = document.querySelector("main");
    const loader = document.createElement("div");

    const img = document.createElement("img");
    img.src = loaderAnimation;
    img.style.height = "50px";
    img.style.width = "50px";
    loader.appendChild(img);
    main.appendChild(loader);
  }
  return { render };
}

export default loaderDom;
