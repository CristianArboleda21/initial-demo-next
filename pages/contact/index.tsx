import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayout'
import { DarkLayout } from '@/components/layouts/DarkLayout'
import { ReactElement } from 'react'

const Contact = () =>  {
  return (
    <>
      
        
        <h1>Contact Page</h1>

          <h1 className={ 'title' }>
            Ir a <Link href='/'>Home</Link>
          </h1>


          <p className={'description'}>
            Get started by editing{' '};
            <code className={'code'}>pages/contact/contact.tsx</code>
          </p>

           
      
    </>
  )
}

Contact.getLayout = function getLayout( page: ReactElement ){
  return (
    <MainLayout>
      <DarkLayout>
        { page }
      </DarkLayout>
    </MainLayout>
  )
}

export default Contact;
