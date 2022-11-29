import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./ThemeProvider";
import App from "./pages/App";
import Login from "./pages/auth/Login";
import Guild from './pages/guild/index';

const Mystic = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/guild" element={<Guild />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<Mystic />);
