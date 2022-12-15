import { showErrorMessage } from "./errorMessage.js";
export class BookByPages {
    #formElement;
    #pagesFromElement
    #pagesToElement;
    #pagesFrom;
    #pagesTo;
    #pagesErrorElement;
    constructor(params) {
        this.#formElement = document.getElementById(params.idForm);
        this.#pagesFromElement = document.getElementById(params.idPagesFrom);
        this.#pagesToElement = document.getElementById(params.idPagesTo);
        this.#pagesErrorElement = document.getElementById(params.idPagesError);
        this.onChangePagesFrom();
        this.onChangePagesTo();
    }
    addSubmitHandler(processPagesFunct) {
        this.#formElement.addEventListener("submit", (event) => {
        event.preventDefault();
        const pagesObj = {pagesF: this.#pagesFrom, pagesT: this.#pagesTo};
        console.log(pagesObj);
        processPagesFunct(pagesObj);
        })
    }
    onChangePagesFrom() {
        this.#pagesFromElement.addEventListener("change", (event) => {
            const value = +event.target.value;
            if(this.#pagesTo && value >= this.#pagesTo) {
                const message = `Pages From has to be less, than Pages To`;
                showErrorMessage(event.target, message, this.#pagesErrorElement);
            } else {
            this.#pagesFrom = value;
            }
        })
    }
    onChangePagesTo() {
        this.#pagesToElement.addEventListener("change", (event) => {
            const value = +event.target.value;
            if(this.#pagesFrom && value <= this.#pagesFrom) {
                const message = `Pages To has to be greater, than Pages From`;
                showErrorMessage(event.target, message, this.#pagesErrorElement);
            } else {
            this.#pagesTo = value;
            }
        })
    }
}