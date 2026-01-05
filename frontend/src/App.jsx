import { Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Home from "./Home/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./NotFound/NotFound";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
