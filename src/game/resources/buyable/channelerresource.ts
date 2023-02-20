import Decimal from "break_infinity.js";
import ChannelerState from "../../state/atoms/channelerstate";
import FoodResource from "../foodresource";
import { BuyableResource } from "../resource";
import VillagerResource from "./villagerresource";

const ChannelerResource: BuyableResource = {
  name: "Channelers",
  singularName: "Channeler",
  state: ChannelerState,
  costs: [
    {
      resource: VillagerResource,
      basePrice: new Decimal(1),
      increase: new Decimal(1)
    },
    {
      resource: FoodResource,
      basePrice: new Decimal(25),
      increase: new Decimal(1.2)
    }
  ]
};

export default ChannelerResource;