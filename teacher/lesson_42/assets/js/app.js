// Exercise 3

const csvToArray = (csv, delimetr = ',', omitFirstRow = false) => {
    return csv
        .slice(omitFirstRow ? csv.indexOf('\n') + 1 : 0)
        .split('\n')
        .map(line => line.split(delimetr));
}

console.log(csvToArray('Apple,Banana\nMango,Lemon\nOrange', ',', true));

// [2, 4, 5] => one dimentional array 
// [[2, 3], [3, 4]] => two dimentional array
// [[[2, 3], [4, 6]], [[6, 7], [7, 3]]] => three dimentional array


// Exercise 4

const csvToArrayObjects = (csv, delimetr = ',') => {
    const titles = csv.slice(0, csv.indexOf('\n')).split(delimiter);
    return csv
        .slice(csv.indexOf('\n') + 1)
        .split('\n')
        .map(line => {
            const values = line.split(delimiter);
            return titles.reduce((obj, title, index) => ((obj[title] = values[index]), obj), {});
        });
}

console.log(csvToArrayObjects('col1,col2\na,b\nc,d'));

