import React, { useState } from "react";

function Signin2() {
    const [firstvalue, setfirst] = useState("");
    const [secondvalue, setsecond] = useState("");
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
            const response = await fetch("http://localhost:5000/data", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                console.log(formData);
                setfirst("");
                setsecond("");
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
            </form>
        </div>
    );
}

export default Signin2;
