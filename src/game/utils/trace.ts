// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Trace(...args: any) {
  if (import.meta.env.MODE === "development") console.log(...args);
}