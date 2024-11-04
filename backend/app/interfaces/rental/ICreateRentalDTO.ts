import { DateTime } from "luxon";

export interface ICreateRentalDTO {
	userId: string;
	bookCopyId: string;
	rentedAt: DateTime;
	returnedAt?: DateTime;
	isLate?: boolean;
}
