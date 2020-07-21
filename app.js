
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
    $("goput").submit(addMovies);

})


<<<<<<< HEAD
function buildTable(movieArray){
    let makeTable = document.getElementById("movieTable")
    let table = document.getElementById("movieTable")
    let row = ""
    for (let i = 0; i < movieArray.length; i++) {
            row += `<tr>
            <td>${movieArray[i].title}</td>
            <td>${movieArray[i].director}</td>
            <td>${movieArray[i].genre}</td>
            <td>${movieArray[i].image}</td>
              </tr>`

    }
     table.innerHTML = row
}

=======
>>>>>>> d68a84dc2ec5bfab33f8515cde4f3948397afd97

$("goput").submit(editMovies);
function editMovies(e){
let moviesUpdate = {
 id: parseInt (this["id"].value),
  title: this["title"].value,
 director: this["director"].value,
 genre: this["genre"].value,
 }

 $(document).ready(function() {
$.ajax({
url: "http://localhost:3000/api/movies",
dataType: "json",
contentType: "application/json",
type: 'put',
data: JSON.stringify(moviesUpdate),
success: function (data) {
  alert("Update successful!")
  buildTable(movieArray)
}
});
 });
}




<<<<<<< HEAD
});
})

$("go").submit(addMovies);
function addMovies(event){
=======

function addMovies(){
  event.preventDefault();

  console.log("HELLO");
>>>>>>> d68a84dc2ec5bfab33f8515cde4f3948397afd97
let moviesInfoCreated = {
  title: this["title"].value,
  director: this["director"].value,
  genre: this["Genre"].value,

}
console.log('movie', moviesInfoCreated);
$(document).ready( function() {
<<<<<<< HEAD
$.ajax({
url: "http://localhost:3000/api/movies",
dataType: "json",
type: 'post',
data: JSON.stringify(moviesInfoCreated),
success: function (data) {
  alert("Update successful!")
  buildTable(movieArray)
}


=======
  $.ajax({
    url: "http://localhost:3000/api/movies",
    dataType: "json",
    contentType: "application/json",
    type: 'post',
    data: JSON.stringify(moviesInfoCreated),
    success: function (data) {
      alert("Update successful!")
      buildTable(movieArray);
    }
>>>>>>> d68a84dc2ec5bfab33f8515cde4f3948397afd97

    });
  })
}

function buildTable(movieArray){
  let makeTable = document.getElementById("movieTable")

  let table = document.getElementById("movieTable")
  let row = ""
  for (let i = 0; i < movieArray.length; i++) {
          row += `<tr>
          <td>${movieArray[i].title}</td>
          <td>${movieArray[i].director}</td>
          <td>${movieArray[i].genre}</td>
          <td>${movieArray[i].image}</td>
            </tr>`

  }
   table.innerHTML = row
}