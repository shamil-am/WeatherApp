document.querySelector("#btnSearch").addEventListener("click",Weather);

function Weather() {
    let city = document.querySelector("#inptCity").value;
    let api = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e0cfb54a0ca365aab402c260db2feed8`;
    let monitor = document.querySelector("#monitor");
    document.querySelector("#monitor").innerHTML = " ";
    fetch(api).then((response) => {
        return response.json();
    }).then((city) => {
        let ul =  document.createElement("ul");

        let liName =  document.createElement("li");
        liName.innerHTML = `Şəhər: ${city.name}`;
        ul.appendChild(liName);

        let liTemp =  document.createElement("li");
        liTemp.innerHTML = `Temperatur: ${(city.main.temp - 273).toFixed(2)}`;
        ul.appendChild(liTemp);

        let liFeel =  document.createElement("li");
        liFeel.innerHTML = `Hissedilən temperatur: ${(city.main.feels_like - 273).toFixed(2)}`;
        ul.appendChild(liFeel);

        let liHumid =  document.createElement("li");
        liHumid.innerHTML = `Rütubət: ${city.main.humidity} %`;
        ul.appendChild(liHumid);

        ul.className = "list-unstyled"
        monitor.append(ul);
        document.querySelector("#inptCity").value = " ";

    }).catch(() => {
        alert("Yalnis melumat")
        document.querySelector("#inptCity").value = " ";
      });

}