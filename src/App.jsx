import CampaignIdeasPage from "./pages/CampaignIdeasPage";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/campaign-ideas" element={<CampaignIdeasPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
