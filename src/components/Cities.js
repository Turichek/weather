import React, { useEffect, useState } from "react";
import AddCity from "./helpers/addCity";
import ViewCity from "./helpers/viewCities";
import { saveToLocalStorage, getFromLocalStorage } from "./helpers/workWithLocalStorage";
import { Box, Container } from "@mui/material";

export default function Cities() {
    const [cities, setCities] = useState(
        getFromLocalStorage('cities') || []
    );

    useEffect(() => {
        saveToLocalStorage('cities', cities);
    }, [cities]);

    const values = {
        arrCity: {
            arr: cities,
            func: setCities
        },
    }

    return (
        <Container maxWidth="lg">
            <AddCity
                savedCity={values.arrCity} />
            <ViewCity
                savedCity={values.arrCity} />
        </Container>
    )
}