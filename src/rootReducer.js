const QUERY_WEATHER = 'QUERY_WEATHER';
const ADD_HISTORY = 'ADD_HISTORY';

const defaultState = {
    info: {
        city: "Kyiv",
        temperature: '',
    },
    history: []
};

export default function rootReducer(state = defaultState, action) {
    switch (action.type) {
        case ADD_HISTORY:
            return {
                ...state,
                history: [...state.history, action.payload],
            };

        case QUERY_WEATHER:
            return {
                ...state,
                info: action.payload.info,
            };

        default:
            return state;
    }
}

export const addHistory = (info) => ({type:'ADD_HISTORY', payload: info});
export const setWeather = (info) => ({type: 'QUERY_WEATHER', payload: info});
