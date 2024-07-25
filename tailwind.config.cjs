export default {
   content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
   theme: {
      extend: {
         fontFamily: {
            cursive: ["GreatVibes", "sans"],
            numbers: ["suranna", "sans"],
         },
         colors: {
            primary: "var(--color-primary)",
            secondary: "var(--color-secondary)",
            accent: "var(--color-accent)",
            "accent-dark": "var(--color-accent-dark)",
            "primary-bg": "var(--background-color)",
         },
         boxShadow: {
            box: "0px 0px 24px -4px rgba(0, 0, 0, 0.9 )",
            circle: "0px 0px 8px 2px rgba(0, 0, 0, 0.3 )",
         },
      },
   },
   plugins: [],
};
