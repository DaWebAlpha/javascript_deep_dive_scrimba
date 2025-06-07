//Arrow Functions

/*
function capitalized(name){
    return `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
}

console.log(capitalized("michael"));

*/

/*
const capitalized = function(name){
    return `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
}

console.log(capitalized("tichael"));

*/

/*
const capitalized = (name) =>{
    return `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
}
console.log(capitalized('michael'));

*/

const capitalized = (name) => `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
console.log(capitalized('tommichael'));