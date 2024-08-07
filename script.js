// https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=0dfafb991b012079d5411a660a22c7c3

let weatherButton = document.getElementById('weather-btn');
weatherButton.addEventListener('click',getWeather);

async function getWeather() {

    const cityInput = document.getElementById('inputCity');
    const cityName = cityInput.value;
    console.log(cityName);

    const apiKey = '0dfafb991b012079d5411a660a22c7c3';

    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

    try {
        let response = await fetch(apiURL);
        // console.log(response);

        if(response.ok) {
            let weatherData = await response.json();
            // console.log(weatherData);
            diplayWeather(weatherData);
        } else {
            alert("Error fetching weather, request failed");
            throw new Error("Request has failed");
        }
    }
    catch(e){
        console.log("Couldn't fetch data: ",e);
    }
}

function diplayWeather(weatherData) {

    let city = document.getElementById('name');
    city.innerHTML = weatherData.name + ',In';

    let temp = document.getElementById('temperature');
    temp.innerHTML = 'Temprature: ' + Math.round(weatherData.main.temp-273) + '°C';

    let feelslike = document.getElementById('feels-like');
    feelslike.innerHTML = 'Feels_like: ' + Math.round(weatherData.main.feels_like-273) + '°C';

    let humidity = document.getElementById('humidity');
    humidity.innerHTML = 'Humidity: ' + weatherData.main.humidity + '%';
}