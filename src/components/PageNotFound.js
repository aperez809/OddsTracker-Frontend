import "antd/dist/antd.css";

import {Card, Col, Row, message} from 'antd';
import { DeleteOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons';
import { getGameById, getUpcomingGames } from '../actions/games'

import GameListItem from './GameListItem'
import React from "react";
import {connect} from 'react-redux'
import moment from 'moment'

export default class PageNotFound extends React.Component {

    

    render() {
        return <h1>Gah Foo</h1>;
    }
}