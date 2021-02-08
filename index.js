var counters = document.querySelectorAll(".counter");

counters.forEach((counters) => {
	counters.innerText = "5";

	var updateCounter = () => {
		var target = +counters.getAttribute("data-target");
		var c = +counters.innerText;

		var increment = target / 150;
		if (c < target) {
			counters.innerText = `${Math.ceil(c + increment)}`;
			setTimeout(updateCounter, 3);
		}
	};
	updateCounter();
});
