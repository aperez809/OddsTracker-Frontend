import * as actionTypes from '../../constants/action-types';

import axios from "axios";

export const getUpcomingGames = () => async dispatch => {
    dispatch({
        type: actionTypes.GAMES_LOADING,
        payload: true
    });

    const url = `${process.env.REACT_APP_HOST_IP_ADDRESS}/api/games/?upcoming=true`;

    let response = await fetch(url);
    response = await response.json();
    console.log(response);
    return dispatch({
        type: actionTypes.GET_UPCOMING_GAMES,
        payload: response
    });
}

export const getGameById = (id, callback ) => {
    return dispatch => {
        dispatch({
            type: actionTypes.GAMES_LOADING,
            payload:true
        })
        
        axios.get(`${process.env.REACT_APP_HOST_IP_ADDRESS}/api/games/${id}/odds`)
            .then(response => {
                dispatch({
                    type: actionTypes.GET_GAME,
                    payload: response.data
                })
            }
        )
        .catch(err => {
            console.log(err)
            dispatch({
                type: actionTypes.GAMES_LOADING,
                payload: false})
        })
    }
}