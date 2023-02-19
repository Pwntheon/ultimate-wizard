import { EngineContext } from "@/game/engineprovider";
import { useContext } from "react";

export function useEngine() {
  const context = useContext(EngineContext);
  if(context === null) throw new Error("Engine context not initialized");
  return context.engine;
}