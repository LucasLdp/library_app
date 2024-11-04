import UsersController from "#controllers/users_controller";
import router from "@adonisjs/core/services/router";

export function userRoute() {
	router.resource("users", UsersController).apiOnly();
}
