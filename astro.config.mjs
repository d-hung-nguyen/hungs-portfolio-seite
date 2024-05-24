import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'

// Define the Astro configuration
export default defineConfig({
  // Define the base URL for the site
  site: 'https://astro-portfolio-main.vercel.app', // Ensure this URL is correct for your project's deployment

  // Add integrations for React and Tailwind CSS
  integrations: [
    react(), // Enables the use of React components in Astro files
    tailwind({
      applyBaseStyles: false, // Do not automatically apply Tailwind's base styles
      // Additional Tailwind configuration options can be added here
    }),
  ],
})
