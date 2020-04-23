import React from "react";
import PropsTyes from "prop-types";

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
  submitTitle: PropsTyes.func.isRequired,
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
  list: PropsTyes.arrayOf(PropsTyes.object).isRequired,
};

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
    };
  }
  render() {
    return (
      <div>
        <Input submitTitle={this.onSubmitTitle} />
        <List list={this.state.list} />
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
