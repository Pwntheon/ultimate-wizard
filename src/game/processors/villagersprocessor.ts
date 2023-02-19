import { getRecoil, setRecoil } from "recoil-nexus";
import Processor from "./processor";
import { FoodPerVillager } from "../rules/production";
import FoodState from "../state/atoms/foodstate";
import VillagerState from "../state/atoms/villagersstate";

const VillagersProcessor: Processor = (deltaTime) => {
  const villagers = getRecoil(VillagerState);
  setRecoil(FoodState, (food) => food.plus(
    villagers.multiply(FoodPerVillager).multiply(deltaTime)
  ));
};

export default VillagersProcessor;
