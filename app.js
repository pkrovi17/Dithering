const input = document.getElementById("input");
const output = document.getElementById("output");

function print(text) {
  const div = document.createElement("div");
  div.className = "line";
  div.textContent = text;
  output.appendChild(div);
  output.scrollTop = output.scrollHeight;
}

function handleCommand(cmd) {
  const c = cmd.trim().toLowerCase();

  if (c === "help") {
    print("AVAILABLE COMMANDS:");
    print("help - show commands");
    print("clear - clear screen");
    print("about - info");
  } else if (c === "clear") {
    output.innerHTML = "";
  } else if (c === "about") {
    print("GRAINRAD TERMINAL INTERFACE");
    print("retro CRT simulation");
  } else if (c) {
    print(`UNKNOWN COMMAND: ${c}`);
  }
}

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const value = input.value;
    print("> " + value);
    handleCommand(value);
    input.value = "";
  }
});

/* boot text */
print("BOOTING SYSTEM...");
print("INITIALIZING...");
print("READY.");