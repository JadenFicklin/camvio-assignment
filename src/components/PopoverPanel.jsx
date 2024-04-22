import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { cn } from '~/utils/cn'

export const PopoverPanel = (props) => {
  const { children, className } = props

  const popoverClasses = cn(
    'absolute right-0 mt-4',
    'bg-white backdrop-blur-lg shadow-lg rounded-lg p-3',
    className,
  )

  const arrowClasses = cn(
    'absolute size-3 bg-white backdrop-blur-lg',
    'rotate-45 -translate-x-1/2 left-1/2 -top-1',
  )

  return (
    <Transition
      as={Fragment}
      enter='transition ease-out duration-200'
      enterFrom='opacity-0 translate-y-1'
      enterTo='opacity-100 translate-y-0'
      leave='transition ease-in duration-150'
      leaveFrom='opacity-100 translate-y-0'
      leaveTo='opacity-0 translate-y-1'
    >
      <Popover.Panel className={popoverClasses}>
        <div className={arrowClasses} />
        {children}
      </Popover.Panel>
    </Transition>
  )
}
