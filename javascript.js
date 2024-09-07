const apiKey = "3819ae50e0058a5e6d208c276e7da876";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");

async function checkweaher(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
    if (data.weather[0].main == "Clouds") {
        weathericon.src = "img/Clouds.png";
    }
    else if (data.weather[0].main == "Clear") {
        weathericon.src = "img/clear.png";
    }
    else if (data.weather[0].main == "Rain") {
        weathericon.src = "img/rain.png";
    }
    else if (data.weather[0].main == "dizzle") {
        weathericon.src = "img/dizzle.png";
    }
    else if (data.weather[0].main == "Mist") {
        weathericon.src = "img/mist.png";
    }
    else if (data.weather[0].main == "Snow") {
        weathericon.src = "img/snow.png";
    }
    document.querySelector(".weather").style.display = "block";
    console.log(data);


}
searchBtn.addEventListener("click", () => {

    checkweaher(searchBox.value);

})