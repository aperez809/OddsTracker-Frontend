import "antd/dist/antd.css";

import {Card, Col, Row, message} from 'antd';
import { DeleteOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons';
import {getGameById, getUpcomingGames} from '../redux/actions.js'

import React from "react";
import {connect} from 'react-redux'
import moment from 'moment'

class GameList extends React.Component {

    componentDidMount() {
        this.props.getUpcomingGames();
    }

    render() {
        const games = this.props.today ? this.props.games.filter(game => {
            const parsedGameTime = moment(game.game_time).subtract(1, 'days')
            const currentTime = moment()
            return parsedGameTime < currentTime
        }) : this.props.games

        return (
                    <Col span={12} offset={6}>
                        {
                            games.map(game => (
                            <Row gutter={[48, 48]}>
                                <Col span={24}>
                                    <Card
                                        key={game.id}
                                        title={`${game.team_a} vs. ${game.team_b}`}
                                        /*
                                        teamA={game.teamA}
                                        teamB={game.teamB}
                                        */
                                        style={{width: '100%'}}

                                        //TODO: Update with logic to get single game
                                        /*actions={[
                                            <DeleteOutlined key="delete" onClick={()=>this.deletePost(p.id)} />,
                                        ]}*/
                                    >
                                    </Card>
                                </Col>
                            </Row>
                        ))}
                    </Col>
        );
    }
}

const mapStateToProps = (state) => ({
    games: state.games
})

const mapDispatchToProps = {
    getUpcomingGames, getGameById
}

export default connect(mapStateToProps, mapDispatchToProps)(GameList)