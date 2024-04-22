import { useAtomValue } from 'jotai'
import { filterAtom } from '~/atoms/global.atoms'
import { cn } from '~/utils/cn'

export const BackgroundFilter = () => {
  const filter = useAtomValue(filterAtom)

  const backgroundClasses = cn(
    'fixed inset-0 -z-10 duration-700',
    filter && 'backdrop-blur-lg bg-white/25',
  )

  return <div className={backgroundClasses} />
}
