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

function buildTable(movieArray) {
<<<<<<< HEAD
    let makeTable = document.getElementById("movieTable")
=======
    let table = document.getElementById("movieTable")
    let row = ""
>>>>>>> 0b86fad5033bdccf732ea39bf3af0dfba529437c
    for (let i = 0; i < movieArray.length; i++) {
            row += `<tr>
            <td>${movieArray[i].title}</td>
            <td>${movieArray[i].director}</td>
            <td>${movieArray[i].genre}</td>
              </tr>`
           
    }
     table.innerHTML = row
}
