import { cn } from '~/utils/cn'
import { BeatLoader } from 'react-spinners'
import { forwardRef } from 'react'

export const Button = forwardRef((props, ref) => {
  const { className, type, loading, disabled, children, ...rest } = props

  const tabbable = disabled ? '-1' : ''

  const types = {
    success:
      'bg-green-500 hover:bg-green-400 active:bg-green-600 focus:!ring-green-500',
    danger: 'bg-red-500 hover:bg-red-400 active:bg-red-600 focus:!ring-red-500',
  }

  const buttonClasses = cn(
    'bg-theme-500 px-8 h-10 font-bold text-white rounded-full',
    'flex gap-2 items-center justify-center',
    'duration-150 hover:bg-theme-400 active:bg-theme-600',
    'focus:ringed',
    (loading || disabled) && 'opacity-50 pointer-events-none',
    types?.[type],
    className,
  )

  return (
    <button ref={ref} className={buttonClasses} tabIndex={tabbable} {...rest}>
      {loading ? <BeatLoader color='white' size={8} /> : children}
    </button>
  )
})
