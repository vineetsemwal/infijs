var user = { username: "ashutosh", age: 25, salary: undefined, designation: undefined };

for (var key in user) {
    console.log("key is ", key);
    var fieldVal = user[key];
    console.log("field value", fieldVal);
}

function fetchUndefinedField(objArg) {
    const keys = [];
    for (var key in objArg) {
        var val = objArg[key];
        if (val == undefined) {
            keys.push(key)
        }
    }
    return keys;
}


const undefinedKeys=fetchUndefinedField(user);
console.log("undefiend keys", undefinedKeys);