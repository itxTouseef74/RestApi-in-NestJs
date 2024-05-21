import { Book } from "./data/data.dto";
import {v4 as uuidv4} from 'uuid';
export class BookService {

    private books: Book[] = [];

    // Method to add a book
    addBook(book: Book): string {
        book.id = uuidv4();
        this.books.push(book);
        return "Book added successfully";
    }

    // Method to get all books
    getBooks(): Book[] {
        return this.books;
    }

    // Method to update a book
    updateBookService(book: Book): string {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].id === book.id) {
                this.books[i] = book;
                return "Book updated successfully";
            }
        }
        return "Book not found";
    }

    // Method to delete a book
    deleteBookService(bookId: string): string {
        const initialLength = this.books.length;
        this.books = this.books.filter(book => book.id !== bookId);
        return this.books.length < initialLength ? "Book deleted successfully" : "Book not found";
    }
}
