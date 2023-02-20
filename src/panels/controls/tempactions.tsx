import ChannelerResource from "@/game/resources/buyable/channelerresource";
import VillagerResource from "@/game/resources/buyable/villagerresource";
import SpawnFood from "@/game/spells/spawnfood";
import BuyButton from "./buybutton";
import CastButton from "./castbutton";
export default function TempActions() {
  return (
    <>
      <BuyButton resource={VillagerResource} />
      <BuyButton resource={ChannelerResource} />
      <CastButton spell={SpawnFood} />
    </>
  );
}