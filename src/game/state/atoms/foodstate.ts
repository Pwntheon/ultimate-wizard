import { atom } from "recoil";
import Decimal from "break_infinity.js";

const FoodState = atom({
  key: "food",
  default: new Decimal(100)
});

export default FoodState;