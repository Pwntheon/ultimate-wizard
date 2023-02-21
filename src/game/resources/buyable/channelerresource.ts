import FoodState from "@/game/state/atoms/foodstate";
import VillagerState from "@/game/state/atoms/villagersstate";
import Decimal from "break_infinity.js";
import { selector } from "recoil";
import ChannelerState from "../../state/atoms/channelerstate";
import FoodResource from "../foodresource";
import { BuyableResource, GetPrice } from "../resource";
import VillagerResource from "./villagerresource";

const ChannelerPrice : GetPrice = selector({
  key: "ChannelerPrice",
  get: ({ get }) => {
    const channelers = get(ChannelerState);
    const villagers = get(VillagerState);
    const food = get(FoodState);
    return [
      { resource: VillagerResource, owned: villagers, price: new Decimal(1) },
      { resource: FoodResource, owned: food, price: new Decimal(25).multiply(new Decimal(1.2).pow(channelers)) }
    ];
  }
});

const ChannelerResource: BuyableResource = {
  name: "Channelers",
  singularName: "Channeler",
  state: ChannelerState,
  price: ChannelerPrice,
};

export default ChannelerResource;