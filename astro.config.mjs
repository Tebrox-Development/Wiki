import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://tebrox-development.github.io',
  base: '/Wiki',
  integrations: [
    starlight({
      title: 'Tebrox Development Wiki',
      description: 'Documentation for Tebrox Development plugins.',
      social: [
        {
          icon: 'github',
          label: 'Tebrox Development on GitHub',
          href: 'https://github.com/Tebrox-Development',
        },
      ],
      sidebar: [
        {
          label: 'General',
          items: [
            { label: 'Home', link: '/' },
            { slug: 'getting-started' },
          ],
        },
        {
          label: 'Plugins',
          items: [
            { label: 'VertexCore', items: [{ autogenerate: { directory: 'vertexcore' } }] },
            { label: 'AFK Area', items: [{ autogenerate: { directory: 'afk-area' } }] },
            { label: 'EggEmAll Reloaded', items: [{ autogenerate: { directory: 'eggemall-reloaded' } }] },
          ],
        },
        {
          label: 'Help',
          items: [{ slug: 'support' }],
        },
      ],
    }),
  ],
});
