import React from "react";

class Mouse extends React.Component {
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
        {this.props.render(this.state)}
      </div>
    );
  }
}

export default () => {
  return (
    <div className="m">
      <Mouse
        render={({ x, y }) => (
          <h1>
            the mouse position is ({x}, {y})
          </h1>
        )}
      ></Mouse>
    </div>
  );
};
