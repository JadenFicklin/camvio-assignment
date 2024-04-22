import { ArrowLongLeftIcon } from '@heroicons/react/16/solid'
import { Button } from '~/components/Button'
import { cn } from '~/utils/cn'
import { deleteLocalStorage } from '~/utils/localStorage'

export const BackButton = (props) => {
  const { setFormState, ...rest } = props

  const goBack = () => {
    deleteLocalStorage('user')
    setFormState('credentials')
  }

  const backButtonClasses = cn(
    'text-xs px-4 h-6 absolute top-4 right-4',
    'bg-neutral-900/5 border border-solid border-neutral-900/5',
    'text-neutral-900 hover:bg-neutral-900/10',
    'active:bg-neutral-900/20 focus:!ring-gray-800',
  )

  return (
    <Button className={backButtonClasses} onClick={goBack} {...rest}>
      <ArrowLongLeftIcon className='size-3' />
      <span>Back</span>
    </Button>
  )
}
