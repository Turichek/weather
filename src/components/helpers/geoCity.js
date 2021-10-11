import React from "react";
import addIcon from "./addIcon";
import StrDate from "./returnStrDate";
import { Box, Typography } from "@mui/material"
import UpdateCity from "./updateCity";

export default function GeoCity({ myCity }) {
    return (
        <Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
            }}>
                <Typography sx={{
                    width: '100%',
                    textAlign: 'center',
                    mb: 2
                }} variant='h4'>
                    {myCity.name},
                    {myCity.sys.country}
                    <UpdateCity />
                </Typography>
                
            </Box>
            <Box sx={{
                width: '100%',
                textAlign: 'center'
            }}>
                <Typography variant="caption">{StrDate(null, 3) + ", " + StrDate(null, 4)}</Typography>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    m: 3
                }}>
                    <Typography variant="h2">{Math.round(myCity.main.temp - 273) + "°C "}</Typography>
                    <img className="img-72px" style={{ marginLeft: '5px' }} src={addIcon(myCity)} alt="..." />
                </Box>
                <Typography sx={{ m: 3 }} variant="body1">
                    Ощущается как {Math.round(myCity.main.feels_like - 273) + "°C, " + myCity.weather[0].description}
                </Typography>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    backgroundColor: '#90caf9',
                    py: 2
                }}>
                    <Box>
                        <Typography variant="body1">Влажность:</Typography>
                        <Typography variant="h6">{myCity.main.humidity + '%'}</Typography>
                    </Box>
                    <Box>
                        <Typography variant="body1">Давление:</Typography>
                        <Typography variant="h6">{myCity.main.pressure + ' гПа'}</Typography>
                    </Box>
                    <Box>
                        <Typography variant="body1">Ветер:</Typography>
                        <Typography variant="h6">{myCity.wind.speed + ' м/с'}</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>

    )
}