/**
 * 
 */
var target = {
		
} 
var player = {
		dom: document.getElementById('player');
		left: 0;
}
function moveRight () {
	if (left >= 900) {
		return;
	}
	player.dom.style.marginLeft = (left + 4) +'px';
}

function moveLeft () {
	if (left <= 0) {
		return;
	}
	player.dom.style.marginLeft = (left - 4) + 'px';
}

document.addEventListener('keydown', function () {
	if (event.keyCode == 37) {
		moveLeft();
	}
	if (event.keyCode == 39) {
		moveRight();
	}
}, false);