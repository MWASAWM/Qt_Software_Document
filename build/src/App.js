import React from 'react';
import './App.css';
import Sider from './components/Sider/Sider';
import Content from './components/Content/Content';
import 'antd/dist/antd.css';


class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          content : 1
      }
  }


  changeContent(data) {
    this.setState({
      content : data
    })
  }
  
  render () {
    switch(this.state.content) {
      case 1: return (<div><Sider onValue={this.changeContent.bind(this)}/><Content /></div>);
      case 2: return (<div><Content /><Sider /></div>);
    }

  }  
}

export default App;
