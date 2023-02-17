import React, { useEffect, useState } from "react";
import Engine from "./engine";
import GeneralSettings from "./settings/generalsettings";

export interface EngineContextInterface {
  engine: Engine
}

export interface EngineContextProviderProps {
  children: React.ReactNode
}

export const EngineContext = React.createContext({ engine: new Engine(30) });

export function EngineContextProvider({ children }: EngineContextProviderProps) {
  const [contextValue] = useState({ engine: new Engine(GeneralSettings.framerate) });
  useEffect(() => {
    contextValue.engine.start();
    return () => contextValue.engine.cleanup();
  }, [contextValue]);

  return (
    <EngineContext.Provider value={contextValue}>{children}</EngineContext.Provider>
  );
}