import { DateTime } from "luxon";
import { BaseModel, beforeCreate, column, hasOne } from "@adonisjs/lucid/orm";
import Address from "./address.js";
import type { HasOne } from "@adonisjs/lucid/types/relations";
import { cuid } from "@adonisjs/core/helpers";
import hash from "@adonisjs/core/services/hash";

export default class User extends BaseModel {
	@column({ isPrimary: true })
	declare id: string;

	@column()
	declare name: string;

	@column()
	declare email: string;

	@column({ serializeAs: null })
	declare password: string;

	@column()
	declare cpf: string;

	@column.date()
	declare birthDate: DateTime;

	@column.dateTime({ autoCreate: true })
	declare createdAt: DateTime;

	@hasOne(() => Address)
	declare address: HasOne<typeof Address>;

	@column.dateTime({ autoCreate: true, autoUpdate: true })
	declare updatedAt: DateTime;

	@beforeCreate()
	public static assignUuid(user: User) {
		user.id = cuid();
	}

	@beforeCreate()
	public static async hashPassword(user: User) {
		if (user.$dirty.password) {
			user.password = await hash.make(user.password);
		}
	}
}
