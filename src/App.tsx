import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Contact from "./features/contact/contact";
import Home from "./features/home/home";
import NoMatch from "./features/no-match/no-match";
import "./styles/styles.scss";
import LoaderPage from "./features/loader/loader-page";
import SelectPage from "./features/select/select-page";
import Animals from "./features/animals/animals";
import ProgressBarPage from "./features/progress-bar-page/progress-bar-page";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="progress-bar" element={<ProgressBarPage />} />
          <Route path="loader" element={<LoaderPage />} />
          <Route path="select" element={<SelectPage />} />
          <Route path="animals">
            <Route index element={<Animals />} />
          </Route>

          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
