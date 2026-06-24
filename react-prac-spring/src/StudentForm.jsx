function StudentForm({
  editIndex,
  formData,
  handleChange,
  handleAdd,
  handleUpdate,
}) {
  return (
    <div id="form" className="mb-4">
      <h2>{editIndex == null ? "Add Student" : "Edit Student"}</h2>
      <div className="row g-2 align-items-center">
        <div className="col-md-3">
        <input
          className="form-control"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="enter name"
        ></input>
        </div>
        <div className="col-md-3">
        <input
          className="form-control"
          name="rollNo"
          value={formData.rollNo}
          onChange={handleChange}
          placeholder="enter roll no"
        ></input>
        </div>
        <div className="col-md-3">
        <input
          className="form-control"
          name="branch"
          value={formData.branch}
          onChange={handleChange}
          placeholder="enter branch"
        ></input>
        </div>
        <div className="col-md-3">
        {editIndex == null ? (
          <button className="btn btn-primary w-100" onClick={() => handleAdd()}>
            Add Student
          </button>
        ) : (
          <button
            className="btn btn-primary w-100"
            onClick={() => handleUpdate()}
          >
            Update Student
          </button>
        )}
        </div>
      </div>
    </div>
  );
}

export default StudentForm;
