import type { Config } from 'tailwindcss'

const config: Config = {
  // A única coisa que precisamos aqui é dizer ao Tailwind onde procurar as classes
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // A secção 'theme' já não é necessária aqui, pois está no globals.css
  theme: {
    extend: {},
  },
  plugins: [],
}
export default config
