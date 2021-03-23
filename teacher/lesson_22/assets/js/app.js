let age = 16;

if (age > 24) {
    console.log("Age is greater than 24!");
} else if (age <= 0) {
    console.log("Age is incorrect!");
} else {
    console.log("Age is not greater than 24!");
}

switch (new Date().getDay()) {
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

// Dates

console.log(new Date());
console.log(new Date(2020, 1, 23, 8, 23, 45, 456));
console.log(new Date(3467654755555));
console.log(new Date('Tue Mar 23 2078 18:42:45'));
console.log(new Intl.DateTimeFormat("en-US", 
        {timeZone: "America/New_York"})
    .format(new Date(Date.now())));