const express = require("express");

const app = express();
const PORT = 3000;

const students = [
  { id: 1, name: "Amit", course: "Node.js" },
  { id: 2, name: "Priya", course: "Express.js" },
];
app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

function validateStudent(req, res, next) {
  const { name, course } = req.body;

  if (!name || !course) {
    return res.status(400).json({
      message: "Name and course are required.",
    });
  }

  next();
}

app.get("/", (req, res) => {
  res.send("Welcome to the basic Express application!");
});

app.get("/students", (req, res) => {
  res.json(students);
});

app.post("/students", validateStudent, (req, res) => {
  const newStudent = {
    id: students.length + 1,
    name: req.body.name,
    course: req.body.course,
  };

  students.push(newStudent);

  res.status(201).json({
    message: "Student added successfully.",
    student: newStudent,
  });
});

app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}`);
});
