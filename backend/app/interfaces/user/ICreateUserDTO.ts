import { DateTime } from "luxon";

export interface ICreateUserDTO {
	name: string;
	email: string;
	password: string;
	cpf: string;
	birthDate: DateTime;
	address: Address;
}

interface Address {
	street: string;
	city: string;
	state: string;
	zipCode: string;
}
