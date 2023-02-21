import Decimal from "break_infinity.js";
import { RecoilState, RecoilValueReadOnly } from "recoil";
import { getRecoil, setRecoil } from "recoil-nexus";

export type GetPrice = RecoilValueReadOnly<Cost[]>

export type Cost = {
  resource: Resource,
  owned: Decimal,
  price: Decimal
}

interface Resource {
  name: string
  singularName: string
  state: RecoilState<Decimal>
}

export interface BuyableResource extends Resource {
  price: GetPrice
}

// Todo: Should buyable resource just be a class at this point?
export function buy(resource : BuyableResource) {
  const price = getRecoil(resource.price);
  setRecoil(resource.state, current => current.add(1));
  price.forEach(p => setRecoil(p.resource.state, current => current.subtract(p.price)));
}

export default Resource;

