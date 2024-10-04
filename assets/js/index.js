const key = document.querySelector(".key1");
const keyCode = document.querySelector(".key2");
const eventCodes = document.querySelector(".key3");

document.addEventListener("keyup", function run(e) {
  let pressedKey = e.key;
  let pressedKeyCode = e.keyCode;
  let pressedEventCode = e.code;
  if (e.key === " ") {
    pressedKey = "Space";
  } else if (e.key === "Tab") {
    pressedKey = "Tab";
  }

  key.innerHTML = pressedKey;
  keyCode.innerHTML = pressedKeyCode;
  eventCodes.innerHTML = pressedEventCode;
});
