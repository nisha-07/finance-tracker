import { useEffect, useState } from "react"

import { projectAuth } from "../firebase/config"
import useAuthContext from "./useAuthContext"

export const useLogout = () => {
    const [isCancelled, setIsCancelled] = useState(false)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const { dispatch } = useAuthContext()

    const logout = async () => {
        setError(null)
        setIsLoading(true)

        try {
            if (!isCancelled) {
                setIsLoading(false)
                setError(null)
            }

            // dispatch logout funtion
            dispatch({ type: "LOGOUT" })

            await projectAuth().signOut()

        }

        catch (err) {
            if (!isCancelled) {
                console.log(err)
                setError(err.message)
                setIsLoading(false)
            }
        }
    }
    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])

    return { isLoading, error, logout }
}

export default useLogout
