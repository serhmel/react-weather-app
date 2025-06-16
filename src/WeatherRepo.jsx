import {addHistory, setWeather} from "./rootReducer";
import axios from "axios";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const queryWeather = (searchQuery) => {
    return async (dispatch) => {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&units=metric&appid=${API_KEY}`)
            .then((response) => {
                dispatch(setWeather({
                    info: {
                        city: response.data.name,
                        temperature: Math.round(response.data.main.temp),
                    }
                }));

                dispatch(addHistory({
                    city: response.data.name,
                }));
        });
    };
};
