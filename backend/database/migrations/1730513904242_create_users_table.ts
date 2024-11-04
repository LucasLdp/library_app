import { BaseSchema } from "@adonisjs/lucid/schema";

export default class Users extends BaseSchema {
	protected tableName = "users";

	public async up() {
		this.schema.createTable(this.tableName, (table) => {
			table.string("id").primary();
			table.string("name").notNullable();
			table.string("email").notNullable().unique();
			table.string("password");
			table.string("cpf").notNullable().unique();
			table.date("birth_date").notNullable();
			table.timestamp("created_at", { useTz: true });
			table.timestamp("updated_at", { useTz: true });
		});
	}

	public async down() {
		this.schema.dropTable(this.tableName);
	}
}
