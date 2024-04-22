import { Drawer } from '~/components/Drawer'
import { cn } from '~/utils/cn'

export const ErrorText = (props) => {
  const { error, className } = props

  const textClasses = cn(
    'text-red-500 text-xs font-bold flex self-start ml-2',
    className,
  )

  return (
    <Drawer show={error}>
      <span className={textClasses}>{error}</span>
    </Drawer>
  )
}
