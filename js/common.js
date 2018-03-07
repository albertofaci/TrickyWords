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

function each(a,f) { for (var i=0,l=a.length;i<l;i++) f(a[i]); }

function scrambleWords(wordList) {
	w = [];
	each(wordList, function(word) { w.push(word); });
	for ( var i=0,l=w.length; i < l; i++ ) {
		var sindex = Math.floor(Math.random()*l);
		var temp = w[sindex];
		w[sindex] = w[i];
		w[i] = temp;
	}
	return w;
}

function sayWordWithParams(word, locale, speed) {
	$("#sound").html("<audio src=http://api.voicerss.org/?key=c7390581f1e84a388be14b8cdf507a8f&hl="+locale+"&r="+speed+"&f=44khz_16bit_stereo&ssml=false&src="+encodeURI(word)+" autoplay='autoplay'></audio>")
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