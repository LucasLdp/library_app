import { BaseSchema } from "@adonisjs/lucid/schema";

export default class Addresses extends BaseSchema {
	protected tableName = "addresses";

	public async up() {
		this.schema.createTable(this.tableName, (table) => {
			table.string("id").primary();
			table.string("street").notNullable();
			table.string("city").notNullable();
			table.string("state").notNullable();
			table.string("zip_code").notNullable();
			table
				.string("user_id")
				.unsigned()
				.references("id")
				.inTable("users")
				.onDelete("CASCADE");
			table.timestamp("created_at", { useTz: true });
			table.timestamp("updated_at", { useTz: true });
		});
	}

	public async down() {
		this.schema.dropTable(this.tableName);
	}
}
