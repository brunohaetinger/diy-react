# DIY React

Build "React" from scratch to understand how it works.

guide:
https://pomb.us/build-your-own-react/


# Step Zero

```jsx
const element = <h1 title="foo">Hello</h1>
const container = document.getElementById("root")
ReactDOM.render(element, container)
``` 

JSX -> React.createElement(...) -> JS Object

```js
const element = {
  type: "h1",
  props: {
    title: "foo",
    children: "Hello",
  },
}
​
const container = document.getElementById("root")
​
const node = document.createElement(element.type)
node["title"] = element.props.title
​
const text = document.createTextNode("")
text["nodeValue"] = element.props.children
​
node.appendChild(text)
container.appendChild(node)
```

# Step I: The `createElement` Function

# Step II: The `render` Function



