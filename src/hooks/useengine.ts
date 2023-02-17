import { EngineContext } from "@/game/engineprovider";
import { useContext } from "react";

export function useEngine() {
    return useContext(EngineContext).engine;
}