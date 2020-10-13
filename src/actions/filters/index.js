import * as actionTypes from '../../constants/action-types';

import axios from "axios";

export const changeGameFilter = (val) => dispatch => {
    dispatch({
        type: actionTypes.CHANGE_GAME_FILTER,
        payload: { gameFilterType: val}
    });
}