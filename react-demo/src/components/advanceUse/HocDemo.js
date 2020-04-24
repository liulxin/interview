import React from "react";

const withMouse = (Component) => {
  class withMouseComponent extends React.Component {
    state = { x: 0, y: 0 };

    handleMouseMove = (event) => {
      this.setState({
        x: event.clientX,
        y: event.clientY,
      });
    };

    render() {
      return (
        <div onMouseMove={this.handleMouseMove}>
          <Component {...this.props} mouse={this.state} />
        </div>
      );
    }
  }

  return withMouseComponent
};

const App = (props) => {
  const { x, y } = props.mouse;
  return (
    <div style={{ height: "500px" }}>
      <h1>
        the mouse position is ({x}, {y})
      </h1>
    </div>
  );
};

export default withMouse(App);
