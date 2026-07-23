import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Upload from "./pages/Upload";
import VideoDetails from "./pages/VideoDetails";
import Notes from "./pages/Notes";
import Quiz from "./pages/Quiz";
import Flashcards from "./pages/Flashcards";
import Chat from "./pages/Chat";
import History from "./pages/History";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

function AppRoutes() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Private */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/video/:id" element={<VideoDetails />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/flashcards" element={<Flashcards />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/history" element={<History />} />
      <Route path="/profile" element={<Profile />} />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;