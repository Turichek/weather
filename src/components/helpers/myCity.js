import React, { useEffect, useState } from "react";
import GetPos from "./getPos";
import PropTypes from 'prop-types';
import WeatherOnWeek from "./weatherOnWeek";
import GeoCity from "./geoCity";
import { Box, CircularProgress, Tab, Tabs } from "@mui/material"
import WeatherChart from "./weatherChart";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
            style={{backgroundColor: '#90caf9'}}
        >
            {value === index && (
                <Box sx={{
                    pt:3
                }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

export default function MyCity({name}) {
    const [myCity, setCity] = useState(name);
    const [value, setValue] = useState(0);

    const values = {
        name: myCity,
        func: setCity
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        GetPos(values);
    }, [])// eslint-disable-line 

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    return (
        <Box sx={{
            pt: 2,
            minWidth: '610px'
        }}>
                {myCity !== "" ?
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',

                    }}>
                        <GeoCity myCity={myCity} />
                        <Tabs sx={{
                            backgroundColor: '#ffffff',
                        }}
                            value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab sx={{width: '50%', maxWidth:'50%'}} label="На ближайшие 48 часов" {...a11yProps(0)} />
                            <Tab sx={{width: '50%', maxWidth:'50%'}}  label="На неделю" {...a11yProps(1)} />
                        </Tabs>
                        <TabPanel value={value} index={0}>
                            <WeatherChart coords={myCity.coord} />
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <WeatherOnWeek coords={myCity.coord} />
                        </TabPanel>
                    </Box>

                    :
                    <CircularProgress />
                }
        </Box>
    )
}