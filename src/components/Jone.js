import React, { useEffect } from "react";
import "./style.css";

function Jone() {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5000/get");
                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []); // The empty dependency array ensures that the effect runs only once when the component mounts.

    return (
        <>
            <nav className="navbar" style={{ backgroundColor: "blue" }}>
                <p>hi</p>
                <p>hi</p>
                <p>hi</p>
            </nav>
        </>
    );
}

export default Jone;
