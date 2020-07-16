var cors = require("cors");
const repoContext = require("./repository/repository-wrapper.js");
const validators = require("./validators/custom-validations.js");
const express = require('express');
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use((req, res, next) => validators.body(req, res, next));
app.listen(3000, function() {
  console.log("Server started. Listening on port 3000.");

});
app.get("/api/movies", (req, res) => {
  let movies = repoContext.movies.findAllMovies();
  res.send(movies);
});
app.get("/api/movies/:id", (req, res) => {
  let id = req.params.id;
  let movies = repoContext.movies.findMoviesById(id);
  res.send(movies);
});
app.post("/api/movies", (req, res) => {
let newMovies = req.body;
let addedMovies = repoContext.movies.createMovies(newMovies);
res.send(addedMovies);
});
app.put("/api/movies", (req, res) => {
  let moviesToUpdate = req.body;
  let updatedMovies = repoContext.movies.updateMovies(moviesToUpdate);
  res.send(updatedMovies);
});
app.delete("/api/movies/:id", (req, res) => {
  let id = req.params.id;
  let updatedDataSet = repoContext.movies.deleteMovies(id);
});
