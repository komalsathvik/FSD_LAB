function InputSpring() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    function func() {
        axios
        .post("http://localhost:8080/users", {
            name: name,
            email: email,
        })
        .then((res) => {
            console.log("done");
        })
        .catch((err) => {
            console.log(err);
        });
    }
    return (
        <>
        <h1>Hello World !</h1>
        <input
            type="text"
            placeholder="enter name"
            onChange={(e) => setName(e.target.value)}
        />
        <br></br>
        <input
            type="text"
            placeholder="enter email"
            onChange={(e) => setEmail(e.target.value)}
        />
        <br></br>
        <button onClick={func}>Click</button>
        <Login />
        </>
    );
}

export default InputSpring;
