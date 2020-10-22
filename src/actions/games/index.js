import * as actionTypes from '../../constants/action-types';

export const getUpcomingGames = () => async dispatch => {
    dispatch({
        type: actionTypes.GAMES_LOADING,
        payload: true
    });

    const url = `${process.env.REACT_APP_HOST_IP_ADDRESS}/api/games/?upcoming=true`;

    let response = await fetch(url);
    response = await response.json();
    return dispatch({
        type: actionTypes.GET_UPCOMING_GAMES,
        payload: response
    });
}

export const getGameById = (id) => async dispatch => {
    dispatch({
        type: actionTypes.GAMES_LOADING,
        payload:true
    })
    
    const url = `${process.env.REACT_APP_HOST_IP_ADDRESS}/api/games/${id}/odds`;
    let response = await fetch(url);
    response = await response.json();
    return dispatch({
        type: actionTypes.GET_GAME,
        payload: response
    })
}