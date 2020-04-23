import React from "react";

class UnControlDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "dong",
      flag: true,
    };

    this.nameInputRef = React.createRef();
    this.fileInputRef = React.createRef();
  }

  render() {
    return (
      <div>
        {/*使用 defaultValue 而不是 value, 使用ref*/}
        <input
          type="text"
          defaultValue={this.state.name}
          ref={this.nameInputRef}
        />
        <br />
        {/*state 并不会随着改变*/}
        <span>state.name: {this.state.name}</span>
        <br />
        <button onClick={this.alertName}>alert name</button>

        {/*checkbox*/}
        <br/>
        {/* <input type="checkbox" defaultChecked={this.state.flag}/> */}

        {/* file */}
        <br/>
        <input type="file" ref={this.fileInputRef} />
        <button onClick={this.alertFile}>alert file</button>
      </div>
    );
  }

  alertName = () => {
    const elem = this.nameInputRef.current;
    alert(elem.value);
  };
  alertFile = () => {
    const elem = this.fileInputRef.current;
    console.log(elem.files[0]);
    const file = elem.files[0]
    const fr = new FileReader()
    fr.readAsDataURL(file)
    fr.onload = () => {
      console.log(fr.result)
    }
  };
}

export default UnControlDemo;
