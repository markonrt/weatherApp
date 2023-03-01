const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let dugme = document.querySelector('#modal-button');
let city = document.querySelector('#modal-input').value;
let modal = document.querySelector('#modal');
let container = document.querySelector('.container');
let ikona = document.querySelector('.card-top #icon');
let deskripcija_top = document.querySelector('#description')
let temperatura_vrh = document.querySelector('#temperature');
dugme.addEventListener("click", ()=>{
    city = document.querySelector('#modal-input').value;
    container.style.display = "flex";
    modal.style.display = "none";
    document.querySelector('#grad').innerText = city;
    const vreme = new Weather(city);
    vreme.getApi(city)
    .then(data => {
        console.log(data)
        //top part
        ikona.setAttribute(`src`, `https://openweathermap.org/img/wn/${data[0].weather[0].icon}.png`);
        deskripcija_top.innerText = data[0].weather[0].description
        temperatura_vrh.innerText = `${Math.floor(data[0].main.temp)} °C`
        //day 1
        let first = new Date(`${data[1].dt_txt}`)
        document.querySelector('.day-1 .day').innerText = weekday[first.getDay()];
        document.querySelector('.day-1 .temp-min').innerText = `Min: ${Math.floor(data[1].main.temp_min)} °C`
        document.querySelector('.day-1 .temp-max').innerText = `Max: ${Math.floor(data[1].main.temp_max)} °C`
        document.querySelector('.day-1 img').setAttribute(`src`, `https://openweathermap.org/img/wn/${data[1].weather[0].icon}.png`)
        //day 2
        let second = new Date(`${data[2].dt_txt}`)
        document.querySelector('.day-2 .day').innerText = weekday[second.getDay()];
        document.querySelector('.day-2 .temp-min').innerText = `Min: ${Math.floor(data[2].main.temp_min)} °C`
        document.querySelector('.day-2 .temp-max').innerText = `Max: ${Math.floor(data[2].main.temp_max)} °C`
        document.querySelector('.day-2 img').setAttribute(`src`, `https://openweathermap.org/img/wn/${data[2].weather[0].icon}.png`)
        //day 3
        let third = new Date(`${data[3].dt_txt}`)
        document.querySelector('.day-3 .day').innerText = weekday[third.getDay()];
        document.querySelector('.day-3 .temp-min').innerText = `Min: ${Math.floor(data[3].main.temp_min)} °C`
        document.querySelector('.day-3 .temp-max').innerText = `Max: ${Math.floor(data[3].main.temp_max)} °C`
        document.querySelector('.day-3 img').setAttribute(`src`, `https://openweathermap.org/img/wn/${data[3].weather[0].icon}.png`)
        //day 4
        let forth = new Date(`${data[4].dt_txt}`)
        document.querySelector('.day-4 .day').innerText = weekday[forth.getDay()];
        document.querySelector('.day-4 .temp-min').innerText = `Min: ${Math.floor(data[4].main.temp_min)} °C`
        document.querySelector('.day-4 .temp-max').innerText = `Max: ${Math.floor(data[4].main.temp_max)} °C`
        document.querySelector('.day-4 img').setAttribute(`src`, `https://openweathermap.org/img/wn/${data[4].weather[0].icon}.png`)
        
        //bottom part
        document.querySelector('#humidity').innerText = `Humidity: ${data[0].main.humidity}%`;
        document.querySelector('#wind-speed').innerText = `Wind speed: ${Math.floor(data[0].wind.speed)} km/h`;
        //rotate
        document.querySelector('#wind-direction .finger img').style.transform = `rotate(${data[0].wind.deg}deg)`;
        //console.log(data[0].wind.deg)
        
    })
    .catch(e=> console.log(e));
});

