var colors = ['white','red',];
var active = 0;
setInterval(function(){
    document.querySelector('body').style.background = colors[active];
    active++;
    if (active == color.length) active = 0;
}, 600000);



function startTime () {
	var today = new Date ()
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
  
	h = correctTime (h);
	h = checkTime (h); //option 2
	m = checkTime(m);
	s = checkTime(s);
	colorTime(m);
	
    
	document.getElementById('txt').innerHTML = h + ":" + m + ":" + s;
	var t =setTimeout(startTime, 500);

}



function isAMorPM(i) {
	if (i > 12) {
		return "PM";
	} else {
		return "AM";
	}

}

function checkTime(i) {

	if (i < 10) {
		i = "0" + i
	}
	return i;

}


function colorTime(i) {
	if (i % 2 === 0) {
		$("#txt").css("color", "aqua")
		$(".price1").hide()
		$(".price10").show()
		$(".price").hide()
		$(".price0").show()
		$(".price2").hide()
		$(".price20").show()
		$(".price3").hide()
		$(".price30").show()
		$("#orders").show()
		$("#late").hide()
	} else {
		$("#txt").css("color", "coral")
		$(".price1").show()
		$(".price10").hide()
		$(".price").show()
		$(".price0").hide()
		$(".price2").show()
		$(".price20").hide()
		$(".price3").show()
		$(".price30").hide()
		$("#orders").hide()
		$("#late").show()
	}
}


function correctTime (i) {
	if (i > 12) {
		i = i - 12;
	}
	return i;
}



