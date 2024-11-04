/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from "@adonisjs/core/services/router";
import { userRoute } from "./routes/user.route.js";
import { bookRoute } from "./routes/book.route.js";
import { bookCopyRoute } from "./routes/book-copy.route.js";

router
	.group(() => {
		userRoute();
		bookRoute();
		bookCopyRoute();
	})
	.prefix("api");
