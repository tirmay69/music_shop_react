const mysql = require("mysql2");
const cors = require("cors");
const path = require("path");
const express = require("express");
const { error } = require("console");

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE"],
    withCredentials: true,
  })
);

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  port: 3307,
  database: "music_items",
});

connection.connect((err) => {
  if (err) {
    console.error("Помилка підключення до бази даних:", err);
    return;
  }
  console.log("Підключено до бази даних MySQL");
});
// TODO 7. Додати фільм до бази даних
app.post("/api/filmData", (req, res) => {
  const sql = `INSERT INTO music (discount, crossed_price, price, name, image) VALUES (?, ?, ?, ?, ?)`;
  const values = [
    req.body.discount,
    req.body.crossed_price,
    req.body.price,
    req.body.name,
    req.body.image,
  ];

  connection.query(sql, values, (error, result) => {
    if (error) {
      res.send(error);
      return;
    }
    res.send(req.body);
  });
});
// TODO 3. Отримати список коментарів до фільму
// app.get("/api/comments/:film", (req, res) => {
//   const sql = `SELECT comments.userName, comments.commentText, comments.commentDate
//                  FROM comments
//                  WHERE comments.filmName = '${decodeURI(req.params.film)}'`;
//   connection.query(sql, (error, result) => {
//     if (error) {
//       res.status(502).send("Помилка отримання даних");
//       return;
//     }
//     res.json(result);
//   });
// });

app.get("/", (req, res) => {
  const sql = `SELECT * FROM music`;
  connection.query(sql, (error, result) => {
    if (error) {
      res.status(502).send("Помилка отримання даних");
      return;
    }
    res.json(result);
  });
});

const port = process.env.port || 8080;

app.listen(port, () => {
  console.log(`http://127.0.0.1:${port}/`);
});
