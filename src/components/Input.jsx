import { cn } from '~/utils/cn'

export const Input = (props) => {
  const { id, label, className, ...rest } = props

  const inputClasses = cn(
    'bg-white px-4 h-10 font-bold text-neutral-900 rounded-full',
    'flex gap-2 items-center justify-center border border-neutral-200 border-solid',
    'duration-150 hover:bg-neutral-100 focus:bg-them-50',
    'focus:ringed',
    className,
  )

  return (
    <div className='flex flex-col gap-1 text-neutral-900 font-bold w-full'>
      <label htmlFor={id} className='text-xs'>
        {label}
      </label>
      <input className={inputClasses} {...rest} />
    </div>
  )
}
