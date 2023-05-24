import styles from './Navbar.module.css';
import { ActiveLink } from "./ActiveLink";


const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

export const Navbar = () => {
  return (
    <div>
        <nav className={ styles['menu-container'] }>
            
            {
              menuItems.map( menu => (
                <ActiveLink key={ menu.href } text={ menu.text} href={ menu.href } />
              ))
            }
            
            {/* <ActiveLink text='About' href="/about" />
            <ActiveLink text='Contact' href="/contact"/>
            <ActiveLink text='Pricing' href="/pricing"/> */}

        </nav>
    </div>
  )
}
