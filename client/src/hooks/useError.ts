import { ErrorDetails, setError } from "../libs/slices/error"
import { useAppDispatch } from "../store/hooks/useStore"

const useError = () => {
    const dispatch = useAppDispatch()

    const handleError = (error: string) => {
        const errorDetails: ErrorDetails = { error }
        dispatch(setError(errorDetails))
    }

    return { handleError }
}

export default useError