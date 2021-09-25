var collection = {
    2548: {
        album: "Slippery When Wet",
        artist: "Bon Jovi",
        tracks: [
            "let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    2468: {
        album: "1999",
        artist: "Prince",
        tracks: [
            "1999",
            "Little Red Corvette"
        ]
    },
    1245: {
        artist: "Robert Palmer",
        tracks: []
    },
    5439: {
        album: "ABBA Gold"
    }
};

// Keep a copy of the collection for tests
var oldCollection = JSON.parse(JSON.stringify(collection));

function updateRecords(object, id, prop, value) {
    // Only change code below this line
    if (object[id].hasOwnProperty(prop)) {
        if (value) {
            if (prop === "tracks") {
                object[id][prop].push(value)
            } else {
                object[id][prop] = value;
            }
        } else {
            delete object[id][prop]
        }
    } else {
        if (prop === "tracks") {
            object[id][prop] = [];
            object[id][prop].push(value);
        } else {
            object[id][prop] = value;
        }
    }
    return object;
    // Only change code above this line
}

console.log(updateRecords(collection, 5439, "artist", "ABBA")); // Change this line
module.exports = updateRecords;