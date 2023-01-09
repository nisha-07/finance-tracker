import { Audio } from "react-loader-spinner";
import classes from "./Login.module.css";
import { setUser } from "../../slices/userSlice";
import { useDispatch } from "react-redux";
import useLogin from "../../hooks/useLogin";
import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login, error, isLoading } = useLogin();
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        login(email, password)
        dispatch(setUser({
            name: email,
        }))
    }

    return (
        <div className={classes.login}>
            <h3 className="d-flex justify-content-center">Login</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Email</span>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                </label>
                <label>
                    <span>Password</span>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                </label>
                {!isLoading && <button className={classes.btn}>Login</button>}
                {isLoading && <div className="d-flex justify-content-center m-4"><Audio height="20px" /></div>}
                {error && <p>{error}</p>}
            </form>

        </div>
    )
}

export default Login
