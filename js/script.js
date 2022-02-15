let dropdownButtonList = document.querySelectorAll(".dropdown_button");
let services = document.querySelector("#services"); var sh = 750;

dropdownButtonList.forEach(function(dropdownButton) {
	dropdownButton.addEventListener("click", function() {
		let dropdown = dropdownButton.parentNode.parentNode;
		let arrow = dropdownButton.nextSibling.nextSibling;
		
		if (dropdown.style.height == "50px" || dropdown.style.height == "")
		{ 
			dropdown.style.height = "215px";
			sh += 165; services.style.height = sh + "px";
			arrow.style.transform = "rotate(180deg)";
		}
		else
		{ 
			dropdown.style.height = "50px";
			sh -= 165; services.style.height = sh + "px";
			arrow.style.transform = "rotate(0deg)";
		}
	})
})

let customCheck = document.querySelector("#contact_custom_check");
let customToggle = document.querySelector("#contact_custom_toggle");
let check = document.querySelector("#contact_check");

customCheck.addEventListener("click", function() {
		check.setAttribute("value", (check.getAttribute("value") == "yes" ? "no" : "yes"));
		customToggle.style.opacity = (check.getAttribute("value") == "yes"? "1" : "0");
});

let scrollUp = document.querySelector("#custom_scroll_up");
let scrollDown = document.querySelector("#custom_scroll_down");

let messages1 = document.querySelectorAll(".mi1"); var m1 = 0;
let messages2 = document.querySelectorAll(".mi2"); var m2 = 0;
let messages3 = document.querySelectorAll(".mi3"); var m3 = -840;

scrollUp.addEventListener("click", function() {
	if (m1 < 280)
	{ m1 += 280; m2 += 280; m3 += 280 }

	messages1.forEach(function(message) {
		message.style.transform = "translate(0," + m1 +"px)";
		message.style.opacity = messageOpacity(m1, 0);
	})
	messages2.forEach(function(message) {
		message.style.transform = "translate(0," + m2 + "px)";
		message.style.opacity = messageOpacity(m2, -280);
	})
	messages3.forEach(function(message) {
		message.style.transform = "translate(0," + m3 + "px)";
		message.style.opacity = messageOpacity(m3, -560);
	})


})

scrollDown.addEventListener("click", function() {
	if (m1 > -280)
	{ m1 -= 280; m2 -= 280; m3 -= 280 }

	messages1.forEach(function(message) {
		message.style.transform = "translate(0," + m1 +"px)";
		message.style.opacity = messageOpacity(m1, 0);
	})
	messages2.forEach(function(message) {
		message.style.transform = "translate(0," + m2 + "px)";
		message.style.opacity = messageOpacity(m2, -280);
	})
	messages3.forEach(function(message) {
		message.style.transform = "translate(0," + m3 + "px)";
		message.style.opacity = messageOpacity(m3, -560);
	})
})

function messageOpacity(m, t) {
	if (m != t)
		return 0;
	return 1;
}