import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Privacy from "./Pages/Privacy";
import Conditions from "./Pages/Conditions";
import MainLayout from "./Layouts/MainLayout";

function App() {
  return (
    <BrowserRouter>
      {/* ✅ Route Definitions */}
      <Routes>
        {/* ✅ Wrap all routes inside layout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} /> {/* / */}
          <Route path="about" element={<About />} /> {/* /about */}
          <Route path="privacy" element={<Privacy />} /> {/* /profile */}
          <Route path="conditions" element={<Conditions />} />{" "}
          {/* /conditions */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
