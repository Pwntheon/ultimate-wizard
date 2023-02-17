import { useRecoilState } from "recoil";
import VillagerState from "../../game/state/atoms/villagersstate";
import classes from "@/styles/panel.module.css";

export default function Villagers() {
  const [villagers] = useRecoilState(VillagerState);
  return (
    <div className={classes.container}>
      <div className={classes.data}>
        {villagers}
      </div>
    </div>
  );
}