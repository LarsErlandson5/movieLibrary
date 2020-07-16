$(document).ready(function () {
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

function buildTable(movieArray) {
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
