const students = [
    {id: 1, name: "Adinay"},
    {id: 2, name: "Tom"},
    {id: 3, name: "Islam"},
    {id: 4, name: "Shahzoda"},
    {id: 5, name: "Adilya"},
    {id: 6, name: "Fatima"},
    {id: 7, name: "Malika"},
    {id: 8, name: "Madina"},
    {id: 9, name: "Aisuluu"},
    {id: 10, name: "Nurdana"},
];

let totalLetters = 0;
let maxLetters = 0;
let longestNames = [];

for (const student of students) {
    const letterCount = student.name.length;
    totalLetters += letterCount;

    console.log(${student.name}: ${letterCount} букв);

    if (letterCount > maxLetters) {
        maxLetters = letterCount;
        longestNames = [student.name];
    } else if (letterCount === maxLetters) {
        longestNames.push(student.name);
    }
}

console.log(Всего букв в именах: ${totalLetters});
console.log(Больше всего букв (${maxLetters}) в имени: ${longestNames.join(", ")});

