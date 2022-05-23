import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import legacy from "@vitejs/plugin-legacy";
import * as path from "path";
// https://vitejs.dev/config/
export default defineConfig({
	base: "/uixhello.github.io/looc-git-pages/",
	plugins: [
		react(),
		tsconfigPaths(),
		legacy({
			targets: ["defaults", "not IE 11"]
		})
	],
	css: {
		preprocessorOptions: {
			scss: { additionalData: `@import "@/Assets/Styles/Mixin.scss";` }
		}
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src")
		}
	}
});
