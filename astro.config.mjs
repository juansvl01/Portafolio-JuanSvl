import { defineConfig } from 'astro/config';
import github from '@astrojs/github-pages';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  adapter: github(),
  site: 'https://juansv101.github.io',
  base: 'Portafolio-JuanSvl',
  vite: {
    plugins: [tailwindcss()]
  }
});