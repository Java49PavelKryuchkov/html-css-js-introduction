export class BookList {
    #listElement;
    constructor(idList) {
        this.#listElement = document.getElementById(idList);
    }
    showBooks(books) {
        this.#listElement.innerHTML = showListOfBooks(books);
    }
}
function showListOfBooks(books) {
    return books.map(e => `<ui class="item-element">
    <p>Name Of the Book: ${e.bookname}</p>
    <p>Author's Name: ${e.author}</p>
    <p>Year: ${e.issuedate}</p>
    <p>Number of Pages: ${e.numberofpages}</p>
    <p>Genre: ${e.genre}</p>
    </ui>`).join('');
}