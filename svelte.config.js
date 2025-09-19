import { mdsvex } from 'mdsvex';
import adapter from '@deno/svelte-adapter';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Add '.md' to the extensions array
  extensions: ['.svelte', '.svx', '.md'],

  preprocess: [
    vitePreprocess(),
    // Tell mdsvex to handle both .svx and .md files
    mdsvex({
      extensions: ['.svx', '.md']
    })
  ],

  kit: {
    adapter: adapter()
  }
};

export default config;