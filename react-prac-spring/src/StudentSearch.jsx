function StudentSearch({ search, setSearch }) {
  return (
    <input
      className="form-control mb-3"
      name="search"
      value={search}
      placeholder="type to search"
      onChange={(e) => setSearch(e.target.value)}
    ></input>
  );
}

export default StudentSearch;
