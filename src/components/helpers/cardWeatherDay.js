import React from "react";
import { Box, Divider, Paper, Typography } from "@mui/material";
import addIcon from "./addIcon";
import StrDate from "./returnStrDate";

export default function CardWeatherDay({item,index}){
    return (
        <Paper elevation={3} sx={{
            p: 2,
            m: 0.5,
            minWidth: '21.4%',
            display: 'flex',
            flexDirection: 'column'
        }} key={index}>
            <Typography sx={{ textAlign: 'center' }} variant="h5">{StrDate(item.dt, 1) + ", " + StrDate(item.dt, 3)}</Typography>
            <Divider sx={{ my: 2 }} />
            <Box sx={{
                display: 'flex',
                //flexWrap:'wrap'
            }}>
                <img className="img-144px" src={addIcon(item)} alt="..." />
                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    px: 2
                }}>
                    <Typography sx={{ textAlign: 'center' }} variant="subtitle1">Макс.:</Typography>
                    <Typography sx={{ textAlign: 'center' }} variant="h6">{Math.round(item.temp.max - 273) + '°C'}</Typography>
                    <Divider sx={{ my: 1 }} />
                    <Typography sx={{ textAlign: 'center' }} variant="subtitle1">Мин.:</Typography>
                    <Typography sx={{ textAlign: 'center' }} variant="h6">{Math.round(item.temp.min - 273) + '°C'}</Typography>
                </Box>
            </Box>
        </Paper>
    )
}