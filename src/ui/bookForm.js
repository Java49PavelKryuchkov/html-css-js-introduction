export class Book {
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