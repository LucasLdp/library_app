import BookCopy from "#models/book_copy";
import { IBookCopyService } from "../interfaces/book-copy/IBookCopyService.js";
import { ICreateBookCopyDTO } from "../interfaces/book-copy/ICreateBookCopyDTO.js";
import { IUpdateBookCopyDTO } from "../interfaces/book-copy/IUpdateBookCopyDTO.js";

export class BookCopyService implements IBookCopyService {
	async getAll(): Promise<BookCopy[]> {
		return await BookCopy.all();
	}

	async getById(id: string): Promise<BookCopy> {
		return await BookCopy.findOrFail(id);
	}

	async create(data: ICreateBookCopyDTO): Promise<BookCopy> {
		return await BookCopy.create(data);
    
	}

	async update(id: string, data: IUpdateBookCopyDTO): Promise<BookCopy> {
		const bookCopy = await BookCopy.findOrFail(id);
		bookCopy.merge(data);
		await bookCopy.save();
		return bookCopy;
	}

	async delete(id: string): Promise<void> {
		const bookCopy = await BookCopy.findOrFail(id);
		return bookCopy.delete();
	}
}
