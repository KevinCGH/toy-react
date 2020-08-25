import { createElement, render, Component } from "./src/toy-react";

const text = "my component";

class MyComponent extends Component {
  render() {
    return (
      <div>
        <h1>{text}</h1>
        {this.children}
      </div>
    );
  }
}

render(
  <MyComponent id="a" class="c">
    <div>abc</div>
    <div>{new Date().toLocaleTimeString()}</div>
    <div></div>
  </MyComponent>,
  document.getElementById("root")
);
