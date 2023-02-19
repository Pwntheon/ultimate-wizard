import Decimal from "break_infinity.js";
import { getRecoil, setRecoil } from "recoil-nexus";
import FoodState from "../state/atoms/foodstate";
import ManaState from "../state/atoms/manastate";
import VillagerState from "../state/atoms/villagersstate";
import Spell from "./spell";

const SpawnFood: Spell = {
  name: "Spawn Food",
  description: "Spawns 100 food. Each villager increases this amount by 10%",
  cost: new Decimal(10),
  cast: () => {
    const villagers = getRecoil(VillagerState);
    setRecoil(FoodState, f =>
      f.plus(new Decimal(1.1).pow(villagers).multiply(100))
    );
    setRecoil(ManaState, m => m.minus(10));
  }
};

export default SpawnFood;