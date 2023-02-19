import FoodState from "../state/atoms/foodstate";
import Resource from "./resource";

const FoodResource: Resource = {
  name: "Food",
  singularName: "Food",
  state: FoodState
};

export default FoodResource;