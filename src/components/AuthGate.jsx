import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GridLoader } from 'react-spinners'
import { getLocalStorage } from '~/utils/localStorage'

export const AuthGate = (props) => {
  const { children } = props
  const [authorized, setAuthorized] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const user = getLocalStorage('user')
    const account = getLocalStorage('account')

    const isLoggedIn = user && account
    if (isLoggedIn) {
      setAuthorized(true)
      return
    }

    navigate('/unauthorized')
  }, [])

  return authorized ? children : <Loading />
}

const Loading = () => {
  return (
    <div className='flex size-full justify-center items-center'>
      <GridLoader size={32} />
    </div>
  )
}
