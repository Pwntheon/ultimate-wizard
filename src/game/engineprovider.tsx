import React, { useEffect, useState } from "react";
import Engine from "./engine";
import GeneralSettings from "./settings/generalsettings";
import Processors from "./processors";

export interface EngineContextInterface {
  engine: Engine
}

export interface EngineContextProviderProps {
  children: React.ReactNode
}

export const EngineContext = React.createContext<EngineContextInterface | null>(null);

export function EngineContextProvider({ children }: EngineContextProviderProps) {
  const [contextValue] = useState({ engine: new Engine(GeneralSettings.framerate) });
  useEffect(() => {
    Processors.forEach(p => contextValue.engine.addProcessor(p));
    contextValue.engine.start();
    return () => contextValue.engine.cleanup();
  }, []);

  return <EngineContext.Provider value={contextValue}>{children}</EngineContext.Provider>;
}