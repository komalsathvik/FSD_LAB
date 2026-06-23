import React from "react";

function Display() {
  const students = [
    {
      id: 1,
      name: "Rahul",
      rollNo: "101",
      branch: "Computer Science",
    },
    { id: 2, name: "Sathvik", rollNo: "102", branch: "Computer Science" },
    { id: 3, name: "Saketh", rollNo: "107", branch: "Computer Science" },
    { id: 4, name: "Rohith", rollNo: "141", branch: "Civil" },
    { id: 5, name: "Harsha", rollNo: "221", branch: "Electrical" },
    {
      id: 6,
      name: "Sai",
      rollNo: "218",
      branch: "Electrical",
    },
  ];

  return (
    <div>
      <h2>Student Details</h2>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Roll No</th>
            <th>Branch</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.rollNo}</td>
              <td>{student.branch}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Display;
