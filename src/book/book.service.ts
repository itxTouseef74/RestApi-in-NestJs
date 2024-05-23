import { Book } from "./data/data.dto";
import {v4 as uuidv4} from 'uuid';
export class BookService {

    private books: Book[] = [];

    
    addBook(book: Book): string {
        book.id = uuidv4();
        this.books.push(book);
        return "Book added successfully";
    }

    
    getBooks(): Book[] {
        return this.books;
    }

    
    updateBookService(book: Book): string {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].id === book.id) {
                this.books[i] = book;
                return "Book updated successfully";
            }
        }
        return "Book not found";
    }

    
    deleteBookService(bookId: number): string {
        const initialLength = this.books.length;
        this.books = this.books.filter(book => book.id !== bookId);
        return this.books.length < initialLength ? "Book deleted successfully" : "Book not found";
    }
}
