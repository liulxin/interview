import React from "react";

class FormDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "dong",
      info: 'please enter your info'
    };
  }
  render() {
    return (
      <>
        <p>{this.state.name}</p>
        {/*htmlFor 代替 for*/}
        <label htmlFor="inputName">姓名：</label>
        <input type="text" id="inputName" value={this.state.name} onChange={this.onInputChange}/>

        {/* textarea  */}
        <p>{this.state.info}</p>
        <label htmlFor="textarea">信息：</label>
        <textarea type="text" id="textarea" value={this.state.info} onChange={this.onTextAeraChange}/>

      </>
    );
  }

  onInputChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  onTextAeraChange = (e) => {
    this.setState({
      info: e.target.value
    })
  }
}

export default FormDemo;
