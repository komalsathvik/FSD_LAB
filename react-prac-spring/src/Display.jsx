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
  let [editIndex, setEditIndex] = useState(null);
  let [search, setSearch] = useState("");
  let [ascending, setAscending] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    rollNo: "",
    branch: "",
  });
  function handleEdit(index) {
    setEditIndex(index);
    setFormData(students[index]);
  }
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
  function handleUpdate() {
    const updatedStudents = students.map((s, index) =>
      index == editIndex ? formData : s,
    );
    setStudents(updatedStudents);
    setEditIndex(null);
    setFormData({ name: "", rollNo: "", branch: "" });
  }

  const filterStudents = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase()),
  );
  const sortedStudents = [...filterStudents].sort((a, b) =>
    ascending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name),
  );
  return (
    <div>
      <input
        className="form-control"
        name="search"
        value={search}
        placeholder="type to search"
        onChange={(e) => setSearch(e.target.value)}
      ></input>
      <h2>{editIndex == null ? "Add Student" : "Edit Student"}</h2>
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
        {editIndex == null ? (
          <button className="btn btn-primary m-2" onClick={() => handleAdd()}>
            Add Student
          </button>
        ) : (
          <button
            className="btn btn-primary m-2"
            onClick={() => handleUpdate()}
          >
            Update Student
          </button>
        )}
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
              <th
                style={{ cursor: "pointer" }}
                onClick={() => setAscending(!ascending)}
              >
                Name {ascending ? "▲" : "▼"}
              </th>
              <th>Roll No</th>
              <th>Branch</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {sortedStudents.map((student, index) => (
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
