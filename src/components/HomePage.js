import 'antd/dist/antd.css';

import * as filterTypes from '../constants/filter-types';

import { Breadcrumb, Layout, Menu } from 'antd';
import { GatewayOutlined, LaptopOutlined, NotificationOutlined, ThunderboltOutlined, UserOutlined } from '@ant-design/icons';
import { TODAY_DAYS_AWAY, UPCOMING_DAYS_AWAY } from '../constants/dates'

import GameList from "./GameList";
import HeaderMenu from './HeaderMenu'
import React from "react";
import ReactDOM from 'react-dom';
import SideMenu from './SideMenu'
import { connect } from 'react-redux'
import { getUpcomingGames } from "../actions/games";
import moment from 'moment'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class HomePage extends React.Component {
    
    async componentDidMount() {
        await this.props.getUpcomingGames();
        this.updateDisplayedGames();
    }

    updateDisplayedGames = () => {
        let daysAway;

        switch(this.props.gameFilterType) {
            case filterTypes.TODAYS_GAMES_FILTER:
                daysAway = TODAY_DAYS_AWAY
                break;
        
            case filterTypes.UPCOMING_GAMES_FILTER:
                daysAway = UPCOMING_DAYS_AWAY
                break;

            case filterTypes.ALL_GAMES_FILTER: daysAway = Infinity
                break;

            default: daysAway = TODAY_DAYS_AWAY
        }

        return this.applyUpcomingGameDateFilter(daysAway)

    }

    applyUpcomingGameDateFilter = (daysAway) => {
        return this.props.games.filter(game => {
            if (daysAway <= 0) return false;

            const gameTime = moment(game.game_time);
            const currentTime = moment();

            let result = gameTime > currentTime
                && gameTime.diff(currentTime, "days") <= daysAway;
            
            if (daysAway === TODAY_DAYS_AWAY) {
                result = result && gameTime.date() === currentTime.date()}
            
            return result
        })
    }

    

    render() {
        const { Header, Content } = Layout;

        return (
            <Layout>
                <HeaderMenu/>
                <Layout>
                    <SideMenu/>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content>
                            <GameList games={this.updateDisplayedGames()}/>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )}}


const mapStateToProps = (state) => {
    return {
        games: state.games.games,
        gameFilterType: state.filters.gameFilterType
    }
}

const mapDispatchToProps = {
    getUpcomingGames
}


export default connect(mapStateToProps, mapDispatchToProps)(HomePage)