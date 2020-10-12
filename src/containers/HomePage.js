import "antd/dist/antd.css";
import 'antd/dist/antd.css';

import { Breadcrumb, Layout, Menu } from 'antd';
import { GatewayOutlined, LaptopOutlined, NotificationOutlined, ThunderboltOutlined, UserOutlined } from '@ant-design/icons';

import GameList from "./GameList";
import React from "react";
import ReactDOM from 'react-dom';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 1
        }
    }
    handleClick = id => {
        this.setState({ selected: id })
    }
    render() {
        const { Header, Content } = Layout;

        return (
            <Layout>
                <Header>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[this.state.selected.toString()]}>
                        <Menu.Item key="1" onClick={() => this.handleClick(1)}>Today's Games</Menu.Item>
                        <Menu.Item key="2" onClick={() => this.handleClick(2)}>Upcoming Games</Menu.Item>
                    </Menu>
                </Header>
                <Layout>
                <Sider width={200} className="site-layout-background" theme="dark">
                    <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                    theme="dark"
                    >
                    <SubMenu key="sub1" icon={<ThunderboltOutlined/>} title="Sports">
                        <Menu.Item key="1">option1</Menu.Item>
                        <Menu.Item key="2">option2</Menu.Item>
                        <Menu.Item key="3">option3</Menu.Item>
                        <Menu.Item key="4">option4</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<GatewayOutlined />} title="Leagues">
                        <Menu.Item key="5">option5</Menu.Item>
                        <Menu.Item key="6">option6</Menu.Item>
                        <Menu.Item key="7">option7</Menu.Item>
                        <Menu.Item key="8">option8</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                        <Menu.Item key="9">option9</Menu.Item>
                        <Menu.Item key="10">option10</Menu.Item>
                        <Menu.Item key="11">option11</Menu.Item>
                        <Menu.Item key="12">option12</Menu.Item>
                    </SubMenu>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content>
                        { this.state.selected === 1 ? <GameList today={true}/> : <GameList today={false}/> }
                    </Content>
                </Layout>
                </Layout>
            </Layout>
        );
    }
}


export default Homepage