import { useState } from 'react'
import { setLocalStorage } from '~/utils/localStorage'
import { Input } from '~/components/Input'
import { Button } from '~/components/Button'
import { ErrorText } from '~/components/ErrorText'
import { PasswordInput } from '~/components/authentication/PasswordInput'
import { LockClosedIcon } from '@heroicons/react/16/solid'
import { cn } from '~/utils/cn'
import axios from 'axios'

export const CredentialsForm = (props) => {
  const { formState, setFormState } = props

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const submit = async (e) => {
    e.preventDefault()

    if (!name) {
      setError('Username is required.')
      return
    }

    if (!password) {
      setError('Password is required.')
      return
    }

    try {
      setLoading(true)

      const baseUrl = import.meta.env.VITE_BACKEND_URL
      const endpoint =
        baseUrl + `/auth/login?j_password=${password}&j_username=${name}`

      const response = await axios.get(endpoint)

      const { userid, username, token } = response?.data
      const userData = { userid, username, token }

      setLocalStorage('user', userData)
      setFormState('account')

      setError('')
    } catch (err) {
      const data = err?.response?.data
      const hasError = data?.error

      if (hasError) {
        setError(data?.error?.message)
        return
      }

      setError('Something went wrong on our side, please try again later.')
    } finally {
      setLoading(false)
    }
  }

  const isActive = formState === 'credentials'

  const wrapperClasses = cn(
    'size-full flex justify-center items-center',
    'absolute left-0 duration-300',
    !isActive && '-left-full',
  )

  return (
    <div className={wrapperClasses}>
      <form className='flex flex-col justify-center items-center gap-3 w-52 size-full'>
        <Input
          label='Username'
          name='username'
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={!isActive}
        />
        <PasswordInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={!isActive}
        />
        <Button
          className='w-full mt-3'
          onClick={submit}
          loading={loading}
          disabled={!isActive}
        >
          <LockClosedIcon className='size-4' />
          <span>Submit</span>
        </Button>
        <ErrorText error={error} />
      </form>
    </div>
  )
}
