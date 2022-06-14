import { ProxyState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";
import { weatherService } from "../Services/WeatherService.js";


function _drawWeather() {
    let weather = ProxyState.weather
    document.getElementById("weather").innerHTML = weather.Template
}

export class WeatherController {
    constructor() {
        ProxyState.on("weather", _drawWeather)
        this.getWeather()

    }

    async getWeather() {
        try {
            await weatherService.getWeather()
        } catch (error) {
            console.error(error.message)
        }
    }

    flip() {
        weatherService.flip()
        _drawWeather()
        ProxyState.weather = ProxyState.weather
    }

}