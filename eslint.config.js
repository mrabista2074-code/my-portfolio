// tailwind.config.js
// This tells Tailwind which files to scan for class names
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // scan all files in src/
  ],
  theme: {
    extend: {
      // Custom fonts we'll add
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
      // Custom colors for our neutral palette
      colors: {
        cream: '#faf9f7',
        warm: '#f4f2ee',
        muted: '#888780',
        border: '#e0ded8',
      },
    },
  },
  plugins: [],
}