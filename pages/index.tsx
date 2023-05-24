import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayout'
import { DarkLayout } from '@/components/layouts/DarkLayout'
import { ReactElement } from 'react'

const Home = () => {
  return (

      <>      
        <h1>Home Page</h1>

        <h1 className={ 'title' }>
          Ir a <Link href="/about">About</Link>
        </h1>

        <p className={'description'}>
          Get started by editing{' '};
          <code className={'code'}>pages/index.tsx</code>
        </p>
      </>
   
  )
}

Home.getLayout = function getLayout( page: ReactElement ){
  return (
    <MainLayout>
      <DarkLayout>
        { page }
      </DarkLayout>
    </MainLayout>
  )
}

export default Home;
