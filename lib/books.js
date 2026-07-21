import booksData from "@/data/books.json";
const books = booksData;
export function getBooks() {
    return books;
}
export function getBookById(id) {
    return books.find((book) => book.id === id);
}
export function getFeaturedBooks(limit = 4) {
    return books.slice(0, limit);
}
export function getBooksByCategory(category) {
    return books.filter((book) => book.category === category);
}
