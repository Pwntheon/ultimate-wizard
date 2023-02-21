import { buy, BuyableResource, Cost } from "@/game/resources/resource";
import F from "@/utils/format";
import { useRecoilValue } from "recoil";


// TODO: Popper to show price
function renderPrice(price: Cost[]) {
  return price.map(c => `${F(c.price)} ${(F(c.price) === "1" ? c.resource.singularName : c.resource.name)}`).join(", ");
}

export interface BuyButtonProps {
  resource: BuyableResource
}

export default function BuyButton({ resource }: BuyButtonProps) {
  const price = useRecoilValue(resource.price);

  const canBuy = price.every(p => p.owned.greaterThanOrEqualTo(p.price));

  // TODO: separate into container and presentation components
  return (
    <button
      title={renderPrice(price)}
      onClick={() => buy(resource)}
      disabled={!canBuy}>
      Buy 1 {resource.singularName}
    </button>
  );
}