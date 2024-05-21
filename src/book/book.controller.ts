import { Controller, Get, Post, Body, Put, Delete, Param } from "@nestjs/common";
import { BookService } from "./book.service";
import { Book } from "./data/data.dto";

@Controller("book")
export class BookController {

    constructor(private bookService: BookService){}

    @Post("/addbook")
    addBook(@Body() book: Book): string {
        return this.bookService.addBook(book);
    }

    @Get("/getbooks")
    getBooks(): Book[] {
        return this.bookService.getBooks();
    }

    @Put("/updatebook")
    updateBook(@Body() book: Book): string {
        return this.bookService.updateBookService(book);
    }

    @Delete("/deletebook/:id")
    deleteBook(@Param('id') bookId: string): string {
        return this.bookService.deleteBookService(bookId);
    }
}
