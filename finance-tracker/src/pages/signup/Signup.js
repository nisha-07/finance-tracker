import { Audio } from 'react-loader-spinner'
import classes from "./Signup.module.css";
import useSignup from "../../hooks/useSignup";
import { useState } from "react";

const Signup = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signup, error, isLoading } = useSignup()

    const handleSubmit = (e) => {
        e.preventDefault();
        signup(email, password, name)
    }
    return (
        <div className={classes.signup}>
            <h3 className="d-flex justify-content-center">Signup</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name"></input>
                </label>
                <label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"></input>
                </label>
                <label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"></input>
                </label>
                {!isLoading && <button className={classes.btn}>Signup</button>}
                {isLoading && <div className="d-flex justify-content-center m-4"><Audio height="20px" /></div>}
                {error && <p>{error}</p>}
            </form>
        </div>
    )
}

export default Signup
