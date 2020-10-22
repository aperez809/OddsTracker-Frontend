import "antd/dist/antd.css";
import 'antd/dist/antd.css';

import * as filterTypes from '../constants/filter-types';

import {Avatar, Card, Col, Row, Skeleton, Switch, message} from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import { DeleteOutlined, EditOutlined, EllipsisOutlined, HeartOutlined, LineChartOutlined, SettingOutlined } from '@ant-design/icons';
import { GatewayOutlined, LaptopOutlined, NotificationOutlined, ThunderboltOutlined, UserOutlined } from '@ant-design/icons';
import { Input, Radio } from 'antd';
import { TODAY_DAYS_AWAY, UPCOMING_DAYS_AWAY } from '../constants/dates'
import {getGameById, getUpcomingGames} from '../actions/games'

import GameList from "./GameList";
import HeaderMenu from './HeaderMenu'
import LineGraph from "./LineGraph"
import { Link } from "react-router-dom";
import React from "react";
import SideMenu from './SideMenu'
import { TimelineChart } from 'ant-design-pro/lib/Charts';
import _ from 'lodash';
import {connect} from 'react-redux'
import moment from 'moment'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const { Meta } = Card;

class GameHistory extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sources: [],
            selectedSource: 0,
            selectedSourceData: {},
        }

    }

    async componentDidMount() {
        await this.props.getGameById(this.props.match.params.id)
        let sources = _.uniq(_.map(this.props.gameCurrentlyInView.odds, "source"));
        sources = sources.sort((a,b) => a - b);
        if (!sources || sources.length == 0) return;

        this.setState({
            sources,
            selectedSource: sources[0],
        });

        await this.getOddsData();

    }

    getDatesXAxis = () => {
        if (!this.props.gameCurrentlyInView || !this.props.gameCurrentlyInView.odds) return;

        let filteredData = this.props.gameCurrentlyInView.odds.filter(d => d.source === this.state.selectedSource)
        return filteredData.sort((a,b) => a - b);


    }

    async getOddsData() {
        if (!this.props.gameCurrentlyInView || !this.props.gameCurrentlyInView.odds) return;
        let filteredData = this.props.gameCurrentlyInView.odds.filter(d => d.source === this.state.selectedSource)

        let newTeamAData = [];
        let newTeamBData = [];

        filteredData.forEach(d => {
            newTeamAData.push({x: d.time_recorded, y: d.team_a_value})
            newTeamBData.push({x: d.time_recorded, y: d.team_b_value})
        });
        
        this.setState({
            ...this.state,
            selectedSourceData: {
                datasets: [
                    {
                        label: this.props.gameCurrentlyInView.team_a,
                        data: newTeamAData,
                        borderColor: "rgba(75,192,192,0.2)"
                    },
                    {
                        label: this.props.gameCurrentlyInView.team_b,
                        data: newTeamBData,
                        borderColor: "#742774"

                    }
                ]
            }
        });
    }

    handleFilterChange = (e) => {
        this.setState({
            ...this.state,
            selectedSource: e.target.value
        }, this.getOddsData);
    } 

    render() {

        const style = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
          };

        return (
            <Layout>
                <HeaderMenu/>
                <Layout>
                    <SideMenu/>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>{`${this.props.gameCurrentlyInView.team_a} vs. ${this.props.gameCurrentlyInView.team_b}`}</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content>
                            <LineGraph data={this.state.selectedSourceData}/>
                            
                            <Radio.Group onChange={this.handleFilterChange} defaultValue={this.state.selectedSource}>
                                { 
                                    this.state.sources.map(s => {
                                       return <Radio.Button style={style} value={s}>{s}</Radio.Button>
                                    })
                                }
                            </Radio.Group>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
            
            
        )
    };s
}

const mapStateToProps = (state) => {
    return {
        gameCurrentlyInView: state.games.gameCurrentlyInView,
    }
}

const mapDispatchToProps = {
    getGameById
}

export default connect(mapStateToProps, mapDispatchToProps)(GameHistory)
