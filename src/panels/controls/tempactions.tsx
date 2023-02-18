import FoodState from "@/game/state/atoms/foodstate";
import Decimal from "break_infinity.js";
import { useRecoilState } from "recoil";
import VillagerState from "../../game/state/atoms/villagersstate";

const villager = {
  basePrice: new Decimal(10),
  creep: new Decimal(1.1)
};

export default function TempActions() {
  const [villagers, setVillagers] = useRecoilState(VillagerState);
  const [food, setFood] = useRecoilState(FoodState);

  const price = villager.basePrice.multiply(
    villager.creep.pow(villagers)
  );
  
  const canAfford = food.greaterThanOrEqualTo(price);

  function buy() {
    setFood(f => f.minus(price));
    setVillagers(n => n.plus(1));
  }

  return (
    <>
      <button
        onClick={buy} disabled={!canAfford}>Recruit villager ({~~price} food)</button>
    </>
  );
}