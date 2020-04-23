import React from "react";
import ReactDom from 'react-dom'
import './style.css'

class PortalsDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // return <div className="model">{this.props.children}</div>;

    return ReactDom.createPortal(<div className="model">{this.props.children}</div>, document.body)
  }
}

export default PortalsDemo;
