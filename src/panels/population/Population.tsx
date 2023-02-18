import { useRecoilState } from "recoil";
import VillagerState from "@/game/state/atoms/villagersstate";
import ResourceDisplay from "../resourcedisplay";
import F from "@/game/utils/format";

export default function Population() {
  const [villagers] = useRecoilState(VillagerState);
  return <ResourceDisplay label="Villagers" value={F(villagers)} />;
}