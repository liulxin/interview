import React from "react";

class ListDemo extends React.Component {
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
      <ul>
        {
          this.state.list.map((item,index) => <li key={item.id}>index: {index} - {item.title}</li>)
        }
      </ul>
    );
  }
}

export default ListDemo;
