

import styles from '@/styles/Navbar.module.css'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState, } from 'react';
import FormCotizar from '../Main/FormCotizar';

export default function Navbar2() {
  const router = useRouter()
  const ref = useRef(null)
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }} className={styles.headerNav}>
      <div ref={ref} className={styles.headerNav} >
        <div className={styles.navDiv}>
          <Link style={{ textDecoration: 'none', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px' }} href={'/'}>
            <img alt={'Cotiza tus repuestos logo'} src={'/Logo1.png'} className={styles.logo} />
            <h4 style={{ cursor: 'pointer', textDecoration: 'none', outline: 'none',color:'#373737' }} className={styles.titleNav}>Quarks Repuestos</h4>
          </Link>

          <ul className={styles.navv}>
            <li style={{ listStyle: 'none', cursor: 'pointer', textDecoration: 'none', color: router?.pathname === '/cotizaciones' ? '#373737' : '#373737' }} className={styles.subtitle}>Cotizaciones</li>
          </ul>
        </div>
      </div>
      {/* <FirstNewScreen /> */}
      {/* <button onClick={sendMessage}>What</button> */}
    </header>

  )
}