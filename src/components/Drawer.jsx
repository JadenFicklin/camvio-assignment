import { cn } from '~/utils/cn'

export const Drawer = (props) => {
  const { show, duration, children, className } = props

  const wrapperClasses = cn(
    'grid w-full duration-100 ease-in-out',
    show ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
  )

  const drawerClasses = cn('overflow-hidden', className)

  const styles = {
    transition: `grid-template-rows ${duration ?? '0.15s'} ease-in-out`,
  }

  return (
    <div aria-hidden={!show} className={wrapperClasses} style={styles}>
      <div className={drawerClasses}>{children}</div>
    </div>
  )
}
