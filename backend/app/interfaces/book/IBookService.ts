import Book from "#models/book";
import { ICreateBookDTO } from "./ICreateBookService.js";
import { IUpdateBookDTO } from "./IUpdateBookService.js";

export interface IBookService {
	getById(id: string): Promise<Book>;
	getAll(): Promise<Book[]>;
	create(data: ICreateBookDTO): Promise<Book>;
	update(id: string, data: IUpdateBookDTO): Promise<Book>;
	delete(id: string): Promise<void>;
}
