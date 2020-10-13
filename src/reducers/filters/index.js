import * as actionTypes from "../../constants/action-types";

import { TODAYS_GAMES_FILTER } from "../../constants/filter-types";

const initialState = {
    gameFilterType: TODAYS_GAMES_FILTER 
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_GAME_FILTER:
            return {...state, ...action.payload};
            // const newState = JSON.parse(JSON.stringify(state));
            // return {
            //     ...newState,
            //     ...action.payload
            // }
        default: return state
    };

}
