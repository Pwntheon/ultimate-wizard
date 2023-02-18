import { atom } from "recoil";
import Decimal from "break_infinity.js";

const VillagerState = atom({
  key: "villagers",
  default: new Decimal(0)
});

export default VillagerState;