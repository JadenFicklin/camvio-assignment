import { Input } from '~/components/Input'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/16/solid'
import { cn } from '~/utils/cn'
import { useState } from 'react'

export const PasswordInput = (props) => {
  const { ...rest } = props
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => setShowPassword(!showPassword)
  const Icon = showPassword ? EyeSlashIcon : EyeIcon

  const visibilityIconClasses = cn(
    'absolute right-3 bottom-3 size-4 cursor-pointer',
  )

  return (
    <div className='relative items-center w-full'>
      <Icon
        className={visibilityIconClasses}
        onClick={togglePasswordVisibility}
      />
      <Input
        label='Password'
        type={showPassword ? 'text' : 'password'}
        name='password'
        autoComplete='on'
        {...rest}
      />
    </div>
  )
}
