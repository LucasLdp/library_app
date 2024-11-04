import BookCopiesController from "#controllers/book_copies_controller";
import router from "@adonisjs/core/services/router";

export function bookCopyRoute() {
	router.resource("book-copies", BookCopiesController).apiOnly();
}
