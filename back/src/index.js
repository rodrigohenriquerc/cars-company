"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const cars = [
  {
    brand: "Chevrolet",
    model: "Ônix",
    year: "2009",
    plateNumber: "ABC-1234",
    photo:
      "https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/2023-onix/gallery/01-images/01-galeria-onix-my23.jpg?imwidth=960",
  },
  {
    brand: "Volkswagen",
    model: "Gol",
    year: "2010",
    plateNumber: "DEF-5678",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Volkswagen_Gol_G7_in_Montevideo_%28cropped%29.jpg/1200px-Volkswagen_Gol_G7_in_Montevideo_%28cropped%29.jpg",
  },
];

app.get("/car", (req, res) => {
  res.send(cars);
});

app.post("/car", (req, res) => {
  const car = req.body;
  cars.push(car);
  res.send(car);
});

app.listen(3000);
