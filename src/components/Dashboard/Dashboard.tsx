import React from "react";
import { Layout } from 'antd';
import Sidebar from '../Sidebar/Sidebar'
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../../routes/routes';
const { Header, Content } = Layout;
const Dashboard = () => {
    return (
      <Router>
        <Layout style={{ minHeight: '100vh' }}>
            <Sidebar/>
            <Layout className="site-layout">
            <Header />
            <Content> 
                <Routes/>
            </Content>
            </Layout>
        </Layout>
      </Router>
    );
};
export default Dashboard;
  