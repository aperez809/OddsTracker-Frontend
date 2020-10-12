import Types from "./types";
const initialState = {
    games: [],
    loading:false
};

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_GAME: {
            return {...state, games: action.payload};
        }

        case Types.GET_UPCOMING_GAMES: {
            return {...state, games: action.payload};
        }

        default: return state
    }
}

export default gameReducer;