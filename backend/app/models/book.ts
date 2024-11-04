import { DateTime } from "luxon";
import { BaseModel, beforeCreate, column, hasMany } from "@adonisjs/lucid/orm";
import { cuid } from "@adonisjs/core/helpers";
import BookCopy from "./book_copy.js";
import type { HasMany } from "@adonisjs/lucid/types/relations";

export default class Book extends BaseModel {
	@column({ isPrimary: true })
	declare id: string;

	@column()
	declare title: string;

	@column()
	declare author: string;

	@column()
	declare isbn: string;

	@column.dateTime({ autoCreate: true })
	declare createdAt: DateTime;

	@column.dateTime({ autoCreate: true, autoUpdate: true })
	declare updatedAt: DateTime;

  @hasMany(() => BookCopy)
  declare bookCopies: HasMany<typeof BookCopy>;

	@beforeCreate()
	public static assignUuid(book: Book) {
		book.id = cuid();
	}
}
