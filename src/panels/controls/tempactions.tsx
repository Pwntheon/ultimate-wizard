import FoodState from "@/game/state/atoms/foodstate";
import { useRecoilState } from "recoil";
import VillagerState from "../../game/state/atoms/villagersstate";

const villager = {
  basePrice: 10,
  creep: 1.1
};

export default function TempActions() {
  const [villagers, setVillagers] = useRecoilState(VillagerState);
  const [food, setFood] = useRecoilState(FoodState);

  const price = villager.basePrice * Math.pow(villager.creep, villagers);
  const canAfford = food >= price;

  function buy() {
    setFood(f => f - price);
    setVillagers(n => n + 1);
  }

  return (
    <>
      <button
        onClick={buy} disabled={!canAfford}>Recruit villager ({~~price} food)</button>
    </>
  );
}