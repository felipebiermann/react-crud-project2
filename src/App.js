import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { LoginPage } from "./Pages/LoginPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login-page" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
