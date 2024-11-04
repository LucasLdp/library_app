import BookCopy from "#models/book_copy";
import { ICreateBookCopyDTO } from "./ICreateBookCopyDTO.js";
import { IUpdateBookCopyDTO } from "./IUpdateBookCopyDTO.js";

export interface IBookCopyService {
	getById(id: string): Promise<BookCopy>;
	getAll(): Promise<BookCopy[]>;
	create(data: ICreateBookCopyDTO): Promise<BookCopy>;
	update(id: string, data: IUpdateBookCopyDTO): Promise<BookCopy>;
	delete(id: string): Promise<void>;
}
