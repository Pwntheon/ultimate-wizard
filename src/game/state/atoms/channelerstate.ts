import Decimal from "break_infinity.js";
import { atom } from "recoil";

const ChannelerState = atom({
  key: "Channelers",
  default: new Decimal(0)
});

export default ChannelerState;