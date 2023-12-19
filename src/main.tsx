import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="w-full min-h-screen flex flex-col items-stretch justify-between">
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  </React.StrictMode>
);
