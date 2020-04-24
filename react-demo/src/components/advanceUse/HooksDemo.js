import React, { memo } from "react";

class HooksDemo extends React.PureComponent {
  state = {
    count: 1,
    value: 1,
  };
  onClick = () => {
    const { value } = this.state;
    this.setState({
      value: value + 1
    });
  };
  render() {
    const { count, value } = this.state;
    console.log("father render");
    return (
      <div>
        <Demo count={count} />
        {value}
        <button onClick={this.onClick}>测试</button>
      </div>
    );
  }
}

const Demo = memo(function (props) {
  console.log(props, "props");
  return <div>{props.count}</div>;
});

export default HooksDemo;
