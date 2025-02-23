import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks/useStore'
import { userApi } from '../services/user'
import { setUsername } from '../libs/slices/user'
import useError from './useError'

export const useUser = () => {
    const dispatch = useAppDispatch()
    const { handleError } = useError()
    const username = useAppSelector((state) => state.user.username)

    useEffect(() => {
        const getUsername = async () => {
            try {
                const data = await userApi()
                dispatch(setUsername(data.username))
            } catch (error) {
                console.log('Failed to fetch username:', error)
                handleError('Failed to get the username.')
            }
        }

        getUsername()
    }, [dispatch, handleError])

    return username
}
