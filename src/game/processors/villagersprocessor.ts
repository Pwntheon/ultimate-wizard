import { useRecoilState } from "recoil";
import Processor from "../processor";
import { FoodPerSecond } from "../rules/production";
import FoodState from "../state/atoms/foodstate";
import VillagerState from "../state/atoms/villagersstate";

const VillagersProcessor : Processor = (deltaTime: number) =>  {
    const [villagers] = useRecoilState(VillagerState);
    const [_, setFood] = useRecoilState(FoodState);
    setFood((food) => food + (villagers * FoodPerSecond));
}

export default VillagersProcessor;
