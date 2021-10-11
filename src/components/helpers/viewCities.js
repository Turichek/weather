import React from "react";
import DeleteCity from "./deleteCity";
import addIcon from "./addIcon";
import { Box, Paper, Typography } from "@mui/material";

export default function ViewCity({ savedCity }) {
    return (
        <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            mt: 3
        }}>
            {savedCity.arr.map((item, index) =>
                <Paper elevation={3} sx={{
                    border: 1,
                    borderColor: 'info.main',
                    borderRadius: '16px',
                    p: 2,
                    m: 1,
                    minWidth: '45.5%',
                    maxWidth: 'lg',
                    backgroundColor: '#e3f2fd'
                }}
                    key={index}>
                    <Typography sx={{textAlign: 'center'}} variant='h4'>{item.name + ", " + item.sys.country}</Typography>
                    <Box sx={{
                        display: 'flex'
                    }}>
                        <Typography variant="body1">Температура: {Math.round(item.main.temp - 273) + '°C'} </Typography>
                        <img className="img-24px" style={{ marginLeft: '5px' }} src={addIcon(item)} alt="..." />
                    </Box>
                    <Typography variant="body1">Погода: {item.weather[0].description}</Typography>
                    <Typography variant="body1">Видимость: {item.visibility / 1000}</Typography>
                    <DeleteCity
                        savedCity={savedCity}
                        index={item.id}
                    />
                </Paper>
            )}
        </Box>
    )
}