


export class Weather{
    constructor(data){
        this.temp = data.main.temp
        this.c = Math.floor(data.main.temp) - 273
        this.f = Math.floor(this.c * 9/5) + 32
        this.clouds = data.clouds.all 

    }
    get Template() {
        return `
        <div class=card>
        <h1>${this.temp}</h1>
        </div>
        
        `
    }
}