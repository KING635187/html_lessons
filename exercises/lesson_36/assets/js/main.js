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

// Exercise 5
const jsonToCsv = (arr, columns, delimiter = ',') =>
  [
    columns.join(delimiter),
    ...arr.map(obj =>
      columns.reduce(
        (acc, key) => `${acc}${!acc.length ? '' : delimiter}"${!obj[key] ? '' : obj[key]}"`,
        ''
      )
    )
  ].join('\n');

console.log(jsonToCsv([{ x: 100, y: 200 }, { x: 300, y: 400, z: 500 }, { x: 6 }, { y: 7 }], ['x', 'y']));
console.log(jsonToCsv([{ x: 100, y: 200 }, { x: 300, y: 400, z: 500 }, { x: 6 }, { y: 7 }], ['x', 'y'], ';'));


// Exercise 6
const dig = (obj, target) =>
  target in obj
    ? obj[target]
    : Object.values(obj).reduce((acc, val) => {
        if (acc !== undefined) return acc;
        if (typeof val === 'object') return dig(val, target);
      }, undefined);

const data = {
  level1: {
    level2: {
      level3: 'some data'
    }
  }
};

const dog = {
    "status": "success",
    "message": "https://images.dog.ceo/breeds/african/n02116738_1105.jpg"
}
console.log(dig(data, 'level3'));
console.log(dig(data, 'level4'));
console.log(dig(dog, 'message'));

// Exercise 7
const digitize = n => [...`${n}`].map(i => parseInt(i));

console.log(digitize(123));
console.log(digitize(1230));

// Exercise 8
const pull = (arr, ...args) => {
	let argState = Array.isArray(args[0]) ? args[0] : args;
	let pulled = arr.filter((v, i) => !argState.includes(v));
	arr.length = 0;
	pulled.forEach(v => arr.push(v));
	return pulled;
};
	let arra1 = ['a', 'b', 'c', 'a', 'b', 'c'];
console.log(pull(arra1, 'a', 'c'));
let arra2 =  ['a', 'b', 'c', 'a', 'b', 'c'];
console.log(pull(arra2, 'b'));

// Exercise 9 
const powerset = arr => arr.reduce((a, v) => a.concat(a.map(r => [v].concat(r))), [[]]);
console.log(powerset([1, 2]));

// Exercise 10
const pullAtIndex = (arr, pullArr) => {
	let removed = [];
	let pulled = arr
	  .map((v, i) => (pullArr.includes(i) ? removed.push(v) : v))
	  .filter((v, i) => !pullArr.includes(i));
	arr.length = 0;
	pulled.forEach(v => arr.push(v));
	return removed;
};
let long = ['П', 'р', 'и', 'в', 'е', 'т'];
console.log(pullAtIndex(long, [1, 3]));

// Exercise 11
const randomHexColorCode = () => {
	let random = (Math.random() * 0xfffff * 1000000).toString(17);
	return '' + random.slice(0, 17);
};
  
console.log(randomHexColorCode())

// Exercise 12
const removeNonAscii = str => str.replace(/[^\x20-\x7E]/g, '');
document.getElementById("demo").innerHTML = (removeNonAscii('äÄçÇéÉêw3resouröceÖÐþúÚ')) ;

// Exercise 13
const byteSize = str => new Blob([str]).size;
console.log(byteSize('123456'));  
console.log(byteSize('Hello World'));  

// Exercise 14
//#Source https://bit.ly/2neWfJ2 
const rename_keys = (keysMap, obj) =>
  Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      ...{ [keysMap[key] || key]: obj[key] }
    }),
    {}
  );
const obj = { name: 'Bobo', job: 'Programmer', shoeSize: 100 };
console.log("Original Object");
console.log(obj);
console.log("-------------------------------------");
result = rename_keys({ name: 'firstName', job: 'Actor' }, obj);
console.log("New Object");
console.log(result);