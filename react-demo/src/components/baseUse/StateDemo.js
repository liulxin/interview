import React from "react";

class StateDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      list1: [10],
      list2: [2],
      list3: [3,4,5,6,7],
      list4: [4,100,102],
      list5: ["john", "mike"],
      obj1: {a: 10, b: 2},
      obj2: {x: 0, a: 12}
    };
  }
  render() {
    const { count } = this.state;
    return (
      <div>
        <p>{count}</p>
        <button onClick={this.increase}>累加</button>
      </div>
    );
  }
  increase = () => {
    // const { count } = this.state;
    // this.setState({
    //   count: count + 1,
    // }, () => {
    //   console.log(this.state.count) // 通过这种方式拿取最新值
    // });
    // console.log(this.state.count) // 异步， 不是最新值

    
    // setTimeOut 同步
    setTimeout(() => {
      this.setState({
        count: this.state.count + 1
      })
      console.log('count setTimeOut', this.state.count)
    },0)

  };

  componentDidMount() {
    // 不可变值 - 数组
    // 不能对 this.state.list 进行 push pop splice ，违反不可变值
    const list5Copy = this.state.list5.slice();
    list5Copy.splice(2,0, 'a')
    this.setState({
      list1: this.state.list1.concat(100), // 追加
      list2: [...this.state.list2, 100], // 追加
      list3: this.state.list3.slice(0, 3), // 截取
      list4: this.state.list4.filter(item => item > 100), // 筛选
      list5: list5Copy
    })

    // 不可变值 - 对象
    this.setState({
      obj1: Object.assign({}, this.state.obj1, {a: 19}),
      obj2: {...this.state.obj2, a: 100}
    }, () => {
      console.log(this.state.obj1) // {a: 19, b: 2}
      console.log(this.state.obj2)  // {x: 0, a: 100}
    })

    // 自定义事件 同步
    // document.body.addEventListener('click', () => {
    //   this.setState({
    //     count: this.state.count + 1
    //   })
    //   console.log('count in body', this.state.count)
    // })
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextState)

    return true
  }
}

export default StateDemo;
