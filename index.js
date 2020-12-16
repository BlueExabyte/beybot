/* Config */
const twitchTvHandle = "BlueExabyte";
const PAUSE_DURATION = 30 * 1000; // 30 seconds
const DISPLAY_DURATION = 10 * 1000; // 10 seconds

/* DOM */
const container = document.querySelector(".alerts");
const img = new Image();
const queue = new Queue();

let playerQueue = [];

// Resolve promise after duration
const wait = async duration => {
  return new Promise(resolve => setTimeout(resolve, duration));
};

ComfyJS.Init(twitchTvHandle);
ComfyJS.onCommand = (user, command, message, flags, extra) => {
  console.log(`!${command} was typed in chat`);

  // Player can't be pushed multiple times
  if(command == "plinko") {
    playerQueue.push(user);
  }
};

ComfyJS.onChat = (user, message, flags, self, extra) => {
  console.log(user + ":", message);
};

function load_home() {
  document.getElementById("includedContent").innerHTML='<object type="text/html" data="test/index.html" width="400px" height="800px" ></object>';
}

window.setInterval(function(){
  console.log(playerQueue);
  if(playerQueue.length > 0)  {
    let playerName = document.getElementById("playerName");
    playerName.innerHTML = "<h1>"+ String(playerQueue[0]) + "</h1>";
    let queueList = document.getElementById("queueList");
    queueList.innerHTML = "Queue: "+ String(playerQueue);
    load_home();
    
    playerQueue.splice(0, 1);
  }
  else {
    document.getElementById("playerName").innerHTML = "";
    document.getElementById("queueList").innerHTML = "";
    document.getElementById("includedContent").innerHTML = "";
  }
}, 20000);