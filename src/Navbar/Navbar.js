

import styles from '@/styles/Navbar.module.css'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState, } from 'react';
import FormCotizar from '../Main/FormCotizar';

export default function Navbar() {
  const router = useRouter()
  const ref = useRef(null)
  const [scrolled, setScrolled] = useState(false);

  const sendMessage = (problema) => {
    let url = `https://api.whatsapp.com/send?phone=57${3202754087}`;

    window.open(url);
  }
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
    <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }} className={styles.header}>
      <div ref={ref} className={` ${scrolled ? styles.headerScrolled : styles.header}`} >
        <div className={styles.navDiv}>
          <Link style={{ textDecoration: 'none', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px' }} href={'/'}>
            <img alt={'Cotiza tus repuestos logo'} src={'/Logo1.png'} className={styles.logo} />
            <h4 style={{ cursor: 'pointer', textDecoration: 'none', outline: 'none', }} className={styles.titleNav}>Quarks Repuestos</h4>
          </Link>

          <ul className={styles.navv}>
            <li style={{ listStyle: 'none', cursor: 'pointer', textDecoration: 'none', color: router?.pathname === '/repuestos/chevrolet-corsa' ? '#c5c5c5' : 'white', fontWeight: '500' }} className={styles.subtitle}>
              <Link style={{ textDecoration: 'none', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px', listStyle: 'none', cursor: 'pointer', textDecoration: 'none', color: router?.pathname === '/repuestos/chevrolet-corsa' ? '#c5c5c5' : 'white', fontWeight: '500' }} href={'/repuestos/chevrolet-corsa'}>Productos
              </Link>
            </li>

            <li style={{ listStyle: 'none', cursor: 'pointer', textDecoration: 'none', color: router?.pathname === '/cotizaciones' ? '#c5c5c5' : 'white', fontWeight: '500' }} className={styles.subtitle}>
              <Link style={{ textDecoration: 'none', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px',listStyle: 'none', cursor: 'pointer', textDecoration: 'none', color: router?.pathname === '/cotizaciones' ? '#c5c5c5' : 'white', fontWeight: '500' }} href={'/cotizaciones'}>
                Cotizaciones
              </Link>

            </li>


          </ul>
        </div>
      </div>
      {/* <FirstNewScreen /> */}
      {/* <button onClick={sendMessage}>What</button> */}
    </header>

  )
}