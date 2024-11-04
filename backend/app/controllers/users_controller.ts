import { UserService } from "#services/user_service";
import { inject } from "@adonisjs/core";
import type { HttpContext } from "@adonisjs/core/http";
import { ICreateUserDTO } from "../interfaces/user/ICreateUserDTO.js";
import { IUpdateUserDTO } from "../interfaces/user/IUpdateUserDTO.js";

@inject()
export default class UsersController {
	constructor(protected userService: UserService) {}

	async index({ response }: HttpContext) {
		const users = await this.userService.getAll();
		return response.json(users);
	}

	async store({ request, response }: HttpContext) {
		const data = request.body() as ICreateUserDTO;
		const user = await this.userService.create(data);
		return response.created(user);
	}

	async show({ params }: HttpContext) {
		const { id } = params;
		const user = await this.userService.getById(id);
		return user;
	}

	async update({ params, request }: HttpContext) {
		const { id } = params;
		const data = request.body() as IUpdateUserDTO;
		const user = await this.userService.update(id, data);
		return user;
	}

	async destroy({ params }: HttpContext) {
		const { id } = params;
		await this.userService.delete(id);
		return { message: "Usuário deletado com sucesso" };
	}
}
