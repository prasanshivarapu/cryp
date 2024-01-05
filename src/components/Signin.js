import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signin() {
    const [set, firsts] = useState("");
    const [set2, sec] = useState("");
    const [set3, third] = useState("");
    const navigate = useNavigate();
    const first = (event) => {
        firsts(event.target.value);
    };
    const second = (event) => {
        sec(event.target.value);
    };
    const sub = async (event) => {
        event.preventDefault();
        const formData = {
            set,
            set2,
        };
        try {
            const response = await fetch("http://localhost:5000/getdata", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            console.log(data);
            if (response.ok) {
                navigate("/wel");
                console.log("Data successfully sent to the backend");
            } else {
                console.error("Failed to send data to the backend");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div>
            <form onSubmit={sub}>
                <input type="text" onChange={first} />
                <input type="password" onChange={second} />
                <button type="submit">submit</button>
            </form>
        </div>
    );
}

export default Signin;
