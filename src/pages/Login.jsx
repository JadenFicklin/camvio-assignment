import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getLocalStorage } from '~/utils/localStorage'
import { cn } from '~/utils/cn'
import { Logo } from '~/components/Logo'
import { AccountForm } from '~/components/authentication/AccountForm'
import { CredentialsForm } from '~/components/authentication/CredentialsForm'
import { useSetBackgroundFilter } from '~/hooks/useSetBackgroundFilter'
import mountainBackground from '~/assets/background.jpg'

export const Login = () => {
  useSetBackgroundFilter(true)

  const [formState, setFormState] = useState('credentials')

  const navigate = useNavigate()

  useEffect(() => {
    const user = getLocalStorage('user')
    const account = getLocalStorage('account')

    if (!user) return
    if (user) setFormState('account')
    if (account) navigate('/dashboard')
  }, [])

  const cardClasses = cn(
    'h-[500px] m-12 relative',
    'w-full lg:w-[900px]',
    'flex justify-between bg-white/90',
    'shadow-lg rounded-lg overflow-hidden',
  )

  const imageClasses = cn(
    'size-full bg-cover bg-center',
    'flex justify-center items-center',
    'hidden md:flex',
  )

  const imageCardStyle = { backgroundImage: `url(${mountainBackground})` }

  return (
    <div className='size-full flex justify-center items-center animate-fade-in'>
      <main className={cardClasses}>
        <section className={imageClasses} style={imageCardStyle}>
          <Logo className='md:size-48 lg:size-72 text-white' />
        </section>

        <section className='relative size-full flex justify-center items-center overflow-hidden'>
          <CredentialsForm formState={formState} setFormState={setFormState} />
          <AccountForm formState={formState} setFormState={setFormState} />
        </section>
      </main>
    </div>
  )
}
