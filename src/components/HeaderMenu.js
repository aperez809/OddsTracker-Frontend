import 'antd/dist/antd.css';

import * as filterTypes from '../constants/filter-types'

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

class HeaderMenu extends Component {

    changeFilterOnClick = (val) => {
        this.props.changeGameFilter(val)
    }

    render() {

        return (
            <Header>
                    <Menu className="menu" theme="dark" mode="horizontal" defaultSelectedKeys={[this.props.gameFilterType.toString()]}>
                        <Menu.Item key="TODAYS_GAMES_FILTER" onClick={() => this.changeFilterOnClick(filterTypes.TODAYS_GAMES_FILTER)}>Today's Games</Menu.Item>
                        <Menu.Item key="UPCOMING_GAMES_FILTER" onClick={() => this.changeFilterOnClick(filterTypes.UPCOMING_GAMES_FILTER)}>Upcoming Games</Menu.Item>
                    </Menu>
            </Header>
        );
    }
}

const mapStateToProps = (state) => ({
    gameFilterType: state.filters.gameFilterType
})

const mapDispatchToProps = {
    changeGameFilter
}


export default connect(mapStateToProps, mapDispatchToProps)(HeaderMenu)

