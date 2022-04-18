import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";


function _drawWeather() {
    let weather = ProxyState.weather
    document.getElementById(weather).innerHTML = weather
}

export class WeatherController {
    constructor() {
        ProxyState.on("weather", _drawWeather)
        weatherService.getWeather()
        _drawWeather()
    }
}