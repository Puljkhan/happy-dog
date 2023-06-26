import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Contact from "./features/contact/contact";
import Home from "./features/home/home";
import NoMatch from "./features/no-match/no-match";
import "./styles/styles.scss";
import ProgressBarPage from "./features/progress-bar/progress-bar-page";
import SelectPage from "./features/select/select-page";
import Animals from "./features/animals/animals";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="progress-bar" element={<ProgressBarPage />} />
          <Route path="select" element={<SelectPage />} />
          <Route path="animals" element={<Animals />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
