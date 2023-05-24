import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayout'
import { DarkLayout } from '@/components/layouts/DarkLayout'
import { ReactElement } from 'react'

const Pricing = () =>  {
  return (
    <>
      
        
        <h1>Pricing Page</h1>

          <h1 className={ 'title' }>
            Ir a <Link href='/'>Home</Link>
          </h1>


          <p className={'description'}>
            Get started by editing{' '};
            <code className={'code'}>pages/pricing/index.tsx</code>
          </p>

           
      
    </>
  )
}

Pricing.getLayout = function getLayout( page: ReactElement ){
  return (
    <MainLayout>
      <DarkLayout>
        { page }
      </DarkLayout>
    </MainLayout>
  )
}

export default Pricing;
