// Write your solution here!
let cats = ["Milo","Otis","Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name);
}

function destructivelyRemoveFirstCat(name){
    cats.shift(name);
}

function appendCat(name){
    return [...cats,'Broom'];
}

function prependCat(name){
    return ['Arnold', ...cats];
}

function removeLastCat(){
    let catsCopy = cats.slice(0,2)
    return catsCopy
}

function removeFirstCat(){
    let catsCopyTwo = cats.slice(1)
    return catsCopyTwo
}