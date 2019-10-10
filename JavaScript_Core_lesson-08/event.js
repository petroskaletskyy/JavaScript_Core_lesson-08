'use strict'

hide_text.onclick = function() {

	if (document.getElementById('text').style.visibility == 'visible') {
		document.getElementById('text').style.visibility = 'hidden';
	} else {
		document.getElementById('text').style.visibility = 'visible';
	}
}

hide_button.onclick = function() {
	document.getElementById('hide_button').style.display = 'none';
}

document.getElementById('control').onclick = function() {
	document.getElementById("crossing").classList.toggle("expand");
}