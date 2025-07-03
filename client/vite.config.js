import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import tailwindcss from "@tailwindcss/vite";
import flowbiteReact from "flowbite-react/plugin/vite";


// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api':{
        target: 'http://localhost:3000',
        secure : false,
      },
    },
  },
  plugins: [preact(), tailwindcss(), flowbiteReact()],
})