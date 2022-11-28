import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./pages/App";
import Login from "./pages/auth/Login";
import { ThemeProvider } from "./ThemeProvider";

const Mystic = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<App />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<Mystic />);
