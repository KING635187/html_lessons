// Exercise 1

const matches = (obj, source) =>
    Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);

console.log(matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true }));
console.log(matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true })); 
console.log(matches({ hair: 'long', beard: true }, { age: 26, hair: 'long', beard: true })); 


// Exercise 2

const copyToClipboard = str => {
	const el = document.createElement('textarea');
	el.value = str;
	el.setAttribute('readonly', '');
	el.style.position = 'absolute';
	el.style.left = '-9999px';
	document.body.appendChild(el);
	const selected =
		document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
	el.select();
	document.execCommand('copy');
	document.body.removeChild(el);
	if (selected) {
		document.getSelection().removeAllRanges();
		document.getSelection().addRange(selected);
	}
};

copyToClipboard('JavaScript basic - Exercises, Practice, Solution');
  