import Decimal from "break_infinity.js";
import ChannelerState from "../state/atoms/channelerstate";
import { BuyableResource } from "./resource";
import VillagerResource from "./villagerresource";

const ChannelerResource: BuyableResource = {
  name: "Channelers",
  singularName: "Channeler",
  state: ChannelerState,
  cost: {
    resource: VillagerResource,
    basePrice: new Decimal(1),
    increase: new Decimal(1)
  }
};

export default ChannelerResource;