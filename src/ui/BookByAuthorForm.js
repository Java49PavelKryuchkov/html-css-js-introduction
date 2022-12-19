export class BookByAuthor {
    #formElement;
    #authotInputElement;
    #booksElement;
    #authorValue;
    constructor(params) {
        this.#formElement = document.getElementById(params.idForm);
        this.#authotInputElement = document.getElementById(params.idAuthorInput);
        this.#booksElement = document.getElementById(params.idBooksElement);
        this.onChangeAuthor();
    }
    addSubmitHandler(processAuthorFunct) {
        this.#formElement.addEventListener("submit", (event) => {
        event.preventDefault();
        const author = this.#authorValue;
        processAuthorFunct(author);
        })
    }
    onChangeAuthor() {
        this.#authotInputElement.addEventListener("change", (event) => {
            this.#authorValue = event.target.value;
        }
        )
    }
}
