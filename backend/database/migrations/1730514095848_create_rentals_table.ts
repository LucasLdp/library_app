import { BaseSchema } from "@adonisjs/lucid/schema";

export default class Rentals extends BaseSchema {
	protected tableName = "rentals";

	public async up() {
		this.schema.createTable(this.tableName, (table) => {
			table.string("id").primary();
			table
				.string("user_id")
				.unsigned()
				.references("id")
				.inTable("users")
				.onDelete("CASCADE");
			table
				.string("book_copy_id")
				.unsigned()
				.references("id")
				.inTable("book_copies")
				.onDelete("CASCADE");
			table.timestamp("rented_at", { useTz: true }).notNullable();
			table.timestamp("returned_at", { useTz: true }).nullable();
			table.boolean("is_late").defaultTo(false);

			table.timestamp("created_at", { useTz: true });
			table.timestamp("updated_at", { useTz: true });
		});
	}

	public async down() {
		this.schema.dropTable(this.tableName);
	}
}
