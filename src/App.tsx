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
import Guidelines from "./Components/policies-components/Guidelines";
import RefundPolicy from "./Components/policies-components/RefundPolicy";
import SafetyPolicy from "./Components/policies-components/SafetyPolicy";
import Investor from "./Pages/Investor";
import Career from "./Pages/Careers";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blogs";
import Overview from "./Components/investor-components/Overview";
import Opportunity from "./Components/investor-components/Opportunity";
import ProblemSolution from "./Components/investor-components/ProblemSolution";
import FinancialSnapshot from "./Components/investor-components/FinancialSnapshot";
import InvestorContact from "./Components/investor-components/InvestorContact";
import BlogDetail from "./Pages/BlogDetail";

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
            <Route path="guidelines" element={<Guidelines />} />
            <Route path="refund" element={<RefundPolicy />} />
            <Route path="safety" element={<SafetyPolicy />} />
          </Route>
          <Route path="investor" element={<Investor />}>
            <Route index element={<Overview />} />
            <Route path="opportunity" element={<Opportunity />} />
            <Route path="problem-solution" element={<ProblemSolution />} />
            <Route path="financial-snapshot" element={<FinancialSnapshot />} />
            <Route path="contact" element={<InvestorContact />} />
          </Route>
          <Route path="careers" element={<Career />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blogs" element={<Blog />}/>
            <Route path="blogs/detail/:id" element={<BlogDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
