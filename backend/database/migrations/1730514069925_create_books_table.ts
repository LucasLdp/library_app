import { BaseSchema } from "@adonisjs/lucid/schema";

export default class Books extends BaseSchema {
	protected tableName = "books";

	public async up() {
		this.schema.createTable(this.tableName, (table) => {
			table.string("id").primary();
			table.string("title").notNullable();
			table.string("author").notNullable();
			table.string("isbn").notNullable().unique();
			table.timestamp("created_at", { useTz: true });
			table.timestamp("updated_at", { useTz: true });
		});
	}

	public async down() {
		this.schema.dropTable(this.tableName);
	}
}
