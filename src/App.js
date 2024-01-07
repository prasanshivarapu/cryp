import { Routes, Route } from "react-router-dom";
import "./App.css";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Welcome from "./components/Welcome";
import Signin2 from "./components/Signin2";
import Signup2 from "./components/Signup2";
import Data from "./components/Data";
import Jone from "./components/Jone";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Signup />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/wel" element={<Welcome />} />
                <Route path="/2" element={<Signin2 />} />
                <Route path="/3" element={<Signup2 />} />
                <Route path="/4" element={<Data />} />
                <Route path="/jone" element={<Jone />} />
            </Routes>
        </div>
    );
}

export default App;
