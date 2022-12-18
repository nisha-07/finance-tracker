import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import useLogout from "../../hooks/useLogout";

const Navbar = () => {
    const { logout } = useLogout()

    return (
        <div className={classes.navbar}>
            <h5 className="ms-4">My Money</h5>
            <div>
                <Link to="/signup">Sign up</Link>
                <Link to="/login">Login</Link>
                <button onClick={logout}>Log out</button>
            </div>
        </div>
    )
}

export default Navbar
