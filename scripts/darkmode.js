const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const body = document.querySelector("body");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("☑️")) {
		main.style.background = "#090f2a";
        body.style.background = "#090f2a";
		main.style.color = "#ffffff";
		modeButton.textContent = "❎";
	} else {
		main.style.background = "#eee";
		main.style.color = "#050505";
        body.style.background = "#ffffff";
		modeButton.textContent = "☑️";
	}
});
