import useCursorCircle from "./components/hooks/useCursorAnimation";
import Header from "./components/molacules/Header";
import About from "./components/organisms/About";
import Top from "./components/organisms/Top";

function App() {
  const { transformCursor, ref, cursorCircle } = useCursorCircle();

  return (
    <div ref={ref}>
      {cursorCircle}
      <Header cursorAction={{ transformCursor }} />
      <Top />
      <About />
    </div>
  );
}

export default App;
