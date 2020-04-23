import React from "react";
import PropTypes from "prop-types";

class Input extends React.Component {
  state = {
    title: "",
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.title}
          onChange={this.onTitleChange}
        />
        <button onClick={this.onSubmit}>add</button>
      </div>
    );
  }
  onTitleChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };
  onSubmit = () => {
    const { submitTitle } = this.props;
    submitTitle(this.state.title);
    this.setState({
      title: ''
    })
  };
}

Input.propTypes = {
  submitTitle: PropTypes.func.isRequired,
};

class List extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.list.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};

// 添加时 footer 也会造成更新
// react默认父组件更新了，子组件无条件更新
// 可以通过componentDidUpdate 进行优化
class Footer extends React.Component {
  render() {
    return <div>{this.props.text} {this.props.length}</div>
  }
  componentDidUpdate() {
    console.log('footer did update')
  }
  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps.text !== this.props.text || nextProps.length !== this.props.length) {
      return true
    }
    return false
  }
}
Footer.propTypes = {
  text: PropTypes.string.isRequired
}

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          id: "id-1",
          title: "标题1",
        },
        {
          id: "id-2",
          title: "标题2",
        },
        {
          id: "id-3",
          title: "标题3",
        },
      ],
      footerInfo: 'footer'
    };
  }
  render() {
    return (
      <div>
        <Input submitTitle={this.onSubmitTitle} />
        <List list={this.state.list} />
        <Footer text={this.state.footerInfo} length={this.state.list.length}/>
      </div>
    );
  }
  onSubmitTitle = (title) => {
    this.setState((prevState,prevProps) => ({
      list: prevState.list.concat({ id: `id-${Date.now()}`, title }),
    }));
  };
}

export default TodoList;
