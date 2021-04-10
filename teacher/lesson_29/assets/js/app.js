// console.log(Math.ceil(Math.random() * 10));

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// console.log(getRandomInteger(5, 12));

// console.log(Boolean(10 > 9));
// console.log(Boolean(100));

// if ("string") {
//     console.log("True");
// }

const age = 17;

// if (age < 18) {
//     console.log("Age is less than 18");
// }

const currentHour = new Date().getHours();

if (currentHour < 10) {
    console.log("Good morning!");
} else if (currentHour < 20) {
    console.log("Good day!");
} else {
    console.log("Good evening!");
}

switch(new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}

console.log(day);


switch (new Date().getDay()) {
    case 4:
    case 5:
        text = "Soon it is Weekend";
        break;
    case 0:
    case 6:
        text = "It's Weekend";
        break;
    default:
        text = "Looking forward to the Weened";
}

console.log(text);