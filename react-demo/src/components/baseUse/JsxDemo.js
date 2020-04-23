import React from "react";

class JsxDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "dong",
      flag: true,
      imgUrl:
        "https://www.baidu.com/img/pc_2e4ef5c71eaa9e3a3ed7fa3a388ec733.png",
    };
  }
  render() {
    const __html = 'First &middot; Second'
    return (
      <>
        <p className='name'>{this.state.name}</p>
        <p style={{fontSize: '26px', color: 'red'}}>{this.state.flag ? 'yes' : 'no'}</p>
        <img src={this.state.imgUrl} alt="" width="150" />
         {/* 必须传递包含key 为 __html 的对象 */}
        <div dangerouslySetInnerHTML={{__html}}></div>
        <div>{__html}</div>
      </>
    );
  }
}

export default JsxDemo;
