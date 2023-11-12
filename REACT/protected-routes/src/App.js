import "./App.css";
import { Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import { Dashboard } from "./pages/Dashboard";
import { Auth } from "./pages/Auth";
import { useEffect, useState } from "react";
function App() {
  const [user, setUser] = useState(null);

  // useEffect for get user
  useEffect(() => {
    const u = localStorage.getItem("user");
    u & JSON.parse(u) ? setUser(true) : setUser(false);
  }, []);
  // for set user
  useEffect(() => {
    localStorage.setItem("user", user);
  }, [user]);
  const handleLogout = () => {};
  return (
    <>
      <Routes>
        {!user && (
          <Route path="/" element={<Auth auth={() => setUser(true)} />} />
        )}
        {user && (
          <>
            <Route
              path="/profile"
              element={<Profile handleLogout={handleLogout} />}
            />
            <Route path="/dashboard" element={<Dashboard />} />
          </>
        )}

        {!user && <Route path="*" element={<h1> Page Not Found</h1>} />}
      </Routes>
    </>
  );
}

export default App;
