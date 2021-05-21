document.getElementById('button').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "flex";
	// document.querySelector('body').style.backgroundColor = "rgba(0.8, 0.8, 0.8, 0.8)"
});

document.querySelector('.close').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "none";
});