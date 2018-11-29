function read_file(url, callback){
    var  file = new XMLHttpRequest();
    file.open("GET", url, true);
    file.addEventListener("load", function(){
        if(file.status < 400) // Here I check if the file has been loaded without errors
        callback(file.responseText);
    });
    file.send(null);
}

function getUrl(url, callback){
    var file = new XMLHttpRequest();
    file.open("GET", url, true);
    file.addEventListener("load", function(){
        if(file.status < 400)
            callback(file.responseText);
        else
            callback(null, new Error("Request failed: " + file.statusText));
    });
    file.addEventListener("error", function(){
        callback(null, new Error("Network error"));
    });
    file.send(null);
}

function get(url){
    return new Promise(function(succeed, fail){
        var file = new XMLHttpRequest();
        file.open("GET", url, true);
        file.addEventListener("load", function(){
            if(requestAnimationFrame.status < 400)
                succeed(file.responseText);
            else   
                fail(new Error("Request failed:" + file.statusText));
        });
        file.addEventListener("error", function(){
            fail(new Error("Network error"));
        });
        file.send(null);
    });
}

function getJSOM(url) {
    return get(url).then(JSON.parse);
}