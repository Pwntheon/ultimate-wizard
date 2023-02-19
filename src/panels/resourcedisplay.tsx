import Resource from "@/game/resources/resource";
import classes from "@/styles/infopanel.module.css";
import { useRecoilState } from "recoil";
import F from "@/utils/format";

export interface ResourceDisplayProps {
  resource: Resource
}

export default function ResourceDisplay({ resource }: ResourceDisplayProps) {
  const [owned] = useRecoilState(resource.state);
  return (
    <div className={classes.entry}>
      <label className={classes.label}>
        {(F(owned) === "1") ? resource.singularName : resource.name}
      </label>
      <div className={classes.data}>
        {F(owned)}
      </div>
    </div>
  );
}