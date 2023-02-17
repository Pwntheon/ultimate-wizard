export default function Trace(...args : any) {
    if(import.meta.env.MODE === "development") console.log(...args);
}