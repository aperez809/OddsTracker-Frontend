import 'antd/dist/antd.css';

import { Breadcrumb, Layout, Menu } from 'antd';
import { Component, Fragment } from 'react'
import { GatewayOutlined, LaptopOutlined, NotificationOutlined, ThunderboltOutlined, UserOutlined } from '@ant-design/icons';

import GameList from "./GameList";
import React from "react";
import ReactDOM from 'react-dom';
import { changeTodayUpcomingFilter } from '../actions/filters'
import { connect } from 'react-redux'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class BreadcrumbMenu extends Component {

    changeFilterOnClick = (val) => {
        //impl
    }

    render() {

        return (
            <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Content>
                    { this.props.gameFilterType ? <GameList games={this.props.games/*this.getGamesToday()*/}/> : <GameList games={this.props.games}/> }
                </Content>
            </Layout>
        );
    }
}

const mapStateToProps = (state) => ({
    gameFilterType: state.filters.gameFilterType
})

const mapDispatchToProps = {
    changeTodayUpcomingFilter
}


export default connect(mapStateToProps, mapDispatchToProps)(BreadcrumbMenu)