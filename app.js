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
    $("#search-input").on('keyup',function(){
      console.log("isworking")
      let value = $(this).val()
      console.log(value)

      //buildTable(movieArray)
    })
})

function buildTable(movieArray){
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

