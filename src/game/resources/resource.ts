import Decimal from "break_infinity.js";
import { RecoilState } from "recoil";

export type Cost = {
  resource : Resource
  basePrice: Decimal
  increase: Decimal
}

interface Resource {
  name: string
  singularName: string
  state: RecoilState<Decimal>
}

export interface BuyableResource extends Resource {
  costs: Cost[]
}

export default Resource;

