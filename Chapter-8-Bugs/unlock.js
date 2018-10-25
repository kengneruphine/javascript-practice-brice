var box = {
    locked: true,
    unlock: function() {this.locked = false;},
    lock: function() {this.locked = true; },
    _content: [],
    get content() {
        if (this.locked) throw new Error("Locked!");
        return this._content;
    }
};

function unLock(name) {
    try {
        box.locked = false;
        name();
    }finally {
        box.locked = true;
    }
}
try {
    unLock(function() {
        throw new Error("something is wrong with the name function")
    })
} catch(e) {
    console.log(e);
}
console.log(box.locked)