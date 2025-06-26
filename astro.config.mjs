import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  adapter: github(),
  site: 'https://juansv101.github.io/Portafolio-JuanSvl/',
  base: '/Portafolio-JuanSvl/',
  vite: {
    plugins: [tailwindcss()]
  }
});
