window.addEventListener("load", function() {
	setTimeout(function() {
		document.getElementById("nav").classList.add("show");
	}, 100);
});

window.onload = html.style.display = "block";

let item = 0;
const html = document.getElementById("html");
const xml = document.getElementById("xml");
const css = document.getElementById("css");
const scss = document.getElementById("scss");
const sass = document.getElementById("sass");
const js = document.getElementById("js");
const react = document.getElementById("react");
const cybersecurity = document.getElementById("cybersecurity");
const backArrow = doument.getElementById("backArrow");
const forwardArrow = document.getElementById("forwardArrow");

function back() {
	item--;
	changeItem();
	alert(item);
}

function forward() {
	item++;
	changeItem();
	alert(item);
}

function changeItem() {
	if (item === 1) {
		html.style.zIndex = "2";

	}
}
