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
import Vision from "./components/organisms/Vision";
import Teams from "./components/organisms/Teams";
import Contact from "./components/organisms/Contact";
import useTextColorChange, {
  gradientColorType,
} from "./components/hooks/useTextColorChange";
export const CursorContext = createContext<cursorActionFuncType>(
  {} as cursorActionFuncType
);
export const ScrollGradientColorContext = createContext<gradientColorType>(
  {} as gradientColorType
);

function App() {
  const gradientColor = useTextColorChange();
  const { transformCursor, ref, cursorCircle } = useCursorCircle(gradientColor);
  return (
    <div ref={ref}>
      <CursorContext.Provider value={transformCursor}>
        <ScrollGradientColorContext.Provider value={gradientColor}>
          {cursorCircle}
          <Header />
          <Top />
          <About />
          <Services />
          <ToggleAbout />
          <ShowCases />
          <Vision />
          <Teams />
          <Contact />
        </ScrollGradientColorContext.Provider>
      </CursorContext.Provider>
    </div>
  );
}

export default App;
