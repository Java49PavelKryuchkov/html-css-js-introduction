import { showErrorMessage } from "../ui/errorMessage.js";
export class BookForm {
    #formElement;
    #inputElements;
    #dateInputElement;
    #dateErrorElement;
    #pagesInputElement;
    #pagesErrorElement;
    #pagesRangeElement;
    #currentDate;
    #minPages;
    constructor(params) {
        this.#formElement = document.getElementById(params.idForm);
        this.#inputElements = document.querySelectorAll(`#${params.idForm} [name]`);
        this.#dateInputElement = document.getElementById(params.idDateInput);
        this.#dateErrorElement = document.getElementById(params.idDateError);
        this.#pagesInputElement = document.getElementById(params.idPagesInput);
        this.#pagesErrorElement = document.getElementById(params.idPagesError);
        this.#pagesRangeElement = document.getElementById(params.idPagesRange);
        this.#minPages = params.minPages;
        this.#currentDate = getCurrentDate();
        this.onChange();
    }
    addSubmitHandler(processBookFunct) {
        this.#formElement.addEventListener("submit", (event) => {
        event.preventDefault();
        const book = Array.from(this.#inputElements).reduce((res, cur) => {
        res[cur.name] = cur.value;
        return res;
    }, {});
        processBookFunct(book);
        })
    }
    onChange() {
        this.#dateInputElement.addEventListener("change", (event) => {
        this.validateDate(event.target);
        this.#pagesInputElement.addEventListener("change", (event) => {
        this.validatePages(event.target);
        })
        })
    }
    validateDate(element) {
        const dateValue = +element.value.slice(0, 4);
        if(dateValue > this.#currentDate) {
            const message = `An issue date can't be greater, than ${this.#currentDate}`;
            showErrorMessage(element, message, this.#dateErrorElement);
        }
    }
    validatePages(element) {
        const pagesValue = +element.value;
        if(pagesValue < this.#minPages) {
            const message = `Number of pages can't be less, than ${this.#minPages}`;
            showErrorMessage(element, message, this.#pagesErrorElement);
        }
    }
}

function getCurrentDate() {
    return new Date().getFullYear();
}