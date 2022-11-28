import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./pages/App";

const Mystic = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<App/>} />
            </Routes>
        </BrowserRouter>
    )
}

ReactDOM.createRoot(document.getElementById("root")!).render(<Mystic/>);
