import {
  defineConfig
} from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import {
  fileURLToPath,
  URL
} from "node:url";

// https://vite.dev/config/
export default defineConfig({
  // Set base to the repository name so GitHub Pages serves assets correctly
  base: '/githubdeploy664259020/',
  plugins: [react(), tailwindcss(), ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src",
        import.meta.url)),
    },
  },
})