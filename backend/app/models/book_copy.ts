import { DateTime } from "luxon";
import {
	BaseModel,
	beforeCreate,
	belongsTo,
	column,
} from "@adonisjs/lucid/orm";
import { cuid } from "@adonisjs/core/helpers";
import Book from "./book.js";
import type { BelongsTo } from "@adonisjs/lucid/types/relations";

export default class BookCopy extends BaseModel {
	@column({ isPrimary: true })
	declare id: string;

	@column()
	declare bookId: string;

	@column()
	declare copyCode: string;

	@column.dateTime({ autoCreate: true })
	declare createdAt: DateTime;

	@column.dateTime({ autoCreate: true, autoUpdate: true })
	declare updatedAt: DateTime;

	@belongsTo(() => Book)
	declare book: BelongsTo<typeof Book>;

	@beforeCreate()
	public static assignUuid(bookCopy: BookCopy) {
		bookCopy.id = cuid();
	}
}
