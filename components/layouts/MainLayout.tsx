import Head from 'next/head'
import { Navbar } from '../Navbar'

import styles from './MainLayout.module.css'
import { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const MainLayout: FC<Props> = ( { children }: any ) => {
    return (
        <div className={ styles.container }>
          <Head>
            <title>Home - Demo</title>
            <meta name="description" content="Home Page" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <Navbar/>
    
          <main className={`${styles.main}`}>

            { children }
                          
          </main>
        </div>
      )
}
