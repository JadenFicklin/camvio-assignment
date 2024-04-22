import { Button } from '~/components/Button'
import { useNavigate } from 'react-router-dom'
import { UsersIcon } from '@heroicons/react/24/outline'
import { ArrowLongLeftIcon } from '@heroicons/react/16/solid'
import { useSetBackgroundFilter } from '~/hooks/useSetBackgroundFilter'
import { useLogout } from '~/hooks/useLogout'
import { Info } from '~/components/Info'

export const SessionExpired = () => {
  useSetBackgroundFilter(true)

  const navigate = useNavigate()
  const logout = useLogout()

  const goToLogin = () => {
    logout()
    navigate('/')
  }

  return (
    <Info
      Icon={UsersIcon}
      title='Session expired'
      subTitle='please enter your credentials again'
    >
      <Button onClick={goToLogin}>
        <ArrowLongLeftIcon className='size-4' />
        <span>Go to login</span>
      </Button>
    </Info>
  )
}
