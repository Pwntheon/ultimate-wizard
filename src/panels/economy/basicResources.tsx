import { useRecoilState } from "recoil";
import FoodState from "../../game/state/atoms/foodstate";
import ResourceDisplay from "../resourcedisplay";

export default function BasicResources() {
  const [food] = useRecoilState(FoodState);
  return <ResourceDisplay label="Food" value={~~food} />;
}