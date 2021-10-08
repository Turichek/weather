export default function addIcon(cityWeather) {
    if (cityWeather !== "") {
        switch (cityWeather.weather[0].description) {
            case 'ясно':
                return "https://img.icons8.com/dusk/2x/sun--v1.png";

            case 'переменная облачность':
            case 'облачно с прояснениями':
            case 'небольшая облачность':
                return "https://img.icons8.com/dusk/2x/partly-cloudy-day--v1.png";

            case 'дождь':
            case 'небольшой дождь':
                return "https://img.icons8.com/dusk/2x/rain--v1.png";

            case 'пасмурно':
                return "https://img.icons8.com/dusk/2x/cloud.png";
            default:
                return "";
        }
    }
}
