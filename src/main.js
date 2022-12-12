const sectionElements = document.querySelectorAll("section");
const dateErrorElement = document.getElementById("dateError");
const pagesErrorElement = document.getElementById("pagesError");
const formElements = document.querySelectorAll(".form-class [name]");
const showBooksElement = document.getElementById("showbooks");
const filterByPagesElement = document.getElementById("booksbypages");
const pagesRangeElement = document.getElementById("pages_range");
const pagesRangeErrorElement = document.getElementById("pages_range_error");
const bookByAuthorElement = document.getElementById("author_element");
const currentDate = getCurrentDate();
const TIMEOUT = 5000;
const MINPAGES = 1;
class Book {
    constructor() {
        this.books = [];
    }
    addBooks(book) {
        this.books.push(book);
    }
    showBooks() {
        return this.books;
    }
    getBooksByPages(pagesFrom, pagesTo) {
        return this.books.filter(e => e.numberofpages >= pagesFrom && e.numberofpages <= pagesTo);
    }
    getAuthorBooks(author) {
        return this.books.filter(e => author == e.author);
    }
}
const booksList = new Book();

function onSubmit(event) {
    event.preventDefault();
    const book = Array.from(formElements).reduce((res, cur) => {
        res[cur.name] = cur.value;
        return res;
    }, {});
    booksList.addBooks(book);
}
function onChange(event) {
    if(event.target.name == "issuedate") {
        validateDate(event.target);
    } else if(event.target.name == "numberofpages") {
        validatePages(event.target);
    }
}
function validateDate(date) {
    const dateValue = +date.value.slice(0, 4);
    if(dateValue > currentDate) {
        const message = `An issue date can't be greater, than ${currentDate}`;
        showErrorMessage(date, message, dateErrorElement);
    }
}
function validatePages(pages) {
    const pagesValue = +pages.value;
    if(pagesValue < MINPAGES) {
        const message = `Number of pages can't be less, than ${MINPAGES}`;
        showErrorMessage(pages, message, pagesErrorElement);
    }
}
function showErrorMessage(element, message, errorElement) {
    errorElement.innerHTML = message;
    setTimeout(() => {
        errorElement.innerHTML = '';
        element.value = '';
    }, TIMEOUT)
}
function show(index) {
    sectionElements.forEach(element => {
        element.hidden = true;
    })
    sectionElements[index].hidden = false;
    if(index == 1) {
        const allBooks = booksList.showBooks();
        showBooksElement.innerHTML = showListOfBooks(allBooks);
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

function getCurrentDate() {
    return new Date().getFullYear();
}

let pagesFrom = 0;
let pagesTo = 0;
function onSubmitByPages(event) {
    event.preventDefault();
    const bookByPages = booksList.getBooksByPages(pagesFrom, pagesTo);
    pagesRangeElement.innerHTML = showListOfBooks(bookByPages);
}
function pagesFromRange(event) {
    const value = +event.target.value;
    if(value >= pagesTo) {
        const message = `Pages From has to be less, than Pages To`;
        showErrorMessage(event.target, message, pagesRangeErrorElement);
    } else {
        pagesFrom = value;
    }
}
function pagesToRange(event) {
    const value = +event.target.value;
    if(value <= pagesFrom) {
        const message = `Pages To has to be greater, than Pages From`;
        showErrorMessage(event.target, message, pagesRangeErrorElement);
    } else {
        pagesTo = value;
    }
}
let author;
function onSubmitByAuthor(event) {
    event.preventDefault();
    const authorBooks = booksList.getAuthorBooks(author);
    bookByAuthorElement.innerHTML = showListOfBooks(authorBooks);
}
function booksByAuthor(event) {
    author = event.target.value;
}