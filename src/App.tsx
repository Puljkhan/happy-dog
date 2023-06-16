import { createBrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import NoMatch from "./features/no-match/no-match";
import "./styles/styles.scss";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
