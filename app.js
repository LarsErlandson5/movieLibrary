$(document).ready(function () {
    $.ajax({
        url: "http://www.devcodecampmusiclibrary.com/api/music",
        dataType: "json",
        type: 'get',
        success: function (data, testStatus, jQxhr) {
            console.log(data[1]);
            musicTable = buildTable(data)
        }
    });
})

function buildTable(input) {
    let table = document.getElementById("musicTable")
    let row=""
    for (let i = 0; i < input.length; i++) {
        row += `<tr>
            <td>${input[i].title}</td>
            <td>${input[i].album}</td>
            <td>${input[i].artist}</td>
            <td>${input[i].genre}</td>
            <td>${input[i].releaseDate}</td>

        </tr>`

    }
table.innerHTML = row;
}
// test test
