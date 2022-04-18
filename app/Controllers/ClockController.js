


function _drawClock() {
    let today = new Date()
    let date = today.getFullYear()+' '+(today.getMonth()+1 + "/")+today.getDate()
    let time = today.getHours()+":"+ today.getMinutes()+":"+ today.getSeconds()
    let dateTime = date+' '+time
    
    document.getElementById('clock').innerHTML = `<h1 class="text-primary bg-black card bg-gradient p-2">${dateTime}</h1>`
}


export class ClockController {
    constructor() {
        setInterval(_drawClock, 100)
        _drawClock()
       
    }
}