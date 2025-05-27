// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./component/Sidebar";
import Dashboard from "./pages/Dashboard";
import Employe from "./pages/Employe";
import Asset from "./pages/Asset";
import Role from "./pages/Role";
// import Reports from "./pages/Reports";
// import Settings from "./pages/Settings";

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 overflow-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/employees" element={<Employe />} />
            <Route path="/assets" element={<Asset />} />
            <Route path="/roles" element={<Role />} />
            {/* <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;