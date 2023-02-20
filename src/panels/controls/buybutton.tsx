import Resource, { BuyableResource, Cost } from "@/game/resources/resource";
import F from "@/utils/format";
import Decimal from "break_infinity.js";
import { useRecoilState } from "recoil";

function getPrice(owned: Decimal, cost: Cost) {
  return cost.basePrice.multiply(
    cost.increase.pow(owned)
  );
}

function renderPrice(owned: Decimal, price: Decimal, resource: Resource) {
  const amount = F(price);
  return `${amount} ${(amount === "1" ? resource.singularName : resource.name)}`;
}

export interface BuyButtonProps {
  resource: BuyableResource
}

export default function BuyButton({ resource }: BuyButtonProps) {
  
  const [buyableState, setBuyableState] = useRecoilState(resource.state);
  const resourceStates = resource.costs.map(c => useRecoilState(c.resource.state));

  const priceState = resource.costs.map((c, i) => {
    const price = getPrice(buyableState, c);
    const [state, setState] = resourceStates[i];
    return {
      canAfford: state.greaterThanOrEqualTo(price),
      price: price,
      label: renderPrice(state, price, c.resource),
      pay: () => setState(current => current.subtract(price))
    };
  });

  function buy() {
    priceState.forEach((c) => c.pay());
    setBuyableState(r => r.add(1));
  }

  const canBuy = priceState.every(p => p.canAfford);

  // TODO: Popper to show price
  return <button title={priceState.map(p => p.label).join(", ")} onClick={buy} disabled={!canBuy}>Buy 1 {resource.singularName}</button>;
}