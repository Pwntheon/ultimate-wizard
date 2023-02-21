import FoodState from "@/game/state/atoms/foodstate";
import Decimal from "break_infinity.js";
import { selector } from "recoil";
import VillagerState from "../../state/atoms/villagersstate";
import FoodResource from "../foodresource";
import { BuyableResource, GetPrice } from "../resource";

const VillagerPrice: GetPrice = selector({
  key: "VillagerPrice",
  get: ({ get }) => {
    const villagers = get(VillagerState);
    const food = get(FoodState);
    return [
      { resource: FoodResource, owned: food, price: new Decimal(10).multiply(new Decimal(1.3).pow(villagers)) }
    ];
  }
});

const VillagerResource: BuyableResource = {
  name: "Villagers",
  singularName: "Villager",
  state: VillagerState,
  price: VillagerPrice
};

export default VillagerResource;