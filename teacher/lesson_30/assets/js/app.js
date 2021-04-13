const cars = ['BWM', 'Lada', 'Lamorghine', 'Porche', 'Daewo', 'Tesla'];
let text = '';

text += ' ' + cars[0];
text += ' ' + cars[1];
text += ' ' + cars[2];
text += ' ' + cars[3];
text += ' ' + cars[4];
text += ' ' + cars[5];

console.log(text);

let newText = '';
let i = 0;

for (; i < 6; i++) {
    newText += ' ' + cars[i];
}

console.log(newText);

const student = {
    name: 'Shaxboz', 
    phone: '011 08 95', 
    birthDate: new Date('08-08-1995')
};

let studentInfo = '';

for (key in student) {
    studentInfo += '\n' + key + ': ' + student[key];
}

console.log(studentInfo);

for (value of cars) {
    console.log(value);
}

let a = 0;
while (a < 10) {
    console.log("A: " + a);
    a++;
}

let b = 5;
do {
    console.log("B: " + b);
    b++;
}
while (b < 10);