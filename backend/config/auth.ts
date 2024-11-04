import { defineConfig } from "@adonisjs/auth";
import { InferAuthEvents, Authenticators } from "@adonisjs/auth/types";
import { sessionGuard, sessionUserProvider } from "@adonisjs/auth/session";
import { jwtGuard } from "@maximemrf/adonisjs-jwt/jwt_config";
import { JwtGuardUser, BaseJwtContent } from "@maximemrf/adonisjs-jwt/types";

interface JwtContent extends BaseJwtContent {
	email: string;
}

const authConfig = defineConfig({
	default: "jwt",
	guards: {
		web: sessionGuard({
			useRememberMeTokens: false,
			provider: sessionUserProvider({
				model: () => import("#models/user"),
			}),
		}),
		jwt: jwtGuard({
			tokenExpiresIn: "1h",
			useCookies: true,
			provider: sessionUserProvider({
				model: () => import("#models/user"),
			}),
			content: (user: JwtGuardUser<any>): JwtContent => ({
				userId: user.getId(),
				email: user.getOriginal().email,
			}),
		}),
	},
});
export default authConfig;

/**
 * Inferring types from the configured auth
 * guards.
 */
declare module "@adonisjs/auth/types" {
	export interface Authenticators
		extends InferAuthenticators<typeof authConfig> {}
}
declare module "@adonisjs/core/types" {
	interface EventsList extends InferAuthEvents<Authenticators> {}
}
