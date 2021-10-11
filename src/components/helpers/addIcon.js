export default function addIcon(cityWeather) {
    if (cityWeather !== "") {
        switch (cityWeather.weather[0].description) {
            case 'ясно':
                return "https://img.icons8.com/dusk/2x/sun--v1.png";

            case 'небольшая облачность':
                return "https://i.ibb.co/PZkZSJ3/smCloud.png";

            case 'переменная облачность':
            case 'облачно с прояснениями':
                return "https://img.icons8.com/dusk/2x/partly-cloudy-day--v1.png";

            case 'пасмурно':
                return "https://img.icons8.com/dusk/2x/cloud.png";

            case 'дождь':
            case 'небольшой дождь':
                return "https://img.icons8.com/dusk/2x/rain--v1.png";

            case 'сильный дождь':
                return "https://img.icons8.com/dusk/2x/storm--v1.png";

            case 'мгла':
            case 'туман':
                return "https://img.icons8.com/dusk/2x/foggy-night-1.png";

            default:
                return "";
        }
    }
}
