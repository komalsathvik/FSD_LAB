import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import StudentForm from "./StudentForm";
import StudentSearch from "./StudentSearch";
import StudentTable from "./StudentTable";

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
  const location = useLocation();
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

  useEffect(() => {
    if (location.hash) {
      document.querySelector(location.hash)?.scrollIntoView();
    }
  }, [location]);

  const filterStudents = students
    .map((student, index) => ({ ...student, originalIndex: index }))
    .filter((s) => s.name.toLowerCase().includes(search.toLowerCase()));
  const sortedStudents = [...filterStudents].sort((a, b) =>
    ascending
      ? a.name.localeCompare(b.name)
      : b.name.toLowerCase().localeCompare(a.name.toLowerCase()),
  );
  return (
    <div className="container mt-4">
      <StudentSearch search={search} setSearch={setSearch} />
      <StudentForm
        editIndex={editIndex}
        formData={formData}
        handleChange={handleChange}
        handleAdd={handleAdd}
        handleUpdate={handleUpdate}
      />
      <StudentTable
        sortedStudents={sortedStudents}
        ascending={ascending}
        setAscending={setAscending}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}
export default Display;
