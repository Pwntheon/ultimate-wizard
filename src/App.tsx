import { RecoilRoot } from "recoil";
import RecoilNexus from "recoil-nexus";

import Population from "./panels/population/Population";
import TempActions from "./panels/controls/tempactions";
import { EngineContextProvider } from "./game/engineprovider";
import BasicResources from "./panels/economy/basicResources";

function App() {

  return (
    <RecoilRoot>
      <RecoilNexus />
      <EngineContextProvider>
        <Population />
        <BasicResources />
        <TempActions />
      </EngineContextProvider>
    </RecoilRoot>
  );
}

export default App;
