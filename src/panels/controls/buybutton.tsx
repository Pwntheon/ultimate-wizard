import { BuyableResource, Cost } from "@/game/resources/resource";
import F from "@/utils/format";
import Decimal from "break_infinity.js";
import { useRecoilState } from "recoil";

function price(owned: Decimal, cost: Cost) {
  return cost.basePrice.multiply(
    cost.increase.pow(owned)
  );
}

function renderPrice(owned: Decimal, cost: Cost) {
  return `${F(price(owned, cost))} ${cost.resource.name}`;
}

export interface BuyButtonProps {
  resource: BuyableResource
}

export default function BuyButton({ resource }: BuyButtonProps) {
  if (resource.cost === null) throw new Error("Resource with null price cannot be bought");

  const [resourceState, setResourceState] = useRecoilState(resource.state);
  const [priceState, setPriceState] = useRecoilState(resource.cost.resource.state);

  function buy() {
    setPriceState(r => r.subtract(price(resourceState, resource.cost)));
    setResourceState(r => r.add(1));
  }

  const canBuy = priceState.greaterThanOrEqualTo(price(resourceState, resource.cost));

  return <button onClick={buy} disabled={!canBuy}>Buy 1 {resource.singularName} ({renderPrice(resourceState, resource.cost)})</button>;
}