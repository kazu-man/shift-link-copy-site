import useCursorCircle, {
  cursorActionFuncType,
} from "./components/hooks/useCursorAnimation";
import Header from "./components/molecules/Header";
import About from "./components/organisms/About";
import Top from "./components/organisms/Top";
import Services from "./components/organisms/Services";
import ToggleAbout from "./components/organisms/ToggleAbout";
import { createContext } from "react";
import ShowCases from "./components/organisms/ShowCases";
export const CursorContext = createContext<cursorActionFuncType>(
  {} as cursorActionFuncType
);

function App() {
  const { transformCursor, ref, cursorCircle } = useCursorCircle();

  return (
    <div ref={ref}>
      {cursorCircle}
      <CursorContext.Provider value={transformCursor}>
        <Header />
        <Top />
        <About />
        <Services />
        <ToggleAbout />
        <ShowCases />
      </CursorContext.Provider>
    </div>
  );
}

export default App;
