import { z } from "zod"

const rawEnv = import.meta.env

export const env = transformEnv({
	env: {
		appBaseTitle: rawEnv.VITE_APP_BASE_TITLE,
		apiBaseUrl: rawEnv.VITE_API_BASE_URL,
	},
	schema: {
		appBaseTitle: z.string(),
		apiBaseUrl: z.string(),
	},
})

function transformEnv<
	CustomEnv extends object,
	SchemaObj extends Record<keyof CustomEnv, z.ZodSchema>,
>(args: { env: CustomEnv; schema: SchemaObj }) {
	const { env: customEnv, schema: schemaObj } = args

	const viteDefaultSchema = {
		/* Current NODE_ENV mode, `production`, `staging`, `development`. */
		MODE: z.string(),
		/* BaseURL of application. default: `/`. */
		BASE_URL: z.string(),
		/* Indicator whether the MODE is in `production` mode. */
		PROD: z.boolean(),
		/* Indicator whether the MODE is not in `production` mode. */
		DEV: z.boolean(),
		/* Indicator whether the Application is Server Side Rendering. */
		SSR: z.boolean(),
	}
	const schema = z.object({
		vite: z.object(viteDefaultSchema),
		...schemaObj,
	})
	return schema.parse({ vite: { ...import.meta.env }, ...customEnv })
}
