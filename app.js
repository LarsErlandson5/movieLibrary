$(document).ready(function () {
    $.ajax({
        url: "http://localhost:3000/api/movies",
        dataType: "json",
        type: 'get',
        success: function (response) {
          movieArray = response
          buildTable(movieArray)

        }
    });
})

function buildTable(movieArray) {
    let makeTable = document.getElementById("testID")
    for (let i = 0; i < movieArray.length; i++) {
      let row = `<tr>
            <td>${movieArray[i].title}</td>
            <td>${movieArray[i].director}</td>
            <td>${movieArray[i].genre}</td>
              </tr>`
            makeTable.innerHTML += row
    }
}
// $(document).ready(function () {
//   $.ajax({
//     url: "http://localhost:3000/api/movies",
//     dataType: "json",
//     type: "put",
//     success: function ()
//
//
//   })
//
// }
