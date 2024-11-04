import User from "#models/user";
import { ICreateUserDTO } from "../interfaces/user/ICreateUserDTO.js";
import { IUpdateUserDTO } from "../interfaces/user/IUpdateUserDTO.js";
import { IUserService } from "../interfaces/user/IUserService.js";

export class UserService implements IUserService {
	async getAll(): Promise<User[]> {
		const users = await User.query().preload("address");
		return users;
	}

	async getById(id: string): Promise<User> {
		return await User.findOrFail(id);
	}

	async create(data: ICreateUserDTO): Promise<User> {
		return await User.create(data);
	}

	async delete(id: string): Promise<void> {
		const user = await User.findOrFail(id);
		return user.delete();
	}

	async update(id: string, data: IUpdateUserDTO): Promise<User> {
		const user = await User.findOrFail(id);
		user.merge(data);
		await user.save();
		return user;
	}
}
