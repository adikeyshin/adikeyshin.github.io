let mode = "full";
const output = document.getElementById("output");
const fullBtn = document.getElementById("full");
const dateBtn = document.getElementById("date");
const timeBtn = document.getElementById("time");

function bindMode(name) {
  return function () {
    mode = name;
    update();
  };
}

fullBtn.onclick = bindMode("full");

dateBtn.onclick = bindMode("date");

timeBtn.onclick = bindMode("time");

setInterval(update, 100);
update();

function update() {
  output.textContent = format(mode);
}

// Pure Function
function format(formatMode) {
  const now = new Date();

  switch (formatMode) {
    case "time":
      return now.toLocaleTimeString() + "." + now.getMilliseconds();
    case "date":
      return now.toLocaleDateString();
    case "full":
      return now.toLocaleDateString() + " " + now.toLocaleDateString();
    default:
      return now.toLocaleTimeString();
  }
}
