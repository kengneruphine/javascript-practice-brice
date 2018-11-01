
function TagName(node, tagname) {
    var array = [];
    tagname = tagname.toUpperCase();

    function find(node) {
        for (var i = 0; i < node.childNodes.length; i++) {
            var child = node.childNodes[i];
            if (child.nodeType == document.ELEMENT_NODE) {
                if (child.nodeName == tagname)
                    array.push(child);
                find(child);
            }
        }
    }
    find(node);
    return array;
}

console.log(TagName(document.body, "p").length)