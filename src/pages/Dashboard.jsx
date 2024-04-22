import { Nav } from '~/components/Nav'
import { BalanceCard } from '~/components/dashboard/BalanceCard'
import { useSetBackgroundFilter } from '~/hooks/useSetBackgroundFilter'

export const Dashboard = () => {
  useSetBackgroundFilter(false)

  return (
    <>
      <Nav />
      <section className='p-8'>
        <BalanceCard />
      </section>
    </>
  )
}
