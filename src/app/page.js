import BgHeader from '@/components/BgHeader'
import BgHeaderMobile from '@/components/BgHeaderMobile'
import JobPost from '@/components/JobPost'

export default function Home() {
  return (
    <main>
      <header className='w-full h-full bg-header'>
        <BgHeaderMobile className='w-full h-full bg-darkcyan sm:hidden' />
        <BgHeader className='hidden w-full h-full bg-darkcyan sm:inline-block' />
      </header>
      <section className='relative flex flex-col items-center min-h-screen bg-lightGrayCyan min-w-screen'>
        <JobPost />
      </section>
    </main>
  )
}
