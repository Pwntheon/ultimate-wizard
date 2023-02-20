import ResourceDisplay from "../resourcedisplay";
import VillagerResource from "@/game/resources/buyable/villagerresource";
import ChannelerResource from "@/game/resources/buyable/channelerresource";

export default function Population() {
  return (
    <>
      <ResourceDisplay resource={VillagerResource} />
      <ResourceDisplay resource={ChannelerResource} />
    </>
  );
}