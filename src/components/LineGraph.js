import 'antd/dist/antd.css';

import * as filterTypes from '../constants/filter-types';

import { Breadcrumb, Layout, Menu } from 'antd';
import { Chart, ctx } from 'chart.js';
import { GatewayOutlined, LaptopOutlined, NotificationOutlined, ThunderboltOutlined, UserOutlined } from '@ant-design/icons';
import { TODAY_DAYS_AWAY, UPCOMING_DAYS_AWAY } from '../constants/dates'

import GameList from "./GameList";
import HeaderMenu from './HeaderMenu'
import { Line } from "react-chartjs-2";
import React from "react";
import ReactDOM from 'react-dom';
import SideMenu from './SideMenu'
import { connect } from 'react-redux'
import { getUpcomingGames } from "../actions/games";
import moment from 'moment'

class LineGraph extends React.Component {

    constructor(props) {
        super(props);
        this.options = {
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                    type: 'time',
                    time: {
                    unit: 'week'
                    }
                }],
                yAxes: [{
                    stacked: true
                }]
            }
        }
    }

    componentDidMount() {
    
    }

    render() {
        return (
            <Line data={this.props.data} options={this.options} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        gameCurrentlyInView: state.games.gameCurrentlyInView,
    }
}

const mapDispatchToProps = {

}


export default connect(mapStateToProps, mapDispatchToProps)(LineGraph)