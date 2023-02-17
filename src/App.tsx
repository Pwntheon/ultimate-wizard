import { RecoilRoot } from 'recoil';

import TestContainer from './testcontainer'
import TestComp from './testcomp'
import Villagers from './panels/villagers/villagers'
import TempActions from './panels/controls/tempactions';
import { EngineContextProvider } from './game/engineprovider';

function App() {

  return (
    <RecoilRoot>
      <EngineContextProvider>
        <Villagers />
        <TempActions />
        <TestContainer>
          <TestComp text="Hello from inner comp" />
        </TestContainer>
      </EngineContextProvider>
    </RecoilRoot>
  )
}

export default App
