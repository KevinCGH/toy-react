import { createElement, render, Component } from "./src/toy-react";

const text = "my component";

class MyComponent extends Component {
  constructor() {
    super();
    this.state = {
      a: 1,
      b: 2,
    };
  }
  render() {
    return (
      <div>
        <h1>{text}</h1>
        <div>{this.state.a.toString()}</div>
        <div>{this.state.b.toString()}</div>
        <button
          onClick={() => {
            this.setState({ a: this.state.a + 1 });
          }}
        >
          add
        </button>
      </div>
    );
  }
}

render(
  <MyComponent id="a" class="c">
    <div>abc</div>
    <div></div>
  </MyComponent>,
  document.getElementById("root")
);
