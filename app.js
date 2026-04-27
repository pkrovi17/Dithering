const input = document.getElementById("input");
const output = document.getElementById("output");

/* print line */
function print(text = "") {
  const div = document.createElement("div");
  div.className = "line";
  div.textContent = text;
  output.appendChild(div);
  output.scrollTop = output.scrollHeight;
}

/* fake typing */
function type(text, speed = 10) {
  return new Promise((resolve) => {
    let i = 0;
    const div = document.createElement("div");
    div.className = "line";
    output.appendChild(div);

    function step() {
      if (i < text.length) {
        div.textContent += text[i++];
        setTimeout(step, speed);
      } else {
        resolve();
      }
    }

    step();
  });
}

/* commands */
async function handleCommand(cmd) {
  const c = cmd.trim().toLowerCase();

  if (c === "help") {
    print("AVAILABLE COMMANDS:");
    print("help   - show commands");
    print("clear  - clear screen");
    print("about  - system info");
    print("date   - current time");
  }

  else if (c === "clear") {
    output.innerHTML = "";
  }

  else if (c === "about") {
    await type("GRAINRAD TERMINAL INTERFACE");
    await type("CRT EMULATION MODE ACTIVE");
  }

  else if (c === "date") {
    print(new Date().toString());
  }

  else if (c) {
    print(`UNKNOWN COMMAND: ${c}`);
  }
}

/* input handler */
input.addEventListener("keydown", async (e) => {
  if (e.key === "Enter") {
    const value = input.value;

    print("> " + value);
    await handleCommand(value);

    input.value = "";
  }
});

/* boot sequence */
async function boot() {
  await type("BOOTING GRAINRAD OS...", 20);
  await type("INITIALIZING MODULES...", 20);
  await type("CALIBRATING DISPLAY...", 20);
  await type("READY.", 20);
}

boot();