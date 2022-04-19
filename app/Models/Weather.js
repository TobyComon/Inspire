import { ProxyState } from "../AppState.js"



export class Weather{
    constructor(data){
        this.temp = data.main.temp
        this.isCelsius = false
        this.c = Math.floor(data.main.temp) - 273
        this.f = Math.floor(this.c * 9/5) + 32
        this.clouds = data.clouds.all 
        // this.shownTemp = 
        
        

    }
    
    get Template() {
        return `
        <div class="container">
        <h1 class="selectable" onclick="app.weatherController.flip()">${this.f}</h1>
        </div>
        
        `
    }
}