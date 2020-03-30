window.addEventListener('load', registerEvents, false);
function registerEvents(e) {
	document.getElementById("btn1").addEventListener('click', makeTiny, true);
	document.getElementById("btn2").addEventListener('click', makeTiny2, true);
}
function makeTiny(e) {
	document.getElementById("services__item").style.backgroundColor = "#00897b";
	document.getElementById("services__title").style.color = "#fff";
	document.getElementById("services__subtitle").style.color = "#fff";
	document.getElementById("btn1").style.backgroundColor = "#00897b";
	document.getElementById("btn1").style.color = "#fff";
	document.getElementById("btn1").style.borderColor = "#fff";
}

function makeTiny2(e) {
	document.getElementById("services__item2").style.backgroundColor = "#00897b";
	document.getElementById("services__title2").style.color = "#fff";
	document.getElementById("services__subtitle2").style.color = "#fff";
	document.getElementById("btn2").style.backgroundColor = "#00897b";
	document.getElementById("btn2").style.color = "#fff";
	document.getElementById("btn2").style.borderColor = "#fff";
}
