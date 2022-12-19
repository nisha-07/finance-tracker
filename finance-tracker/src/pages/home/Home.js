import classes from "./Home.module.css";
import { useState } from "react";

const Home = () => {
    const [name, setName] = useState("")
    const [amount, setAmount] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className={classes.home}>
            <div className={classes.transactionList}>
                <h5 className="mt-5">Transaction list</h5>
            </div>
            <div>
                <h5 className="mt-5">Add transaction</h5>
                <form onSubmit={handleSubmit} className={classes.transactionForm}>
                    <label>
                        <span>Transaction name:</span>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
                    </label>
                    <label>
                        <span>Amount ($):</span>
                        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}></input>
                    </label>
                    <button className={classes.btn}>Add transaction</button>
                </form>
            </div>
        </div>
    )
}

export default Home
