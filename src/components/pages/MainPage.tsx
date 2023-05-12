import { createContext } from "react";
import useCursorCircle, {
  cursorActionFuncType,
} from "../hooks/useCursorAnimation";
import useTextColorChange, {
  gradientColorType,
} from "../hooks/useTextColorChange";
import Header from "../molecules/Header";
import About from "../organisms/About";
import Contact from "../organisms/Contact";
import Services from "../organisms/Services";
import ShowCases from "../organisms/ShowCases";
import Teams from "../organisms/Teams";
import ToggleAbout from "../organisms/ToggleAbout";
import Top from "../organisms/Top";
import Vision from "../organisms/Vision";

//contextの作成
export const ScrollGradientColorContext = createContext<gradientColorType>(
  {} as gradientColorType
);
export const CursorContext = createContext<cursorActionFuncType>(
  {} as cursorActionFuncType
);

export default function MainPage() {
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
