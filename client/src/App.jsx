import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./Pages/Profile";
import Home from "./Pages/Home";
import ListPage from "./Pages/ListPage";
import Login from "./Pages/Login";
import CreateList from "./Pages/CreateList";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Profile/:id" element={<Profile />} />
                <Route path="/List/:id" element={<ListPage />} />
                <Route path="/CreateList" element={<CreateList />} />
                <Route path="/Login" element={<Login />} />
            </Routes>
        </Router>
    );
}
