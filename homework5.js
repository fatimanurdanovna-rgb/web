const students = [
    {name: "Fatima", percentage: 80},
    {name: "Nur", percentage: 60},
    {name: "Tom", percentage: 92},
    {name: "Shahzoda", percentage: 65},
    {name: "Adilya", percentage: 85},
    {name: "Zarina", percentage: 84},
    {name: "Nurdan", percentage: 64},
    {name: "Malika", percentage: 100},
    {name: "Madina", percentage: 77},
    {name: "Nurdan", percentage: 98},
];

let totalPercentage = 0;
let highestStudent = students[0];
let lowestStudent = students[0];

for (const student of students) {
    let letterGrade;

    if (student.percentage >= 90) {
        letterGrade = "A";
    } else if (student.percentage >= 80) {
        letterGrade = "B";
    } else if (student.percentage >= 70) {
        letterGrade = "C";
    } else if (student.percentage >= 60) {
        letterGrade = "D";
    } else {
        letterGrade = "F";
    }

    totalPercentage += student.percentage;
    console.log(`${student.name}: ${student.percentage}% — ${letterGrade}`);

    if (student.percentage > highestStudent.percentage) {
        highestStudent = student;
    }

    if (student.percentage < lowestStudent.percentage) {
        lowestStudent = student;
    }
}

const averagePercentage = totalPercentage / students.length;

console.log(`Average Grade: ${averagePercentage}%`);
console.log(`HIGHEST GRADE: ${highestStudent.name} (${highestStudent.percentage}%)`);
console.log(`LOWEST GRADE: ${lowestStudent.name} (${lowestStudent.percentage}%)`);