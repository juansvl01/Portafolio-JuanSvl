import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://juansv101.github.io/Portafolio-JuanSvl/',
  base: '/Portafolio-JuanSvl/',
  vite: {
    plugins: [tailwindcss()]
  }
});
