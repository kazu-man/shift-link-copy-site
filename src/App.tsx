import { useEffect, useState } from "react";
import BackgroundAnimation from "./components/organisms/BackgroundAnimation";
import Loading from "./components/organisms/Loading";
import MainPage from "./components/pages/MainPage";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <Loading loading={loading} />
      <BackgroundAnimation />
      {!loading && <MainPage />}
    </>
  );
}

export default App;
