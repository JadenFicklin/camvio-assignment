import { useEffect } from 'react'
import { useSetAtom } from 'jotai'
import { filterAtom } from '~/atoms/global.atoms'

export const useSetBackgroundFilter = (filterOn) => {
  const setFilter = useSetAtom(filterAtom)

  useEffect(() => {
    setFilter(filterOn)
  }, [])
}
