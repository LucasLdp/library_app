import Book from "#models/book";
import { IBookService } from "../interfaces/book/IBookService.js";
import { ICreateBookDTO } from "../interfaces/book/ICreateBookService.js";
import { IUpdateBookDTO } from "../interfaces/book/IUpdateBookService.js";

export class BookService implements IBookService {
	async getAll(): Promise<Book[]> {
		const books = await Book.query().preload("bookCopies");
		return books;
	}

	async getById(id: string): Promise<Book> {
		const book = await Book.findOrFail(id);
		await book.load("bookCopies");
		return book;
	}

	async create(data: ICreateBookDTO): Promise<Book> {
		return await Book.create(data);
	}

	async update(id: string, data: IUpdateBookDTO): Promise<Book> {
		const book = await Book.findOrFail(id);
		book.merge(data);
		await book.save();
		return book;
	}

	async delete(id: string): Promise<void> {
		const book = await Book.findOrFail(id);
		return book.delete();
	}
}
