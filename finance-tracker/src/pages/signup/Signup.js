import classes from "./Signup.module.css";
import { useState } from "react";

const Signup = () => {
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    return (
        <div className={classes.signup}>
            <h3 className="d-flex justify-content-center">Signup</h3>
            <form>
                <label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name"></input>
                </label>
                <label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"></input>
                </label>
                <label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"></input>
                </label>
                <button className={classes.btn}>Signup</button>
            </form>
        </div>
    )
}

export default Signup
