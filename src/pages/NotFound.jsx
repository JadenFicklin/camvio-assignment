import { Link } from 'react-router-dom'
import { Button } from '~/components/Button'
import { Info } from '~/components/Info'
import { useSetBackgroundFilter } from '~/hooks/useSetBackgroundFilter'
import { ArrowLongLeftIcon } from '@heroicons/react/16/solid'
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline'

export const NotFound = () => {
  useSetBackgroundFilter(true)

  return (
    <Info Icon={QuestionMarkCircleIcon} title='404' subTitle='page not found'>
      <Link to='/'>
        <Button>
          <ArrowLongLeftIcon className='size-4' />
          Go to dashboard
        </Button>
      </Link>
    </Info>
  )
}
