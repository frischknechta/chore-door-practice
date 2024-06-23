const doorImage1 = document.getElementById("door1");
const doorImage2 = document.getElementById("door2");
const doorImage3 = document.getElementById("door3");
const startButton = document.getElementById("start");

const botDoorPath =
  "https://content.codecademy.com/projects/chore-door/images/robot.svg";

const beachDoorPath =
  "https://content.codecademy.com/projects/chore-door/images/beach.svg";

const spaceDoorPath =
  "https://content.codecademy.com/projects/chore-door/images/space.svg";

const closedDoorPath =
  "https://content.codecademy.com/projects/chore-door/images/closed_door.svg";

let numClosedDoor = 3;

let openDoor1;

let openDoor2;

let openDoor3;

let currentlyPlaying = true;

const randomChoreDoorGenerator = () => {
  const choreDoor = Math.floor(Math.random() * numClosedDoor);

  if (choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 1) {
    openDoor2 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else {
    openDoor3 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath;
  }
};

const isBot = (door) => {
  if (door.src === botDoorPath) {
    return true;
  } else {
    return false;
  }
};

const isClicked = (door) => {
  if (door.src === closedDoorPath) {
    return false;
  } else {
    return true;
  }
};

const playDoor = (door) => {
  numClosedDoor--;

  if (numClosedDoor === 0) {
    gameOver("win");
  } else if (isBot(door)) {
    gameOver();
  } else {
  }
};

door1.onclick = () => {
  if (!isClicked(door1) && currentlyPlaying) {
    doorImage1.src = openDoor1;
    playDoor(door1);
  }
};

door2.onclick = () => {
  if (!isClicked(door2) && currentlyPlaying) {
    doorImage2.src = openDoor2;
    playDoor(door2);
  }
};

door3.onclick = () => {
  if (!isClicked(door3) && currentlyPlaying) {
    doorImage3.src = openDoor3;
    playDoor(door3);
  }
};

startButton.onclick = () => {
  if (currentlyPlaying === false) {
    startRound();
  }
};

const gameOver = (status) => {
  if (status === "win") {
    startButton.innerHTML = "You win! Play again?";
  } else {
    startButton.innerHTML = "Game over! Play again?";
  }
  currentlyPlaying = false;
};

const startRound = () => {
  numClosedDoor = 3;
  startButton.innerHTML = "Good luck!";
  door1.src = closedDoorPath;
  door2.src = closedDoorPath;
  door3.src = closedDoorPath;
  currentlyPlaying = true;
  randomChoreDoorGenerator();
};

startRound();
