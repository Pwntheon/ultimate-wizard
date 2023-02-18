import { atom } from "recoil";

const FoodState = atom({
  key: "food",
  default: 10
});

export default FoodState;