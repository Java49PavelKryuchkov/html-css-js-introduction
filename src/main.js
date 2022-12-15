import { Book } from "./ui/bookForm.js";
import { BookForm } from "./data/bookList.js";
import { BookByPages } from "./ui/BookByPagesForm.js";
import { BookList } from "./ui/BooksList.js";
const sectionElements = document.querySelectorAll("section");
const showBooksElement = document.getElementById("showbooks");
const pagesRangeElement = document.getElementById("books_pages");
const pagesRangeErrorElement = document.getElementById("pages_range_error");
const bookByAuthorElement = document.getElementById("author_element");
const MINPAGES = 1;
let PAGESFROM = 0;
let PAGESTO = 0;


const booksList = new Book();
const listOfBooks = new BookList("showbooks");
const listOfBooksByPages = new BookList("books_pages");

const bookForm = new BookForm({idForm: "book_form", idDateInput: "date_input", idDateError: "date_error",
idPagesInput: "pages_input", idPagesError: "pages_error"})
bookForm.addSubmitHandler((book) => booksList.addBooks(book));

const bookPagesForm = new BookByPages({idForm: "books_pages_form", idPagesFrom: "pages_f",
idPagesTo: "pages_t", idPagesError: "books_pages_error"});
bookPagesForm.addSubmitHandler((pagesObj) => {
    const booksByPages = booksList.getBooksByPages(pagesObj.pagesF, pagesObj.pagesT);
    console.log(booksByPages);
    listOfBooksByPages.showBooks(booksByPages);
})


function show(index) {
    sectionElements.forEach(element => {
        element.hidden = true;
    })
    sectionElements[index].hidden = false;
    if(index == 1) {
        const allBooks = booksList.showBooks();
        listOfBooks.showBooks(allBooks);
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


window.show = show;
window.onSubmitByAuthor = onSubmitByAuthor;
window.booksByAuthor = booksByAuthor;