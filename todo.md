1. Extract a "purchase" component. This should:
 * Check if you can afford. Disabled button if not
 * When you buy, sub the appropriate resource(s) and add what you bought

2. Use BigInt for values.
 * Seems easy but...
 * Depending on deltatime, a processor tick might not add 1 whole resource. This will get truncated with bigint
 * Check size of result. If it's below a certain value, do the calculation with Number and carry the remainder?
 * Might be some issues here.

3. Make layout

4. Extend buy button to support some modifier button for buying 100%/50% etc. of what you can afford.
 * Show price and return on button when modifier button is held
 