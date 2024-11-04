import Rental from "#models/rental";
import { ICreateRentalDTO } from "../interfaces/rental/ICreateRentalDTO.js";
import { IRentalService } from "../interfaces/rental/IRentalService.js";
import { IUpdateRentalDTO } from "../interfaces/rental/IUpdateRentalDTO.js";

export class RentalService implements IRentalService {
	async getAll(): Promise<Rental[]> {
		const rentals = await Rental.query().preload("user").preload("bookCopy");
		return rentals;
	}

	async getById(id: string): Promise<Rental> {
		const rental = await Rental.findOrFail(id);
		await Promise.all([rental.load("user"), rental.load("bookCopy")]);
		return rental;
	}

	async create(data: ICreateRentalDTO): Promise<Rental> {
		const rental = await Rental.create(data);
		return rental;
	}

	async update(id: string, data: IUpdateRentalDTO): Promise<Rental> {
		const rental = await Rental.findOrFail(id);
		rental.merge(data);
		await rental.save();
		return rental;
	}

	async delete(id: string): Promise<void> {
		const rental = await Rental.findOrFail(id);
		await rental.delete();
	}
}
