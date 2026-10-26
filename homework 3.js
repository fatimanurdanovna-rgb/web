
const students = [
    { id: 1, name: "fatima" },
    { id: 2, name: "adilya" },
    { id: 3, name: "sasha" }
];

let totalLetters = 0;
let maxLetters = 0;
let longestNames = [];

for (const student of students) {
    const letterCount = student.name.length;
    totalLetters += letterCount;

    console.log(student.name + ": " + letterCount + " букв");

    if (letterCount > maxLetters) {
        maxLetters = letterCount;
        longestNames = [student.name];
    } else if (letterCount === maxLetters) {
        longestNames.push(student.name);
    }
}

console.log("Всего букв: " + totalLetters);
console.log("Максимальная длина имени: " + maxLetters);
console.log("Самые длинные имена: " + longestNames.join(", "));
