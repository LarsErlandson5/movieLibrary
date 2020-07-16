$(document).ready (function () {
    $.ajax({
        url: "http://localhost:3000/api/movies",
        dataType: "json",
        type: 'get',
        success: function (response) {
          movieArray = response
          movieTable = buildTable(movieArray)

        }
    });
})

function buildTable(movieArray)
    let makeTable = document.getElementById("movieTable")

    let table = document.getElementById("movieTable")
    let row = ""
    for (let i = 0; i < movieArray.length; i++) {
            row += `<tr>
            <td>${movieArray[i].title}</td>
            <td>${movieArray[i].director}</td>
            <td>${movieArray[i].genre}</td>
              </tr>`

    }
     table.innerHTML = row
}
//PUT function
//Need to add id for event handler
$("#").submit(editMovies);

function editMovies(event){
let moviesUpdate = {
  id: parseInt (this.["id"].value),
  title: this.["title"].value,
  director: this.["director"].value,
  genre: this.["genre"].value,
}
$(document).ready(function() {
$.ajax({
url: "http://localhost:3000/api/movies",
dataType: "json",
type: 'put',
data: JSON.stringify(moviesUpdate),
success: function (data) {
  alert("Update successful!")
  buildTable(movieArray);
}




});
})
// POST function
//Need to add id for event handler
$("#").submit(addMovies);
function addMovies(event){
let moviesInfoCreated = {
  id: parseInt (this.["id"].value),
  title: this.["title"].value,
  director: this.["director"].value,
  genre: this.["genre"].value,
}
$(document).ready( function() {
$.ajax({
url: "http://localhost:3000/api/movies",
dataType: "json",
type: 'post',
data: JSON.stringify(moviesInfoCreated),
success: function (data) {
  alert("Update successful!")
  buildTable(movieArray);
}




});
})
