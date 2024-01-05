import { Routes, Route } from "react-router-dom";
import "./App.css";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Welcome from "./components/Welcome";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Signup />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/wel" element={<Welcome />} />
            </Routes>
        </div>
    );
}

export default App;
