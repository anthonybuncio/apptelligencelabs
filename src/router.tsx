import { createBrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./Home";
import Team from "./pages/Team";
import Terms from "./pages/ServiceTerms";
import CookiePolicy from "./pages/CookiePolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Apps from "./pages/services/Apps";
import Ecommerce from "./pages/services/Ecommerce";
import Analytics from "./pages/services/Analytics";
import Consulting from "./pages/services/Consulting";
import Cloud from "./pages/services/Cloud";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/team",
    element: <Team />,
  },
  {
    path: "/privacy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/cookies",
    element: <CookiePolicy />,
  },
  {
    path: "/terms",
    element: <Terms />,
  },
  {
    path: "/apps",
    element: <Apps />,
  },
  {
    path: "/ecommerce",
    element: <Ecommerce />,
  },
  {
    path: "/analytics",
    element: <Analytics />,
  },
  {
    path: "/consulting",
    element: <Consulting />,
  },
  {
    path: "/cloud",
    element: <Cloud />,
  },
]);
