import React from 'react';
import App from '../../App'
import { Menu } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Sider extends React.Component {

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
    this.props.onValue(data)
  };

  handleClick = (e) => {
    console.log('click ', e);
  }

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        style={{ width: 256 , height: "100%" , position: "fixed"}}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu key="sub1" title={<span>软件信息</span>}>
            <Menu.Item key="1">背景</Menu.Item>
          <MenuItemGroup key="g2" title="需求分析">
            <Menu.Item key="2" onClick={this.changeContent.bind(this,2)}>功能需求</Menu.Item>
            <Menu.Item key="3">性能需求</Menu.Item>
            <Menu.Item key="4">安全需求</Menu.Item>
            <Menu.Item key="5">软硬件需求</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <SubMenu key="sub2" title={<span>软件设计</span>}>
          <Menu.Item key="6">Option 5</Menu.Item>
          <Menu.Item key="7">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="8">Option 7</Menu.Item>
            <Menu.Item key="9">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub4" title={<span>Navigation Three</span>}>
          
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

export default Sider;