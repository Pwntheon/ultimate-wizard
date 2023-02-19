import ResourceDisplay from "../resourcedisplay";
import VillagerResource from "@/game/resources/villagerresource";
import ChannelerResource from "@/game/resources/channelerresource";

export default function Population() {
  return (
    <>
      <ResourceDisplay resource={VillagerResource} />
      <ResourceDisplay resource={ChannelerResource} />
    </>
  );
}