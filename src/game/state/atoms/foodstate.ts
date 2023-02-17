import { atom } from "recoil";

const FoodState = atom({
    key: "food",
    default: 0
});

export default FoodState;