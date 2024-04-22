import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { verify } from '~/utils/verify'
import { getLocalStorage, setLocalStorage } from '~/utils/localStorage'
import { Button } from '~/components/Button'
import { Input } from '~/components/Input'
import { ErrorText } from '~/components/ErrorText'
import { BackButton } from '~/components/authentication/BackButton'
import { LockClosedIcon } from '@heroicons/react/16/solid'
import { cn } from '~/utils/cn'
import axios from 'axios'

export const AccountForm = (props) => {
  const { formState, setFormState } = props

  const [accountNumber, setAccountNumber] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const navigate = useNavigate()

  const submit = async (e) => {
    e.preventDefault()

    if (!accountNumber) {
      setError('Please enter your account number')
      return
    }

    if (!verify.isNumber(accountNumber)) {
      setError('Please enter a valid account number')
      return
    }

    try {
      setLoading(true)

      const user = getLocalStorage('user')
      const token = user?.token
      const config = token ? { headers: { 'X-API-Token': token } } : {}

      const baseUrl = import.meta.env.VITE_BACKEND_URL

      const endpoint =
        baseUrl +
        `/accounts?limit=20&searchType=ACCOUNTNUMBER&term=${accountNumber}`

      const response = await axios.get(endpoint, config)

      const accountNotFound = !response?.data?.length
      if (accountNotFound) {
        setError('account not found')
        return
      }

      const accountData = response?.data[0]
      setLocalStorage('account', accountData)
      setError('')
      navigate('/dashboard')
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

  const isActive = formState === 'account'

  const wrapperClasses = cn(
    'size-full flex justify-center items-center',
    'absolute left-0 duration-300',
    !isActive && 'left-full',
  )

  return (
    <div className={wrapperClasses}>
      <BackButton setFormState={setFormState} disabled={!isActive} />
      <form className='flex flex-col gap-3 min-w-52'>
        <Input
          label='Account number'
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
          disabled={!isActive}
        />
        <Button
          className='w-full'
          onClick={submit}
          loading={loading}
          disabled={!isActive}
        >
          <LockClosedIcon className='size-4' />
          <span>Login</span>
        </Button>
        <ErrorText error={error} />
      </form>
    </div>
  )
}
