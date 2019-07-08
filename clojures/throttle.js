function debounce(func, wait, immediate) {
	var timeout;
	return function() {
	  debugger;
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

const debounced = debounce(() => {
  console.log('Hello');
}, 1000);

debugger;
debounced();
debounced();
