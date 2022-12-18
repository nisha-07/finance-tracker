import { projectAuth } from "../firebase/config"
import { useState } from "react"

const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const signup = async (email, password, displayName) => {
        setError(null)
        setIsLoading(true)

        try {
            // signup
            const res = await projectAuth.createUserWithEmailAndPassword(email, password)
            console.log(res.user)

            if (!res) {
                throw new Error('Could not complete signup')
            }

            // add display name to user
            await res.user.updateProfile({ displayName })

            setIsLoading(false)
            setError(null)
        }
        catch (err) {
            console.log(err.message)
            setError(err.message)
            setIsLoading(false)
        }
    }

    return { signup, error, isLoading }
}

export default useSignup
