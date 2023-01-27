function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map(child =>
        typeof child === "object"
          ? child
          : createTextElement(child)
      ),
      children,
    },
  }
}
​
function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  }
}
​

function render(element, container) {
  const dom = element.type === "TEXT_ELEMENT" ? createTextNode("") : document.createElement(element.type)
​
  const isProperty = key => key !== "children"
  Object.keys(element.props).filter(isProperty).forEach(name=>{
    dom[name] = element.props[name]
  })

  element.props.children.forEach(child => render(child, dom))

  container.appendChild(dom)
  // TODO create dom nodes
}




​
// Didact = React + Didact
const Didact = {
  createElement,
  render
}
​
// If we have a comment like this one, when babel transpiles the JSX it will use the function we define.
/** @jsx Didact.createElement */
const element = (
  <div id="foo">
    <a>bar</a>
    <b />
  </div>
)


const container = document.getElementById("root")
ReactDOM.render(element, container)