import { ProxyState } from "../AppState.js";
import { quotesService } from "../Services/QuotesService.js";
import { Pop } from "../Utils/Pop.js";


function _drawQuote() {
    let quote = ProxyState.quote.content
    let author = ProxyState.quote.author
    document.getElementById("quote").innerHTML = `
    <div class="p-3 card container-fluid text-center text-info bg-dark bg-gradient"
    <h1>${quote}</h1>
        <h5 class="on-hover">${author}</h5>
    `
}

export class QuotesController {
    constructor(){
        ProxyState.on("quote", _drawQuote)
        this.getQuote()

    }

    async getQuote(){
        try {
            await quotesService.getQuote()
        } catch (error) {
            Pop.toast(error.message, "error")
            console.log(error);
        }
    }
}