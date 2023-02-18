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

export const EngineContext = React.createContext({ engine: new Engine(GeneralSettings.framerate) });

export function EngineContextProvider({ children }: EngineContextProviderProps) {
  const [contextValue] = useState({ engine: new Engine(GeneralSettings.framerate) });
  useEffect(() => {
    Processors.forEach(p => contextValue.engine.addProcessor(p));
    contextValue.engine.start();
    return () => contextValue.engine.cleanup();
  }, [contextValue]);

  return <EngineContext.Provider value={contextValue}>{children}</EngineContext.Provider>;
}