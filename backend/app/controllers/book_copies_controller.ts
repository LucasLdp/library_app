import { BookCopyService } from "#services/book_copy_service";
import { inject } from "@adonisjs/core";
import type { HttpContext } from "@adonisjs/core/http";
import { ICreateBookCopyDTO } from "../interfaces/book-copy/ICreateBookCopyDTO.js";
import { IUpdateBookCopyDTO } from "../interfaces/book-copy/IUpdateBookCopyDTO.js";

@inject()
export default class BookCopiesController {
	constructor(protected bookCopyService: BookCopyService) {}

	async index({}: HttpContext) {
		const bookCopies = await this.bookCopyService.getAll();
		return bookCopies;
	}

	async store({ request, response }: HttpContext) {
		const data = request.body() as ICreateBookCopyDTO;
		const bookCopy = await this.bookCopyService.create(data);
		return response.created(bookCopy);
	}

	async show({ params }: HttpContext) {
		const { id } = params;
		const bookCopy = await this.bookCopyService.getById(id);
		return bookCopy;
	}

	async update({ params, request }: HttpContext) {
		const { id } = params;
		const data = request.body() as IUpdateBookCopyDTO;
		const bookCopy = await this.bookCopyService.update(id, data);
		return bookCopy;
	}

	async destroy({ params }: HttpContext) {
		const { id } = params;
		await this.bookCopyService.delete(id);
		return { message: "Cópia de livro deletada com sucesso" };
	}
}
