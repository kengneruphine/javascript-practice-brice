var terms = ["for","if","function","prototype","else", "while", "do", "forEach", "in", "indexOf", "lastIndexOf",
"slice", "charAt", "var", "const", "let", "return", "console"];
var code = document.getElementById("code");
var suggestions = document.getElementById("suggest");
code.addEventListener("input", function(){
    var matching = terms.filter(function(term){
        return term.indexOf(code.value);
    });
    suggestions.textContent = "";
    matching.slice(0, 20).forEach(function(term){
        var node = document.createElement("p");
        node.textContent = term;
        node.addEventListener("click", function(){
            code.value = term;
            suggestions.textContent = "";
        })
        suggestions.appendChild(node);
    })
})

document.getElementById("run").addEventListener("click", function(){
    var output = document.getElementById("result");
    try {
        var result = new Function(code.value)();
        console.log(String(result));
        output.innerText = String(result);
    }
    catch (e){
        output.innerText = "Error" + e;
    }
});