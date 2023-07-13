import {React,useState} from 'react'
import styles from './NavBar.module.css'
import {AiOutlineMenu, AiOutlineSearch, AiOutlineUser, AiOutlineClose} from 'react-icons/ai'
import Logo from '../../images/logo.png'

const NavBar = () => {

    const [nav,setNav] = useState(false);

  return (
    <header className={styles.navbar}>
        <img className={styles.logo} src={Logo} alt='/'/>
        <nav>
            <ul className={nav ? [styles.menu,styles.active].join(' ') : [styles.menu]}>
                <li>
                    <a href='/'>Learn More</a>
                </li>
                <li>
                    <a href='/'>Log in</a>
                </li>
                <li>
                    <a href='/'>Sign up</a>
                </li>
                <li>
                    <AiOutlineSearch size={25} style={{marginTop: '6px'}}/>
                </li>
                <li>
                    <AiOutlineUser size={25} style={{marginTop: '6px'}}/>
                </li>
            </ul>
        </nav>
        <div className={styles.mobile_btn} >
            {nav ? <AiOutlineClose onClick={() => setNav(!nav)} size={25}/> : <AiOutlineMenu onClick={() => setNav(!nav)} size={25}/>}    
        </div>

    </header>
  )
}

export default NavBar