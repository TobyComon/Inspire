import { ProxyState } from "../AppState.js";
import { imagesService } from "../Services/ImagesService.js";



function _drawImg() {
    let img = ProxyState.img

    document.body.style.backgroundImage = `url(${img.largeImgUrl})`
}


export class ImagesController {
    constructor() {
        imagesService.getImg()
        ProxyState.on('img', _drawImg)
        
    }
}