function StudentTable({
  sortedStudents,
  ascending,
  setAscending,
  handleEdit,
  handleDelete,
}) {
  return (
    <div id="students">
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
              Name {ascending ? "\u25B2" : "\u25BC"}
            </th>
            <th>Roll No</th>
            <th>Branch</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {sortedStudents.map((student, index) => (
            <tr key={student.rollNo}>
              <td>{student.name}</td>
              <td>{student.rollNo}</td>
              <td>{student.branch}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handleEdit(student.originalIndex)}
                  style={{ marginRight: "10px" }}
                >
                  Edit
                </button>

                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(student.originalIndex)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;
