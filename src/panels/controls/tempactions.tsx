import VillagerResource from "@/game/resources/villagerresource";
import BuyButton from "./buybutton";
export default function TempActions() {
  return (
    <BuyButton resource={VillagerResource} />
  );
}