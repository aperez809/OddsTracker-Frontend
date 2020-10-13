import "antd/dist/antd.css";

import {Avatar, Card, Col, Row, Skeleton, Switch, message} from 'antd';
import { DeleteOutlined, EditOutlined, EllipsisOutlined, HeartOutlined, LineChartOutlined, SettingOutlined } from '@ant-design/icons';
import {getGameById, getUpcomingGames} from '../actions/games'

import React from "react";
import {connect} from 'react-redux'
import moment from 'moment'

const { Meta } = Card;

class GameListItem extends React.Component {

    componentDidMount() {
        
    }

    render() {
        const game = this.props.game;

        return (
                        <Row gutter={[48, 48]}>
                            <Col span={24}>
                                <Card
                                    key={`${game.id}_${game.team_a}`}
                                    title={`${moment(game.game_time).format("ddd, MMM Do YYYY @ h:mm a")}`}
                                    style={{width: '100%'}}
                                    actions={[
                                        <LineChartOutlined key="setting"/>,
                                        <HeartOutlined key="edit"/>,
                                        <EllipsisOutlined key="ellipsis" />
                                    ]}
                                >
                                    <Card style={{width: '100%'}}>
                                        <h4>{`${game.team_a}`}</h4>
                                    </Card>
                                    <Card style={{width: '100%'}}>
                                        <h4>{`${game.team_b}`}</h4>
                                    </Card>
                                </Card>
                                
                            </Col>
                        </Row>
        )
    };
}

export default GameListItem;


// <Card
//           style={{ width: 300, marginTop: 16 }}
//           actions={[
//             <SettingOutlined key="setting" />,
//             <EditOutlined key="edit" />,
//             <EllipsisOutlined key="ellipsis" />
//           ]}
//         >
//           <Skeleton loading={loading} avatar active>
//             <Meta
//               avatar={
//                 <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
//               }
//               title="Card title"
//               description="This is the description"
//             />
//           </Skeleton>
//         </Card>