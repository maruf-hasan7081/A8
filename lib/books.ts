import booksData from "@/data/books.json";
import type { Book, BookCategory } from "@/types/book";

const books = booksData as Book[];

export function getBooks(): Book[] {
  return books;
}

export function getBookById(id: string): Book | undefined {
  return books.find((book) => book.id === id);
}

export function getFeaturedBooks(limit = 4): Book[] {
  return books.slice(0, limit);
}

export function getBooksByCategory(category: BookCategory): Book[] {
  return books.filter((book) => book.category === category);
}
