import { BaseSchema } from "@adonisjs/lucid/schema";

export default class BookCopies extends BaseSchema {
	protected tableName = "book_copies";

	public async up() {
		this.schema.createTable(this.tableName, (table) => {
			table.string("id").primary();
			table
				.string("book_id")
				.unsigned()
				.references("id")
				.inTable("books")
				.onDelete("CASCADE");
			table.string("copy_code").notNullable();
			table.timestamp("created_at", { useTz: true });
			table.timestamp("updated_at", { useTz: true });
		});
	}

	public async down() {
		this.schema.dropTable(this.tableName);
	}
}
