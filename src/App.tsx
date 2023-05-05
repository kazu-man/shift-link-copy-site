import useCursorCircle from "./components/hooks/useCursorAnimation";
import Header from "./components/molacules/Header";
import About from "./components/organisms/About";
import Top from "./components/organisms/Top";
import Services from "./components/organisms/Services";
import ToggleAbout from "./components/organisms/ToggleAbout";

function App() {
  const { transformCursor, ref, cursorCircle } = useCursorCircle();

  return (
    <div ref={ref}>
      {cursorCircle}
      <Header cursorAction={{ transformCursor }} />
      <Top />
      <About />
      <Services />
      <ToggleAbout />
    </div>
  );
}

export default App;
