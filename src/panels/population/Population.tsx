import { useRecoilState } from "recoil";
import VillagerState from "@/game/state/atoms/villagersstate";
import ResourceDisplay from "../resourcedisplay";

export default function Population() {
  const [villagers] = useRecoilState(VillagerState);
  return <ResourceDisplay label="Villagers" value={villagers} />;
}