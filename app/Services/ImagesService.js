import { ProxyState } from "../AppState.js";
import { sandboxApi } from "./AxiosService.js";



class ImagesService {
    async getImg() {
        const res = await sandboxApi.get('images')

        ProxyState.img = res.data
        
    }
}




export const imagesService = new ImagesService()


