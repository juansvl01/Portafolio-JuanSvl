import { defineConfig } from 'astro/config';
import github from '@astrojs/github-pages';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  adapter: sataticAdapter(),
  vite: {
    plugins: [tailwindcss()]
  }
});