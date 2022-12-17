import classes from "./Login.module.css";
import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    return (
        <div className={classes.login}>
            <h3 className="d-flex justify-content-center">Login</h3>
            <form>
                <label>
                    <span>Email</span>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                </label>
                <label>
                    <span>Password</span>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                </label>
                <button className={classes.btn}>Login</button>
            </form>

        </div>
    )
}

export default Login
