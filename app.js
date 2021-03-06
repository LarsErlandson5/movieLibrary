
$(document).ready (function () {
    $.ajax({
        url: "http://localhost:3000/api/movies",
        dataType: "json",
        type: 'get',
        success: function (response) {
          movieArray = response
          movieTable = buildTable(movieArray)


        }
    });  $("goput").submit(editMovies);
         $("go").submit(addMovies);
         $("#search-input").on('keyup',function(){
          let value = $(this).val()
          let data = searchTable(value,movieArray)
          buildTable(data)
         })
    


})




function editMovies(){
  event.preventDefault();
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





function addMovies(){
  event.preventDefault();
let moviesInfoCreated = {
  title: this["title"].value,
  director: this["director"].value,
  genre: this["genre"].value,

}

$(document).ready( function() {
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

    });
  })
}

function buildTable(movieArray){
  let makeTable = document.getElementById("movieTable")

  let table = document.getElementById("movieTable")
  let row = ""
  for (let i = 0; i < movieArray.length; i++) {
          row += `<tr>
          <td>${movieArray[i].id}</td>
          <td>${movieArray[i].title}</td>
          <td>${movieArray[i].director}</td>
          <td>${movieArray[i].genre}</td>
            </tr>`

  }
   table.innerHTML = row
}

function searchTable(value, data){
  let filteredData = []
  for (let i=0; i<data.length; i++){
    value = value.toLowerCase()
    let name = data[i].title.toLowerCase()
    if (name.includes(value)){
      filteredData.push(data[i])
    }

  }
  return filteredData;
}