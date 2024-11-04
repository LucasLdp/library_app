import Rental from "#models/rental";
import { ICreateRentalDTO } from "./ICreateRentalDTO.js";
import { IUpdateRentalDTO } from "./IUpdateRentalDTO.js";

export interface IRentalService {
	create(data: ICreateRentalDTO): Promise<Rental>;
	update(id: string, data: IUpdateRentalDTO): Promise<Rental>;
	delete(id: string): Promise<void>;
	getAll(): Promise<Rental[]>;
	getById(id: string): Promise<Rental>;
}
