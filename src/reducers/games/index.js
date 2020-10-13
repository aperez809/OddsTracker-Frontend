import * as actionTypes from "../../constants/action-types";
const initialState = {
    games: [],
    loading: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_GAME: {
            return {...state, games: action.payload};
        }

        case actionTypes.GET_UPCOMING_GAMES: {
            return {...state, games: action.payload};
        }

        case actionTypes.GAMES_LOADING: {
            return {...state}
        }

        default: return state
    }
}