import Types from "./types";
import axios from "axios";

export const getUpcomingGames = () => {
    return dispatch => {
        dispatch({type:Types.GAMES_LOADING, payload:true})
        axios.get(`${process.env.REACT_APP_HOST_IP_ADDRESS}/api/games/?upcoming=true`)
            .then(response => {
                    dispatch({type:Types.GET_UPCOMING_GAMES, payload:response.data})
                }
            )
            .catch(err => {
                    console.log(err)
                    dispatch({type:Types.GAMES_LOADING, payload:false})
            }
            );
    }
}

export const getGameById = (id, callback ) => {
    return dispatch => {
        dispatch({type:Types.GAMES_LOADING, payload:true})
        axios.get(`${process.env.REACT_APP_HOST_IP_ADDRESS}/api/games/${id}/odds`)
            .then(response => {
                dispatch({type:Types.GET_GAME, payload:response.data})
            }
        )
        .catch(err => {
            console.log(err)
            dispatch({type:Types.GAMES_LOADING, payload:false})
        })
    }
}