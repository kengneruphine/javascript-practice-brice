const http = require("http")

function readString(stream, call){
    var value = "";
    stream.on("data", (buffer) => {
        value += buffer;
    });
    stream.on('end', () => {
        call(null, value);
    });
    stream.on('err', () => {
        call(err);
    });
}

var types = ["text/plain", 'text/html','application/jason'];

for (var type in types){
    http.request({
        hostname: 'eloquentjavascript.net',
        path: '/Chapter-20-Nodejs',
        headers: {Accept: type}
    }, (res) => {
        if (res.statusCode != 200){
            console.log("Request for " + type + ' failed:');
            return;
        }
        readString(res, (err, value) => {
            if(err)
                console.log("The was an error" + err);
        });
    }).end();
}

//I learned about arrow functions in a tutorail video i watched thought it would e nice to apply it.