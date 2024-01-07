import React, { useState, useEffect } from "react";

function Data() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5000/getdata");
                const data = await response.json();

                if (response.ok) {
                    console.log(data);
                    setData(data);
                } else {
                    console.log(
                        "Network response was not ok:",
                        response.status,
                        response.statusText,
                    );
                }
            } catch (error) {
                console.log(
                    "There was a problem with the fetch operation:",
                    error,
                );
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1 className="text-center">Data List</h1>

            <table className="table">
                <thead>
                    <tr className="table-dark">
                        <th scope="col">First name</th>
                        <th scope="col">Last name</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr className="table-success" key={item.id}>
                            <td>{item.first}</td>
                            <td>{item.second}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Data;
