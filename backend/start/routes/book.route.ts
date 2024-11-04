import BooksController from "#controllers/books_controller";
import router from "@adonisjs/core/services/router";

export function bookRoute() {
	router.resource("books", BooksController).apiOnly();
}
