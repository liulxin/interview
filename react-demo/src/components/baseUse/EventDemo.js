import React from "react";

class EventDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '张三',
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

    // 修改this指向
    this.clickHandler1 = this.clickHandler1.bind(this)
  }
  render() {
    return (
      <>
      <p onClick={this.clickHandler1}>{this.state.name} - 1</p>
      {/* <p onClick={this.clickHandler1.bind(this)}>{this.state.name} - 1</p> */}
      <p onClick={this.clickHandler2}>{this.state.name} - 2</p>
      <a onClick={this.clickHandler3} href="/ab">{this.state.name} - 3</a>
      <p onClick={this.clickHandler4.bind(this, 'hello')}>{this.state.name} - 4</p>
      <ul>
        {
          this.state.list.map((item,index) => <li key={item.id} onClick={e => this.clickHandler5(item.title, e)}>index: {index} - {item.title}</li>)
        }
      </ul>
      </>
    );
  }
  clickHandler1() {
    console.log('this....', this)
    this.setState({
      name: 'lisi'
    })
  }
  clickHandler2 = () => {
    this.setState({
      name: 'lisi'
    })
  }
  clickHandler3 = (event) => {
    event.preventDefault(); // 阻止默认行为
    event.stopPropagation(); // 阻止冒泡
    
    
    console.log(event) // 不是原生event -> SyntheticEvent
    console.log('target', event.target) // 指向当前元素，即当前元素触发
    console.log('current target', event.currentTarget) // 绑定事件的元素 指向当前元素，假象

    console.log(event.nativeEvent)
    console.log(event.nativeEvent.currentTarget) // document
  }

  clickHandler4 = (name, event) => {
    console.log(name)
    console.log(event)
    this.setState({
      name
    })
  }
  clickHandler5 = (title, event) => {
    console.log(title)
    console.log(event)
    this.setState({
      name: title
    })
  }
}

export default EventDemo;
