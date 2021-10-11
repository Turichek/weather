import { CircularProgress, Container, Paper } from '@mui/material'
import React, { PureComponent, useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { saveToLocalStorage, getFromLocalStorage } from "./workWithLocalStorage";
import getCity from './requestCity';

class CustomizedLabel extends PureComponent {
    render() {
        const { x, y, stroke, value } = this.props;

        return (
            <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
                {value}
            </text>
        );
    }
}

export default function WeatherChart({ coords }) {
    const [hours, setHours] = useState( getFromLocalStorage('chart') || '');
    const values = {
        name: hours,
        func: setHours
    }

    const req_str = 'https://api.openweathermap.org/data/2.5/onecall?lat=' +
        coords.lat +
        '&lon=' +
        coords.lon +
        '&exclude=current,minutely,daily&lang=ru&appid=';

    useEffect(() => {
        if (hours === '') {
            getCity(req_str, values, "third");
        }

        saveToLocalStorage('chart', hours);
    }, [hours])

    /*const [hours, setHours] = useState('');
    const values = {
        name: hours,
        func: setHours
    }

    const req_str = 'https://api.openweathermap.org/data/2.5/onecall?lat=' +
        coords.lat +
        '&lon=' +
        coords.lon +
        '&exclude=current,minutely,daily&lang=ru&appid=';

    useEffect(() => {
        if (hours === '') {
            getCity(req_str, values, "third");
        }
    }, [])*/

    return (
        <Container sx={{
            backgroundColor: '#90caf9',
            pb:3
        }}>
            <Paper elevation={3} sx={{py:2}}>
                <ResponsiveContainer  width="100%" height={400}>
                    {
                        hours !== '' ?
                            <LineChart
                                className="chart"
                                data={hours.hourly}

                            >
                                <XAxis dataKey="dt" padding={{ left: 7, right: 7 }} />
                                <YAxis padding={{ top: 7, bottom: 7 }}/>
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="temp" stroke="#e65100" label={<CustomizedLabel />} />
                                <Line type="monotone" dataKey="feels_like" stroke="#0d47a1" label={<CustomizedLabel />} />
                            </LineChart>
                            :
                            <CircularProgress />
                    }

                </ResponsiveContainer>
            </Paper>
        </Container>
    );
}