import React, { useState } from "react";
import getCity from "./requestCity";
import { Box, Button, TextField } from "@mui/material";

export default function AddCity({ savedCity }) {
    const [city, setCity] = useState('');

    function add() {
        if (city !== undefined) {
            const req_str = 'https://api.openweathermap.org/data/2.5/weather?q=' +
                city +
                '&lang=ru&appid=';
            getCity(req_str, savedCity, "second");
        }
        else alert("Недопустимое значение для названия города")
    }

    return (
        <Box sx={{ p: 3, backgroundColor: '#ffffff',height: '56px',display: 'flex' ,justifyContent: 'space-between' }}>
            <TextField
                label="Введите город"
                onChange={(e) => setCity(e.target.value)}
                value={city}
                type="search" 
                sx={{
                    width: '80%'
                }}
            />
            <Button sx={{
                width: '19%',
                height: '100%',
            }}
                variant="contained"
                onClick={add}
            >Добавить</Button>
        </Box>
    )
}
