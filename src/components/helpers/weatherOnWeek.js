import { Box, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import CardWeatherDay from "./cardWeatherDay";
import getCity from "./requestCity";

export default function WeatherOnWeek({ coords }) {
    const [days, setDays] = useState('');
    const values = {
        name: days,
        func: setDays
    }

    const req_str = 'https://api.openweathermap.org/data/2.5/onecall?lat=' +
        coords.lat +
        '&lon=' +
        coords.lon +
        '&exclude=current,minutely&lang=ru&appid=';

    useEffect(() => {
        if (days === '') {
            getCity(req_str, values, "first");
        }
    }, [])

    console.log(days.daily, "WeatherOnWeek");

    return (
        <Box>
            {days !== "" ?
                <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    backgroundColor: '#90caf9',
                    p: 2,
                }}>
                    {days.daily.map((item, index) =>
                        <CardWeatherDay
                            item={item}
                            index={index} />
                    )}

                </Box>
                :
                <CircularProgress />
            }
        </Box>
    )
}