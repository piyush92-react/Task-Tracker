import React from "react";
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
const { Sider } = Layout;
const Sidebar = () =>{
    return(
      <Sider>
        <div className="logo" >Task Tracker</div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">
            <Link to="/home">
              Home
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/todo">
              Todo
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/in-progress">
              In Progress
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/done">
                Done
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
    )
}
export default Sidebar;