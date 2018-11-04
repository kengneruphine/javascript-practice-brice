var MOUNTAINS = [
    { name: "Kilimanjaro", height: 5895, country: "Tanzania" },
    { name: "Everest", height: 8848, country: "Nepal" },
    { name: "Mount Fuji", height: 3776, country: "Japan" },
    { name: "Mont Blanc", height: 4808, country: "Italy/France" },
    { name: "Vaalserberg", height: 323, country: "Netherlands" },
    { name: "Denali", height: 6168, country: "United States" },
    { name: "Popocatepetl", height: 5465, country: "Mexico" }
];

function createTable(mountains) {
    var props = Object.keys(mountains[0]);
    console.log(props)
    var table = document.createElement("table");
    for (var i = 0; i < mountains.length; i++) {
        var row = mountains[i];
        var tableR = document.createElement("tr");
        table.appendChild(tableR);
        for (var j = 0; j < props.length; j++) {
            var strng = props[j];
            var tableD = document.createElement("td");
            if (j == 1)
                tableD.style.textAlign = "right";
            tableR.appendChild(tableD);
            var data = document.createTextNode(row[strng]);
            tableD.appendChild(data);
        }
    }
    return table;
}

document.getElementById("table").appendChild(
    createTable(MOUNTAINS));