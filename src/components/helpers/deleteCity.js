import React from "react";
import {Button} from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"

export default function DeleteCity({ index, savedCity }) {
    
    const removeItem = () => {
        const afterDelCity = savedCity.arr.filter(city => city.id !== index);
        savedCity.func(afterDelCity)
    }

    return <Button sx = {{
        width: 1,
        mt:2
    }} variant="contained" onClick={removeItem} startIcon={<DeleteIcon />}>Удалить</Button>;
}