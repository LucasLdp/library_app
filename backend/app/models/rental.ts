import { DateTime } from "luxon";
import {
	BaseModel,
	beforeCreate,
	belongsTo,
	column,
} from "@adonisjs/lucid/orm";
import { cuid } from "@adonisjs/core/helpers";
import User from "./user.js";
import type { BelongsTo } from "@adonisjs/lucid/types/relations";
import BookCopy from "./book_copy.js";

export default class Rental extends BaseModel {
	@column({ isPrimary: true })
	declare id: string;

	@column()
	declare userId: string;

	@column()
	declare bookCopyId: string;

	@column.dateTime()
	declare rentedAt: DateTime;

	@column.dateTime()
	declare returnedAt?: DateTime;

	@column()
	declare isLate: boolean;

	@column.dateTime({ autoCreate: true })
	declare createdAt: DateTime;

	@column.dateTime({ autoCreate: true, autoUpdate: true })
	declare updatedAt: DateTime;

	@belongsTo(() => User)
	declare user: BelongsTo<typeof User>;

	@belongsTo(() => BookCopy)
	declare bookCopy: BelongsTo<typeof BookCopy>;

	@beforeCreate()
	public static assignUuid(renal: Rental) {
		renal.id = cuid();
	}
}
