const fs = require("fs");
const path = require("path");

const studentsDir = path.join(__dirname, "..", "students");
const outputFile = path.join(__dirname, "..", "..", "students.json");

const students = [];

fs.readdirSync(studentsDir).forEach(file => {
  if (file.endsWith(".json")) {
    try {
      const data = JSON.parse(fs.readFileSync(path.join(studentsDir, file), "utf-8"));
      students.push(data);
    } catch (err) {
      console.error(` Error parsing ${file}:`, err.message);
    }
  }
});

fs.writeFileSync(outputFile, JSON.stringify(students, null, 2));
console.log(` Built students.json with ${students.length} profiles`);

