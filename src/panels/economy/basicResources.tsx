import FoodResource from "@/game/resources/foodresource";
import ManaResource from "@/game/resources/manaresource";
import ResourceDisplay from "../resourcedisplay";

export default function BasicResources() {
  return (
    <>
      <ResourceDisplay resource={FoodResource} />
      <ResourceDisplay resource={ManaResource} />
    </>
  );
}