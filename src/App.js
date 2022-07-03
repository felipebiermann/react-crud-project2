import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { LoginPage } from "./Pages/LoginPage";
import { DetailsPage } from "./Pages/DetailsPage";
import { EditProfile } from "./Pages/EditProfile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login-page" element={<LoginPage />} />
        <Route path="/profile/:_id" element={<DetailsPage />} />
        <Route path="/edit-profile/:_id" element={<EditProfile />} />
      </Routes>
    </>
  );
}

export default App;
