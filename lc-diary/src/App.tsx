import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ProfilePage from "./pages/ProfilePage";
import CreateListPage from "./pages/CreateListPage";
import ListPage from "./pages/ListPage";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/createList" element={<CreateListPage />} />
          <Route path="/list/:id" element={<ListPage />} />
        </Routes>
      </Router>
      <Toaster />
    </>
  );
}

export default App;
