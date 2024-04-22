import { useState } from 'react'
import { verify } from '~/utils/verify'
import { getLocalStorage } from '~/utils/localStorage'
import { format } from 'date-fns'
import { Input } from '~/components/Input'
import { Button } from '~/components/Button'
import { ErrorText } from '~/components/ErrorText'
import { PopoverPanel } from '~/components/PopoverPanel'
import { Popover } from '@headlessui/react'
import { CurrencyDollarIcon } from '@heroicons/react/16/solid'
import axios from 'axios'

export const MakePaymentPopup = () => {
  const [amount, setAmount] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const makePayment = async () => {
    if (!amount) {
      setError('Please enter an amount.')
      return
    }

    if (!verify.isNumber(amount)) {
      setError('Please enter a valid amount.')
      return
    }

    if (amount <= 0) {
      setError('Please enter an amount greater than 0.')
      return
    }

    try {
      setLoading(true)

      const currentFormattedDate = format(new Date(), "yyyy-MM-dd'T'HH:mm:ss")
      const data = {
        paymentAmount: amount,
        paymentOption: 'ALL_UNPAID_INVOICES',
        locationId: 103,
        reference: currentFormattedDate,
      }

      const user = getLocalStorage('user')
      const token = user?.token
      const config = token ? { headers: { 'X-API-Token': token } } : {}

      const baseUrl = import.meta.env.VITE_BACKEND_URL

      const account = getLocalStorage('account')
      const endpoint = baseUrl + `/account/${account.id}/payment/external`

      await axios.post(endpoint, data, config)

      setSuccess(true)
      setTimeout(() => setSuccess(false), 3000)
      setAmount('')
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

  const inputProps = {
    value: amount,
    onChange: (e) => setAmount(e.target.value),
  }

  return (
    <div>
      <Popover className='relative'>
        <Popover.Button as={Button} className='mt-3'>
          <CurrencyDollarIcon className='size-4' />
          <span>Make a payment</span>
        </Popover.Button>
        <PopoverPanel className='left-0 right-auto gap-3 flex flex-col w-64'>
          <Input
            label='amount'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <Button
            loading={loading}
            type={success ? 'success' : ''}
            onClick={makePayment}
            disabled={success}
          >
            {success ? 'Success!' : 'Submit'}
          </Button>
          <ErrorText error={error} />
        </PopoverPanel>
      </Popover>
    </div>
  )
}
