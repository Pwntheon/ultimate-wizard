1. Make layout

2. Extend buy button to support some modifier button for buying 100%/50% etc. of what you can afford.
 * Show price and return on button when modifier button is held

3. Inline the Trace function so that the correct source file is shown in the chrome dev console.
 * This probably requires an esbuild plugin like https://github.com/claviska/esbuild-plugin-inline-import
 * Uncertain whether this is supported in vite

4. Create panel component that can contain list of resources. We probably want one for population, one for economy and one for magic for now

5. Create simple tooltip to show costs for buyables & spells

6. Clean up spells handling

7. Figure out the similarities and differences between spells and purchases, especially in the buttons, and clean up. Some code can maybe be reused