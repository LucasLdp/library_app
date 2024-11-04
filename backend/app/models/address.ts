import { DateTime } from "luxon";
import { BaseModel, beforeCreate, belongsTo, column } from "@adonisjs/lucid/orm";
import User from "./user.js";
import type { BelongsTo } from "@adonisjs/lucid/types/relations";
import { cuid } from "@adonisjs/core/helpers";

export default class Address extends BaseModel {
	@column({ isPrimary: true })
	declare id: string;

	@column()
	declare userId: number;

	@column()
	declare street: string;

	@column()
	declare city: string;

	@column()
	declare state: string;

	@column()
	declare zipCode: string;

	@belongsTo(() => User)
	declare user: BelongsTo<typeof User>;

	@column.dateTime({ autoCreate: true })
	declare createdAt: DateTime;

	@column.dateTime({ autoCreate: true, autoUpdate: true })
	declare updatedAt: DateTime;

  @beforeCreate()
	public static assignUuid(address: Address) {
		address.id = cuid();
	}
}
