import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ProfilePage from "./pages/ProfilePage";
import CreateListPage from "./pages/CreateListPage";
import ListPage from "./pages/ListPage";
import EditListPage from "./pages/EditListPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/createList" element={<CreateListPage />} />
          <Route path="/list/:id" element={<ListPage />} />
          <Route path="/list/edit/:name" element={<EditListPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
