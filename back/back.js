const express = require("express");
const app = express();
const { Pool } = require("pg");
const port = process.env.PORT || 5000;
const cors = require("cors");

// const pool = new Pool({
//     user: "postgres",
//     host: "localhost",
//     database: "crypto",
//     password: "",
//     port: "5432",
// });
app.use(express.json());
app.use(
    cors({
        origin: "*",
    }),
);
const connectionString =
    "postgres://xxbgjelz:FAunzplLooXKTd_jQNDkEV0C32gy0EFy@snuffleupagus.db.elephantsql.com/xxbgjelz";

const pool = new Pool({
    connectionString: connectionString,
});
app.post("/data", (req, res) => {
    const { firstvalue, secondvalue } = req.body;

    console.log(req.body);
    console.log(firstvalue);
    pool.query(
        "INSERT INTO crypto (first,second) VALUES ($1,$2)",
        [firstvalue, secondvalue],
        (error, result) => {
            if (error) {
                throw error;
            }
            res.send("data added");
        },
    );
});
let a;
let b;

app.post("/get", (req, res) => {
    const { firstvalue, secondvalue } = req.body;
    console.log("happy", firstvalue);
    pool.query(
        "SELECT * FROM crypto  WHERE first = $1 AND second = $2",
        [firstvalue, secondvalue],
        (error, result) => {
            if (error) {
                throw error;
            }
            if (result.rows.length === 0) {
                res.status(401).json({
                    error: "Invalid email or password.",
                });
            } else {
                const user = result.rows[0];
                // a = user.firstname;
                // b = user.email;
                res.status(200).json({ message: "Login successful" });
            }
        },
    );
});
app.listen(port, () => {
    console.log(port + "running");
});

app.get("/node", (req, res) => {
    res.send("welcome back prasanna kumar");
});

app.get("/getdata", (req, res) => {
    pool.query("SELECT * FROM crypto", (error, result) => {
        if (error) {
            throw error;
        }
        res.status(200).json(result.rows);
        console.log(result.rows);
    });
});
