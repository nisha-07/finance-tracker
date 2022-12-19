import { useEffect, useState } from "react";

import classes from "./Home.module.css";
import useAuthContext from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";
import useFirestore from "../../hooks/useFirestore";

const Home = () => {
    const [name, setName] = useState("")
    const [amount, setAmount] = useState("")
    const { addDocument, deleteDocument, response } = useFirestore("transactions")
    const { user } = useAuthContext()
    const { documents: transactions, error } = useCollection("transactions")

    const handleSubmit = (e) => {
        e.preventDefault();
        addDocument({
            uid: user.uid,
            name, amount
        })
    }

    useEffect(() => {
        if (response.success) {
            setName('')
            setAmount('')
        }
    }, [response.success])

    return (
        <div className={classes.home}>
            <div className={classes.transactionList}>
                <h5 className="mt-5">Transaction list</h5>
                <ul className={classes.transactions}>
                    {transactions && transactions.map((transaction) => (
                        <li key={transaction.id}>
                            <p className={classes.name}>{transaction.name}</p>
                            <p className={classes.amount}>${transaction.amount}</p>
                            <button className={classes.btn} onClick={() => deleteDocument(transaction.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
                {error && <em>{error}</em>}
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
