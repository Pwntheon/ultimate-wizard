import { getRecoil, setRecoil } from "recoil-nexus";
import Processor from "../processor";
import { FoodPerSecond } from "../rules/production";
import FoodState from "../state/atoms/foodstate";
import VillagerState from "../state/atoms/villagersstate";

const VillagersProcessor: Processor = (deltaTime: number) => {
  const villagers = getRecoil(VillagerState);
  setRecoil(FoodState, (food) =>
    food.plus(
      villagers.multiply(FoodPerSecond).multiply(deltaTime)
    )
  );
};

export default VillagersProcessor;
