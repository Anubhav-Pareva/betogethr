import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import MainLayout from "./Layouts/MainLayout";
import OurMission from "./Components/about-components/OurMission";
import OurStory from "./Components/about-components/OurStory";
import Teams from "./Components/about-components/Teams";
import ValueCulture from "./Components/about-components/ValueCulture";
import Achievements from "./Components/about-components/Achievements";
import Policies from "./Pages/Policies";
import Privacy from "./Components/policies-components/Privacy";
import Conditions from "./Components/policies-components/Conditions";

function App() {
  return (
    <BrowserRouter>
      {/* ✅ Route Definitions */}
      <Routes>
        {/* ✅ Wrap all routes inside layout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />}>
            {/* <Route index element={<About />} /> */}
            <Route index element={<OurMission />} />
            <Route path="our-story" element={<OurStory />} />
            <Route path="team" element={<Teams />} />
            <Route path="value-culture" element={<ValueCulture />} />
            <Route path="achievements" element={<Achievements />} />
          </Route>
          <Route path="policies" element={<Policies />}>
            <Route index element={<Privacy />} />
            <Route path="conditions" element={<Conditions />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
