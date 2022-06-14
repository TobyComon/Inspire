import { ProxyState } from "../AppState.js"



export class Weather {
    constructor(data) {
        this.temp = data.main.temp
        this.isCelsius = false
        this.c = Math.floor(data.main.temp) - 273
        this.f = Math.floor(this.c * 9 / 5) + 32
        this.icon = data.weather[0].main == "Clouds" ? "mdi mdi-cloud" : "Sunny" ? "mdi mdi-sun" : ""
        this.city = data.name




    }

    get Template() {
        return /*HTML*/`
        <div class="ms-5 container-fluid">
        <div class="row text-end ms-5">
        <div class="ms-5 d-flex col-md-6 justify-content-end">
        <h2 class="me-2 text-light ${this.icon}"></h2>
        
            <h1 class="selectable text-light" onclick="app.weatherController.flip()">${this.isCelsius ? this.c + " ºC" :
                this.f + " ºF"}</h1>
          </div>
          <div class="ms-5 d-flex col-md-6 justify-content-end">
            <h5 class="text-light"><em> ${this.city} </em></h5>
          </div>
        </div>
      </div>
        
        `
    }
}