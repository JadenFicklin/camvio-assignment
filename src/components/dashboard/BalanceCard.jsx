import { useEffect, useState } from 'react'
import { getLocalStorage } from '~/utils/localStorage'
import { balanceAtom } from '~/atoms/dashboard.atoms'
import { useAtom } from 'jotai'
import { useNavigate } from 'react-router-dom'
import { ArrowPathIcon } from '@heroicons/react/16/solid'
import { GridLoader } from 'react-spinners'
import { Button } from '~/components/Button'
import { ErrorText } from '~/components/ErrorText'
import { MakePaymentPopup } from '~/components/dashboard/MakePaymentPopup'
import { cn } from '~/utils/cn'
import axios from 'axios'

export const BalanceCard = () => {
  const [balance, setBalance] = useAtom(balanceAtom)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const navigate = useNavigate()

  const getBalance = async () => {
    try {
      setLoading(true)

      const account = getLocalStorage('account')
      const user = getLocalStorage('user')

      const token = user?.token
      const config = token ? { headers: { 'X-API-Token': token } } : {}

      const baseUrl = import.meta.env.VITE_BACKEND_URL
      const endpoint = baseUrl + `/account/${account.id}/balance`

      const response = await axios.get(endpoint, config)

      if (!response?.data?.balance) {
        setError('There was an error loading your balance.')
        return
      }

      setBalance(response?.data)
      setError(null)
    } catch (err) {
      const status = err?.response?.status
      const sessionExpired = status === 401
      if (sessionExpired) {
        navigate('/session-expired')
        return
      }

      setError('There was an error loading your balance.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getBalance()
  }, [])

  const cardClasses = cn(
    'rounded-lg shadow-lg backdrop-blur-lg',
    'p-8 w-full md:w-96 mt-12 md:mt-0 flex flex-col gap-2 bg-white/25',
    loading && 'animate-pulse items-center',
  )

  if (loading) {
    return (
      <div className={cardClasses}>
        <GridLoader size={24} color='gray' />
      </div>
    )
  }

  if (error) {
    return (
      <div className={cardClasses}>
        <ErrorText className='text-md' error={error} />
        <Button className='mt-2' onClick={getBalance}>
          <ArrowPathIcon className='size-4' />
          <span>Try again</span>
        </Button>
      </div>
    )
  }

  return (
    <div className={cardClasses}>
      <span className='text-2xl font-bold'>Balance</span>
      <span className='text-6xl'>${balance?.balance}</span>
      <MakePaymentPopup />
    </div>
  )
}
