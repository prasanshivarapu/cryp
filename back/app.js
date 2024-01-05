const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const { Pool } = require("pg");
const cors = require("cors");
// const jwt = require("jsonwebtoken");

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "reactdb",
    password: "123456",
    port: 5432,
});

app.use(express.json());
app.use(
    cors({
        origin: "*",
    }),
);
let a;
let b;
app.post("/storedata", (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    console.log(req.body);
    console.log(firstName);
    pool.query(
        "INSERT INTO filedata (firstname, lastname, email,password) VALUES ($1, $2, $3,$4)",
        [firstName, lastName, email, password],
        (error, results) => {
            if (error) {
                throw error;
            }
            res.status(201).send("Data added to the database");
        },
    );
});

app.post("/getdata", (req, res) => {
    const { set, set2 } = req.body;
    pool.query(
        "SELECT * FROM filedata WHERE email = $1 AND password = $2",
        [set, set2],
        (error, results) => {
            if (error) {
                throw error;
            }

            if (results.rows.length === 0) {
                res.status(401).json({
                    message: " Invalid email or password.",
                });
            } else {
                const user = results.rows[0];
                a = user.firstname;
                b = user.email;

                res.status(200).json({ message2: "Login successful" });
            }
        },
    );
});

app.listen(port, () => {
    console.log(port + "running");
});
// app.get("/node", (req, res) => {
//     res.send("welcome");
// });
