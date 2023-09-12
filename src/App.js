import "./App.css";
import { Routes, Route } from "react-router-dom";
import { LandingPage, PaymentPage } from "./pages/page-index";

function App() {
  return (
    <div className="h-screen w-screen flex max-sm:flex-col">
      {/* <LandingPage/> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/payment-page" element={<PaymentPage />} />
      </Routes>
    </div>
  );
}

export default App;
