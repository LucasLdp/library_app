import { BookService } from "#services/book_service";
import { inject } from "@adonisjs/core";
import type { HttpContext } from "@adonisjs/core/http";
import { ICreateBookDTO } from "../interfaces/book/ICreateBookService.js";

@inject()
export default class BooksController {
	constructor(protected bookService: BookService) {}

	async index({}: HttpContext) {
		const books = await this.bookService.getAll();
		return books;
	}

	async store({ request, response }: HttpContext) {
		const data = request.body() as ICreateBookDTO;
		const book = await this.bookService.create(data);
		return response.created(book);
	}

	async show({ params }: HttpContext) {
		const { id } = params;
		const book = await this.bookService.getById(id);
		return book;
	}

	async update({ params, request }: HttpContext) {
		const { id } = params;
		const data = request.body() as ICreateBookDTO;
		const book = await this.bookService.update(id, data);
		return book;
	}

	async destroy({ params }: HttpContext) {
		const { id } = params;
		await this.bookService.delete(id);
		return { message: "Livro deletado com sucesso" };
	}
}
