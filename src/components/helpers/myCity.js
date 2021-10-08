import React, { useEffect, useState } from "react";
import GetPos from "./getPos";
import WeatherOnWeek from "./weatherOnWeek";
import GeoCity from "./geoCity";
import getCity from "./requestCity";
import { Box, CircularProgress, Container, Tab, Tabs } from "@mui/material"
import WeatherChart from "./weatherChart";

export default function MyCity() {
    const [myCity, setCity] = useState("");
    const [weather, setWeather] = useState('');
    const values = {
        myCity: {
            name: myCity,
            func: setCity
        },
        cityWeather: {
            name: weather,
            func: setWeather
        }
    }
    const req_str = 'https://api.openweathermap.org/data/2.5/onecall?lat=' +
        coords.lat +
        '&lon=' +
        coords.lon +
        '&exclude=current,minutely&lang=ru&appid=';

    useEffect(() => {
        GetPos(values.myCity);
        if (weather === '') {
            getCity(req_str, values.cityWeather, "first");
        }
    }, [])

    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    return (
        <Box sx={{
            pt: 2,
            backgroundColor: '#bbdefb',
            minWidth: '610px'
        }}>
            <Container >
                {myCity !== "" ?
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',

                    }}>
                        <GeoCity myCity={myCity} />
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Item One" {...a11yProps(0)} />
                            <Tab label="Item Two" {...a11yProps(1)} />
                            <Tab label="Item Three" {...a11yProps(2)} />
                        </Tabs>
                        <WeatherOnWeek coords={myCity.coord} />
                        <WeatherChart />
                    </Box>

                    :
                    <CircularProgress />
                }

            </Container>
        </Box>
    )
}