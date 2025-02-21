import { useEffect, useState } from 'react'
import { useAppSelector } from '../../store/hooks/useStore'
import { useAuthActions } from '../../Auth/hooks/authAction'

export const useUser = () => {
  const { getUserData } = useAuthActions()
  const user = useAppSelector((state) => state.auth.user)
  const [username, setUsername] = useState<string>('Guest')
  const userProfileName = user && 'username' in user ? user.username : 'Guest'

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        if (!user) {
          await getUserData()
        }

        if (user) {
          setUsername(userProfileName || 'Guest')
        }
      } catch (error) {
        console.log('Something went wrong', error)
      }
    }

    fetchProfile()
  }, [getUserData, user, userProfileName])
  return username
}
