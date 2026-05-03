const apiKey = "344f758b6efd4b4032ccb180f37e182d";
const consoleBox = document.getElementById("consoleBox");
const weatherDiv = document.getElementById("weather");
const historyDiv = document.getElementById("history");

log("Sync Start");

window.onload = () => {
    loadHistory();
    log("Sync End");
};

function log(msg) {
    consoleBox.textContent += msg + "\n";
}

async function searchWeather() {

    const city = document.getElementById("cityInput").value;

    if (city === "") {
        alert("Enter city name");
        return;
    }

    log("[ASYNC] Start fetching");

    setTimeout(() => {
        log("setTimeout (Macrotask)");
    }, 0);

    fetchWeather(city);

}

async function fetchWeather(city) {

    try {

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        );

        if (!response.ok) {
            throw new Error("City not found");
        }

        Promise.resolve().then(() => {
            log("Promise.then (Microtask)");
        });

        const data = await response.json();

        displayWeather(data);

        saveHistory(city);

        log("[ASYNC] Data received");

    } catch (error) {

        weatherDiv.innerHTML = `<p style="color:red;">${error.message}</p>`;

    }

}

function displayWeather(data) {

    weatherDiv.innerHTML = `
<table width="100%">
<tr><td>City</td><td>${data.name}, ${data.sys.country}</td></tr>
<tr><td>Temp</td><td>${data.main.temp} °C</td></tr>
<tr><td>Weather</td><td>${data.weather[0].main}</td></tr>
<tr><td>Humidity</td><td>${data.main.humidity}%</td></tr>
<tr><td>Wind</td><td>${data.wind.speed} m/s</td></tr>
</table>
`;

}

function saveHistory(city) {

    let history = JSON.parse(localStorage.getItem("cities")) || [];

    if (!history.includes(city)) {
        history.push(city);
        localStorage.setItem("cities", JSON.stringify(history));
    }

    loadHistory();

}

function loadHistory() {

    historyDiv.innerHTML = "";

    let history = JSON.parse(localStorage.getItem("cities")) || [];

    history.forEach(city => {

        let btn = document.createElement("span");
        btn.innerText = city;

        btn.onclick = () => {
            document.getElementById("cityInput").value = city;
            searchWeather();
        };

        historyDiv.appendChild(btn);

    });

}