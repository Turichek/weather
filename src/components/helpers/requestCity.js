export default async function getCity(str, obj, state) {
    const key = "a08bc186abca0975ed29460a754a1252";
    console.log(str+key,"fetch")
    return await fetch(str+key)
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

                default:
                    break;
            }
        });

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