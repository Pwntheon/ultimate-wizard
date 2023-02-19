import { getRecoil, setRecoil } from "recoil-nexus";
import { ManaPerChanneler } from "../rules/production";
import ChannelerState from "../state/atoms/channelerstate";
import ManaState from "../state/atoms/manastate";
import Processor from "./processor";

const ChannelerProcessor : Processor = (deltaTime) => {
  const channelers = getRecoil(ChannelerState);
  setRecoil(ManaState, m => m.plus(
    channelers.multiply(deltaTime).multiply(ManaPerChanneler)
  ));
};

export default ChannelerProcessor;