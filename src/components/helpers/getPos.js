import getCity from "./requestCity";

export default function GetPos(city) {
    function success(position) {
        const pos = position.coords;
        const req_str = "https://api.openweathermap.org/data/2.5/weather?lat=" +
            pos.latitude +
            "&lon=" +
            pos.longitude +
            "&lang=ru&appid="

        getCity(req_str, city, "first");
    }

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success);
    }
}