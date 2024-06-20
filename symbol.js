//A "symbol" represents a unique identifier.

let id = symbol("id");
let obj = {
    name: "akshat",
    [id]:1
}

console.log(obj.id);