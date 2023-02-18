import { atom } from "recoil";
import Decimal from "break_infinity.js";

const FoodState = atom({
  key: "food",
  default: new Decimal(10)
});

export default FoodState;