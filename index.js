/* Config */
const twitchTvHandle = "BlueExabyte";
const PAUSE_DURATION = 30 * 1000; // 30 seconds
const DISPLAY_DURATION = 10 * 1000; // 10 seconds

/* DOM */
const container = document.querySelector(".alerts");
const img = new Image();
const queue = new Queue();

let fireQueue = [];

// Resolve promise after duration
const wait = async duration => {
  return new Promise(resolve => setTimeout(resolve, duration));
};

ComfyJS.Init(twitchTvHandle);
ComfyJS.onCommand = (user, command, message, flags, extra) => {
  console.log(`!${command} was typed in chat`);

  if (command == "fire") {
    fireQueue.push(user);
  }

  console.log(fireQueue);

  if(fireQueue.length > 1) {
    let name1 = document.getElementById("name1");
    let name2 = document.getElementById("name2");

    name1.innerHTML = fireQueue[0];
    name2.innerHTML = fireQueue[1];
  }
  /*
    TO-DO: Add some stuff to make it pop two people randomly, and then do a battle
  */
};

ComfyJS.onChat = (user, message, flags, self, extra) => {
  console.log(user + ":", message);
};

let start1 = 500;
let start2 = 500;
let ship1Direction = 0;
let ship2Direction = 0;
let ship1 = null;
let ship2 = null

window.onload = function(){
  ship1 = document.getElementById("ship1");
  ship2 = document.getElementById("ship2");

  ship1Direction = Math.floor(Math.random() * 2);
  ship2Direction = Math.floor(Math.random() * 2);
};


window.setInterval(function(){
  if(ship1Direction == 0) {
    start1 -= 1;
    ship1.style.top = start1;
  }
  else {
    start1 += 1;
    ship1.style.top = start1;
  }
  if(ship2Direction == 0) {
    start2 -= 1;
    ship2.style.top = start2;
  }
  else {
    start2 += 1;
    ship2.style.top = start2;
  }

  // TO-DO: randomize directions

  if (start1 <= 50) {
    ship1Direction = 1
  }

  if (start1 >= 900) {
    ship1Direction = 0
  }

  if (start2 <= 50) {
    ship2Direction = 1
  }

  if (start2 >= 900) {
    ship2Direction = 0
  }


}, 1);
