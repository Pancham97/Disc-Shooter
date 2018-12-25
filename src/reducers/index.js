import { MOVE_OBJECTS, START_GAME, LEADERBOARD_LOADED, LOGGED_IN, SHOOT, shoot } from "../actions";
import moveObjects from './moveObjects';
import startGame from "./startGame";
import shooter from './shoot';

const initialGameState = {
    started: false,
    kills: 0,
    lives: 3,
    flyingObjects: [],
    lastObjectCreatedAt: new Date(),
    currentPlayer: null,
    players: null,
    cannonBalls: [],
};

const initialState = {
    angle: 45,
    gameState: initialGameState,
};

function reducer(state = initialState, action) {
    switch(action.type) {
        case LEADERBOARD_LOADED:
            return {
                ...state,
                players: action.player,
            };
        case LOGGED_IN:
            return {
                ...state,
                currentPlayer: action.player,
            };
        case MOVE_OBJECTS:
            return moveObjects(state, action);
        case START_GAME:
            return startGame(state, initialGameState);
        case SHOOT:
            return shooter(state, action);
        default:
            return state;
    }
}

export default reducer;