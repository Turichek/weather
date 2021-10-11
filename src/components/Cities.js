import React, { useEffect, useState } from "react";
import AddCity from "./helpers/addCity";
import ViewCity from "./helpers/viewCities";
import MyCity from "./helpers/myCity";
import { saveToLocalStorage, getFromLocalStorage } from "./helpers/workWithLocalStorage";
import { Container } from "@mui/material";

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
            <MyCity/>
            <AddCity
                savedCity={values.arrCity} />
            <ViewCity
                savedCity={values.arrCity} />
        </Container>
    )
}