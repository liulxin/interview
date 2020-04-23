import React from "react";
const ThemeContext = React.createContext("light");

function ThemeLink(props) {
  // const theme = this.context 函数组件无this
  // ThemeContext.Consumer 可以多层嵌套，使得一个组件消费多个 context
  return (
    <ThemeContext.Consumer>
      {(value) => <p>link theme is {value}</p>}
    </ThemeContext.Consumer>
  );
}

class ThemeButton extends React.Component {
  // 指定 contextType 读取当前的 theme context。
  // React 会往上找到最近的 theme Provider，然后使用它的值。
  static contextType = ThemeContext;
  render() {
    const theme = this.context;
    return <div>button theme is {theme}</div>;
  }
}

function ToolBar(props) {
  return (
    <div>
      <ThemeButton />
      <ThemeLink />
    </div>
  );
}

class ContextDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "light",
    };
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <ToolBar />
        <hr />
        <button onClick={this.changeTheme}>change theme</button>
      </ThemeContext.Provider>
    );
  }
  changeTheme = () => {
    this.setState({
      theme: this.state.theme === "light" ? "dark" : "light",
    });
  };
}

export default ContextDemo;
