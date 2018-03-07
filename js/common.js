function extractUrlParams() {
	    var match,
	        pl     = /\+/g,  // Regex for replacing addition symbol with a space
	        search = /([^&=]+)=?([^&]*)/g,
	        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
	        query  = window.location.search.substring(1);

   urlParams = {};
   while (match = search.exec(query)) {
       urlParams[decode(match[1])] = decode(match[2]);
   }
   return urlParams;
}

function displayEndScreen(metadata) {
	$('#card_container').html('<span id="end">'+metadata.copy.end+'</span>');
}

function displayStartScreen(metadata, onClickCallback) {
	$("#start").click(onClickCallback)
	$('body').css('background-color', metadata.style["background-color"])
	$('#start').html(metadata.copy.start)
}

function pickRandom(num, array) {
	var selectedElements = []
	for(var i = 0; i < num; i++) {
		var pos = Math.floor(Math.random()*array.length)
		var word = array[pos]
		selectedElements.push(word)
		array.splice(pos, 1)
	}
	return selectedElements;
}