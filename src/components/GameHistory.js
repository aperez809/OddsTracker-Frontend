import "antd/dist/antd.css";

import {Avatar, Card, Col, Row, Skeleton, Switch, message} from 'antd';
import { DeleteOutlined, EditOutlined, EllipsisOutlined, HeartOutlined, LineChartOutlined, SettingOutlined } from '@ant-design/icons';
import {getGameById, getUpcomingGames} from '../actions/games'

import LineGraph from "./LineGraph"
import { Link } from "react-router-dom";
import React from "react";
import { TimelineChart } from 'ant-design-pro/lib/Charts';
import _ from 'lodash';
import {connect} from 'react-redux'
import moment from 'moment'

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

    render() {
        return (
            <LineGraph data={this.state.selectedSourceData}/>
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
