var cors = require("cors");
const repoContext = require("./repository/repository-wrapper.js");
const express = require('express');
const app = express();
const validators = require("./validators/custom-validations.js");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use((req, res, next) => validators.body(req, res, next));
app.listen(3000, function () {
    console.log("Server started. Listening on port 3000.");
});
app.get("/api/movies", (req, res) => {
    let movies = repoContext.movies.findAllProducts();
    res.send(movies);
})
app.get("/api/movies/:id", (req, res) => {
    let id = req.params.id;
    let movies = repoContext.movies.findProductById(id);
    res.send(movies);
})
app.post("/api/movies", (req, res) => {
    let newMovies = req.body;
    let addedMovies = repoContext.movies.createProduct(newProduct);
    res.send(addedProduct);
   });
app.put("/api/products", (req, res) => {
    let productToUpdate = req.body;
    let updatedmovies = repoContext.movies.updateProduct(productToUpdate);
    res.send(updatedmovies);
   });
   app.delete("/api/products/:id", (req, res) => {
    let id = req.params.id;
    let updatedDataSet =  repoContext.movies.deleteProduct(id);
    res.send(updatedDataSet);
   });
   