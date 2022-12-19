import { Book } from "./ui/bookForm.js";
import { BookForm } from "./data/bookList.js";
import { BookByPages } from "./ui/BookByPagesForm.js";
import { BookList } from "./ui/BooksList.js";
import { BookByAuthor } from "./ui/BookByAuthorForm.js";
const sectionElements = document.querySelectorAll("section");
const buttonsElements = document.querySelectorAll(".main-buttons *")
const ACTIVE = "active";

const booksList = new Book();
const listOfBooks = new BookList("showbooks");
const listOfBooksByPages = new BookList("books_pages");
const listOfBooksByAuthor = new BookList("books_author");

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

const bookAuthorForm = new BookByAuthor({idForm: "author_form", idAuthorInput: "author_input",
idBooksElement: "books_author"});
bookAuthorForm.addSubmitHandler((authorObj) => {
    const getBooksByAuthor = booksList.getBooksByAuthor(authorObj);
    listOfBooksByAuthor.showBooks(getBooksByAuthor);
})
function show(index) {
    sectionElements.forEach(element => {
        element.hidden = true;
    })
    buttonsElements.forEach(element => {
        element.classList.remove(ACTIVE);
    })
    sectionElements[index].hidden = false;
    buttonsElements[index].classList.add(ACTIVE);
    if(index == 1) {
        const allBooks = booksList.showBooks();
        listOfBooks.showBooks(allBooks);
    }
}


window.show = show;