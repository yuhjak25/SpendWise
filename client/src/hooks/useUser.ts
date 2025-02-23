import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks/useStore'
import { userApi } from '../services/user'
import { setUsername } from '../libs/slices/user'

export const useUser = () => {
    const dispatch = useAppDispatch()
    const username = useAppSelector((state) => state.user.username)

    useEffect(() => {
        const getUsername = async () => {
            try {
                const data = await userApi()
                if (data.error) {
                    console.error('Failed to fetch username:', data.error)
                } else {
                    dispatch(setUsername(data.username))
                }
            } catch (error) {
                console.error('Failed to fetch username:', error)
            }
        }

        getUsername()
    }, [dispatch])

    return username
}
