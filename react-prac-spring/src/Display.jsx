import React from "react";
import { useState } from "react";
let stud = [
  {
    name: "Rahul",
    rollNo: "101",
    branch: "Computer Science",
  },
  {
    name: "Sathvik",
    rollNo: "102",
    branch: "Computer Science",
  },
  {
    name: "Saketh",
    rollNo: "107",
    branch: "Computer Science",
  },
  {
    name: "Rohith",
    rollNo: "141",
    branch: "Civil",
  },
  {
    name: "Harsha",
    rollNo: "221",
    branch: "Electrical",
  },
  {
    name: "Sai",
    rollNo: "218",
    branch: "Electrical",
  },
];
function Display() {
  let [students, setStudents] = useState(stud);
  const [formData, setFormData] = useState({
    name: "",
    rollNo: "",
    branch: "",
  });
  function handleEdit(index) {}
  function handleAdd() {
    setStudents([...students, formData]);
    setFormData({ name: "", rollNo: "", branch: "" });
  }
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  function handleDelete(i) {
    const updatedStudents = students.filter((s, index) => index != i);
    setStudents(updatedStudents);
  }
  return (
    <div>
      <h2>Add new Student</h2>
      <div className="form">
        <input
          className="form-control m-2"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="enter name"
        ></input>
        <input
          className="form-control m-2"
          name="rollNo"
          value={formData.rollNo}
          onChange={handleChange}
          placeholder="enter roll no"
        ></input>
        <input
          className="form-control m-2"
          name="branch"
          value={formData.branch}
          onChange={handleChange}
          placeholder="enter branch"
        ></input>
        <button className="btn btn-primary m-2" onClick={() => handleAdd()}>
          Add Student
        </button>
      </div>
      <div>
        <h2>All Students</h2>
        <table
          className="table table-bordered"
          border="2"
          cellPadding="10"
          cellSpacing="0"
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Roll No</th>
              <th>Branch</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student, index) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.rollNo}</td>
                <td>{student.branch}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleEdit(index)}
                    style={{ marginRight: "10px" }}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Display;
