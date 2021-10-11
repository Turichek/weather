import StrDate from "./returnStrDate";

export default async function getCity(str, obj, state) {
    const key = "3ebf78fdd85485c7457dc724adc7d13b";
    console.log(str + key, "fetch")
    return await fetch(str + key)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data, "fetch");
            switch (state) {
                case "first":
                    obj.func(data);
                    break;

                case "second":
                    if (!checkCity(data.name)) {
                        obj.func([...obj.arr, data]);
                    }
                    else alert("Этот город уже есть в списке")
                    break;

                case "third":
                    editHourly(data.hourly)
                    obj.func(data);
                    break;

                default:
                    break;
            }
        });

    function editHourly(hourly) {
        hourly.map((item) => {
            item.dt = StrDate(item.dt, 5);
            item.temp = Math.round(item.temp - 273);
            item.feels_like = Math.round(item.feels_like - 273);
        });
        console.log(hourly, "edit");
    }

    function checkCity(city) {
        for (let i = 0; i < obj.arr.length; i++) {
            if (obj.arr[i].name === city) {
                console.log("true");
                return true;
            }
        }

        return false;
    }
}