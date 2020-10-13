import 'antd/dist/antd.css';

import { Breadcrumb, Layout, Menu } from 'antd';
import { Component, Fragment } from 'react'
import { GatewayOutlined, LaptopOutlined, NotificationOutlined, ThunderboltOutlined, UserOutlined } from '@ant-design/icons';

import GameList from "./GameList";
import React from "react";
import ReactDOM from 'react-dom';
import { changeGameFilter } from '../actions/filters'
import { connect } from 'react-redux'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class SideMenu extends Component {

    changeFilterOnClick = (val) => {
        //impl
    }

    render() {

        return (
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
        );
    }
}

const mapStateToProps = (state) => ({
    gameFilterType: state.filters.gameFilterType
})

const mapDispatchToProps = {
    changeGameFilter
}


export default connect(mapStateToProps, mapDispatchToProps)(SideMenu)