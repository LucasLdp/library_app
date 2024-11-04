import User from "#models/user";
import { ICreateUserDTO } from "./ICreateUserDTO.js";

export interface IUserService {
	getById(id: string): Promise<User>;

	getAll(): Promise<User[]>;

	create(data: ICreateUserDTO): Promise<User>;

	update(id: string, data: ICreateUserDTO): Promise<User>;

	delete(id: string): Promise<void>;
}
