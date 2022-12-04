import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./ThemeProvider";
import { AuthProvider, RequireAuth } from "react-auth-kit";
import App from "./pages/App";
import Login from "./pages/auth/Login";
import Guild from "./pages/guild/index";

const Mystic = () => {
  return (
    <ThemeProvider>
      <AuthProvider
        authType="cookie"
        authName="_auth_t"
        cookieDomain={window.location.hostname}
        cookieSecure={window.location.protocol === "https:"}
      >
        <BrowserRouter>
          <Routes>
            <Route index element={<App />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/guild"
              element={
                <RequireAuth loginPath={"/login"}>
                  <Guild />
                </RequireAuth>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<Mystic />);
