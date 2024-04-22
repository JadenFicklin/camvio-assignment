import { Button } from '~/components/Button'
import { Link } from 'react-router-dom'
import { NoSymbolIcon } from '@heroicons/react/24/outline'
import { ArrowLongLeftIcon } from '@heroicons/react/16/solid'
import { useSetBackgroundFilter } from '~/hooks/useSetBackgroundFilter'
import { Info } from '~/components/Info'

export const Unauthorized = () => {
  useSetBackgroundFilter(true)

  return (
    <Info
      Icon={NoSymbolIcon}
      title='Unauthorized'
      subTitle='user does not have access'
    >
      <Link to='/' className='grid w-full place-content-center'>
        <Button>
          <ArrowLongLeftIcon className='size-4' />
          Go to login
        </Button>
      </Link>
    </Info>
  )
}
