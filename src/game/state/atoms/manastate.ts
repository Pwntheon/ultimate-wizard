import Decimal from "break_infinity.js";
import { atom } from "recoil";

const ManaState = atom({
  key: "Mana",
  default: new Decimal(0)
});

export default ManaState;