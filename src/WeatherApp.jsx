import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {queryWeather} from "./WeatherRepo";

const WeatherApp = () => {
    const dispatch = useDispatch();
    const city = useSelector(state => state.info.city);
    const temperature = useSelector(state => state.info.temperature);
    const history = useSelector(state => state.history);

    const [searchQuery, setSearchQuery] = useState("");

    function definePlusSign() {
        if (temperature > 0) {
            return '+';
        }
    }

    function searchHandler() {
        dispatch(queryWeather(searchQuery));
        setSearchQuery('');
    }

    useEffect(() => {
        function runQuery() {
            dispatch(queryWeather('Kyiv'));
        }
        runQuery();
    }, [dispatch]);

    function getHistory() {
        return history.slice(-10).reverse();
    }

    function searchByCity(e, city) {
        e.preventDefault();
        dispatch(queryWeather(city));
        setSearchQuery('');
    }

    return (
        <div className="weatherApp">
            <div className="weatherDisplay">
                <div className="weatherSearch">
                    <h1>Weather Forecast</h1>
                    <form onSubmit={(e) => {e.preventDefault(); searchHandler()}} action="#">
                        <input className="search" type="search" placeholder="Kyiv" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                        <button>Search</button>
                    </form>
                </div>

                <div className="weatherCurrent">
                    <div className="weatherCityName">{city}</div>
                    <div className="weatherToday">(Today):</div>
                    <div className="weatherCityTemperature">{definePlusSign()}{temperature}</div>
                </div>
            </div>

            <div className="lastQueries">
                <h1>Last 10 queries</h1>
                <div className="lastQueriesList">
                    {getHistory().map((item, index) =>
                            <button className="lastQueriesItem" key={index} onClick={(e) => searchByCity(e, item.city)}>
                        {item.city}
                    </button>)}
                </div>
            </div>
        </div>
    );
};

export default WeatherApp;
