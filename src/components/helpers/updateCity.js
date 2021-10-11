import React from "react";
import { Button } from "@mui/material"
import UpdateIcon from "@mui/icons-material/Update"
import { removeFromLocalStorage } from "./workWithLocalStorage";

export default function UpdateCity() {
    const updateItem = () => {
        removeFromLocalStorage('week');
        removeFromLocalStorage('chart');
        window.location.reload();
    }
    return <Button sx={{
        ml: 2,
        borderColor: '#000000',
        color: '#000000',
    }} variant="outlined" onClick={updateItem} startIcon={<UpdateIcon />}>Обновить</Button>;
}