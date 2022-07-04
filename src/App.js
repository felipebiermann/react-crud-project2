import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { LoginPage } from "./Pages/LoginPage";
import { DetailsPage } from "./Pages/DetailsPage";
import { EditProfile } from "./Pages/EditProfile";
import { NotFound } from "./Pages/NotFound";
import { ApiPage } from "./Pages/ApiPage";
import { AuthPage } from "./Pages/AuthPage";
// import { ApiPage } from "./Pages/ApiPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login-page" element={<LoginPage />} />
        <Route path="/profile/:_id" element={<DetailsPage />} />
        <Route path="/edit-profile/:_id" element={<EditProfile />} />
        <Route path="/api-page" element={<ApiPage />} />
        <Route path="/auth-page" element={<AuthPage />} />
        <Route path="*" element={<NotFound />} />

        {/* <Route path="/api-page" element={<ApiPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
