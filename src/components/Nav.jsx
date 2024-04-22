import { Popover } from '@headlessui/react'
import { UserIcon } from '@heroicons/react/16/solid'
import { Logo } from '~/components/Logo'
import { PopoverPanel } from '~/components/PopoverPanel'
import { useLogout } from '~/hooks/useLogout'
import { getLocalStorage } from '~/utils/localStorage'
import { cn } from '~/utils/cn'

export const Nav = () => {
  const user = getLocalStorage('user')

  const logout = useLogout()

  const navClasses = cn(
    'w-full h-16 bg-white/25 drop-shadow-md backdrop-blur-lg flex',
    'flex justify-between items-center px-6',
  )

  const userButtonClasses = cn(
    'bg-white/25 hover:bg-white/50',
    'active:bg-white/10 focus:!ring-neutral-900 focus:ringed',
    'border border-white/10 border-solid',
    'text-sm font-bold duration-150',
    'px-6 h-8 rounded-full outline-none',
    'flex gap-2 items-center justify-center',
  )

  const menubuttonClasses = cn(
    'font-bold px-6 py-2 rounded-full duration-150',
    'hover:bg-black/10 active:bg-black/25',
  )

  return (
    <nav className={navClasses}>
      <Logo className='h-6 sm:h-8 text-neutral-800' />
      <Popover className='relative'>
        <Popover.Button className={userButtonClasses}>
          <UserIcon className='w-4 h-4' />
          <span className='text-sm font-bold'>{user?.username}</span>
        </Popover.Button>
        <PopoverPanel>
          <button className={menubuttonClasses} onClick={logout}>
            Logout
          </button>
        </PopoverPanel>
      </Popover>
    </nav>
  )
}
