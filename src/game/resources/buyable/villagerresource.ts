import Decimal from "break_infinity.js";
import VillagerState from "../../state/atoms/villagersstate";
import FoodResource from "../foodresource";
import { BuyableResource } from "../resource";

const VillagerResource: BuyableResource = {
  name: "Villagers",
  singularName: "Villager",
  state: VillagerState,
  costs: [{
    resource: FoodResource,
    basePrice: new Decimal(10),
    increase: new Decimal(1.3)
  }]
};

export default VillagerResource;