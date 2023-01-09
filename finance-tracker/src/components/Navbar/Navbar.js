import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import useAuthContext from "../../hooks/useAuthContext";
import useLogout from "../../hooks/useLogout";
import { useSelector } from "react-redux";

const Navbar = () => {
    const { logout } = useLogout()
    const { user } = useAuthContext()
    const name = useSelector((state) => state?.user?.user?.name)

    return (
        <div className={classes.navbar}>
            <a className="ms-4" href="/">My Money</a>
            {!user ?
                <div className={classes.links}>
                    <Link to="/signup">Sign up</Link>
                    <Link to="/login">Login</Link>
                </div> :
                (<>
                    <em>Hello, {name}</em>
                    <button onClick={logout}>Log out</button>
                </>)
            }
        </div>
    )
}

export default Navbar
