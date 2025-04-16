
function customRender(reactElement,mainContainer){
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  domElement.setAttribute('href',reactElement.props.href);
  domElement.setAttribute('target',reactElement.props.target);
  mainContainer.appendChild(domElement);
}

const reactElement = {
  type: 'a',
  props:{
    href: "https://google.com",
    target: "_blank"
  },
  children: 'Click Me!!'
}

const mainContainer = document.querySelector('#root');

customRender(reactElement,mainContainer);

//Continuing https://youtu.be/FxgM9k1rg0Q?t=6975