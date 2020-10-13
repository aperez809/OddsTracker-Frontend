import "antd/dist/antd.css";

import {Card, Col, Row, message} from 'antd';
import { DeleteOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons';
import { getGameById, getUpcomingGames } from '../actions/games'

import GameListItem from './GameListItem'
import React from "react";
import {connect} from 'react-redux'
import moment from 'moment'

class GameList extends React.Component {

    componentDidMount() {
        
    }

    render() {
        
        const games = this.props.games

        return (
            <Col>        
                { 
                    games.map(game => (
                        <GameListItem game={game}/>
                    ))
                }
            </Col>
        );
    }
}

const mapStateToProps = (state) => ({
    // games: state.games.games
})

const mapDispatchToProps = {
    getUpcomingGames
}

export default connect(mapStateToProps, mapDispatchToProps)(GameList)