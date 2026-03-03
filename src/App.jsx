import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Team from "./pages/Team";
import EventPage from "./pages/Events";
import SpeakersPage from "./pages/Speakers";
import Sponsors from "./pages/Sponsor";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"     element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/speakers" element={<SpeakersPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;