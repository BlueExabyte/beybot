
let ship1 = document.getElementById("ship1_container");
let ship2 = document.getElementById("ship2_container");

let pos1 = Math.floor(Math.random() * 1080);
let pos2 = Math.floor(Math.random() * 1080);

console.log("position1", pos1);
console.log("position2", pos2);

ship1.style.top = "pos1";
ship2.style.top = "pos2";