import classes from "@/styles/infopanel.module.css";

export interface ResourceDisplayProps {
  label : string,
  value : number
}

export default function ResourceDisplay({label, value} : ResourceDisplayProps) {
  return (
    <div className={classes.entry}>
      <label className={classes.label}>
        {label}
      </label>
      <div className={classes.data}>
        {value}
      </div>
    </div>
  );
}