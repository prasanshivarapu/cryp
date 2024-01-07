import React, { useState } from "react";

function Signup2() {
    const [firstvalue, setfirst] = useState("");
    const [secondvalue, setsecond] = useState("");
    const [suc, setsuc] = useState("");
    const [prasan, setasdf] = useState("");
    const first = (event) => {
        setfirst(event.target.value);
    };
    const second = (event) => {
        setsecond(event.target.value);
    };
    const sub = async (event) => {
        event.preventDefault();

        const formData = {
            firstvalue,
            secondvalue,
        };
        try {
            const response = await fetch("http://localhost:5000/get", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                // Handle success
                const data = await response.json();
                console.log("Full Response:", data);
                setsuc(data.message); // Assuming there is a 'message' property in your success response
                // Clear any previous error
            } else {
                // Handle error
                const errorData = await response.json();
                console.error("Error Response:", errorData);
                setasdf(errorData.error); // Assuming there is a 'message' property in your error response
                // Clear any previous success message
            }
        } catch (error) {
            console.log(error);
        }
        console.log(formData);
        setfirst("");
        setsecond("");
    };
    return (
        <div>
            <form onSubmit={sub}>
                <input type="text" value={firstvalue} onChange={first} />
                <input type="password" value={secondvalue} onChange={second} />
                <button type="submit">submit</button>
                <span style={{ color: "green" }}>{suc}</span>
                <span style={{ color: "red" }}>{prasan}</span>
            </form>
        </div>
    );
}

export default Signup2;
