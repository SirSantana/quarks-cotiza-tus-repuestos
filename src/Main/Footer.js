import styles from '@/styles/Footer.module.css'
import Link from 'next/link'
import Logo from '@/public/Logo1.png'
import FacebookLogo from '@/public/FacebookLogo.png'
import InstagramLogo from '@/public/InstagramLogo.png'
import WhatsappLogo from '@/public/WhatsappLogo.png'


export default function Footer() {
  return (
    <footer>
      <div className={styles.containerFooter}>
        <div className={styles.containerFooter2}>
          <div className={styles.containerText}>
            <h3 className={styles.title2}>Talleres mecanicos</h3>
            <Link style={{ textDecoration: 'none' }} href={'https://www.quarks.com.co'} ><p className={styles.subtitle}>Buscas un taller para tu auto en Bogota?</p></Link>

          </div>
          <div className={styles.containerText}>
            <h3 className={styles.title2}>Acerca de Nosotros</h3>
            <Link style={{ textDecoration: 'none' }} href={'/quienessomos'} ><p className={styles.subtitle}>¿Quienes somos?</p></Link>
            <Link style={{ textDecoration: 'none' }} href='https://www.quarks.com.co/pico-y-placa-hoy/bogota' ><p className={styles.subtitle}>Pico y Placa Bogota</p></Link>
            <Link style={{ textDecoration: 'none' }} href='https://www.quarks.com.co/pico-y-placa-hoy/medellin' ><p className={styles.subtitle}>Pico y Placa Medellín</p></Link>
            <Link style={{ textDecoration: 'none' }} href='https://www.quarks.com.co/pico-y-placa-hoy/bucaramanga' ><p className={styles.subtitle}>Pico y Placa Bucaramanga</p></Link>
          
          
          </div>
          <div className={styles.containerText}>
            <h3 className={styles.title2}>Legal</h3>
            <Link style={{ textDecoration: 'none' }} href='https://www.privacypolicies.com/live/09cd59af-1d7b-47b5-9dde-2e78d4dc9770' ><p className={styles.subtitle}>Politica de Privacidad</p></Link>
          </div>
        </div>
        <div className={styles.containerSocial}>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '8px', margin: '16px 0' }}>
            <Link rel='noopener noreferrer' style={{ textDecoration: 'none' }} href='https://www.instagram.com/quarks_automotriz/'><img src={InstagramLogo.src} className={styles.logo} alt={`Cotiza tus repuestos Instagram`} /></Link>
            <Link rel='noopener noreferrer' style={{ textDecoration: 'none' }} href='https://www.facebook.com/quarksautomotriz/'><img src={FacebookLogo.src} className={styles.logo}alt={`Cotiza tus repuestos Facebook`} /></Link>
            <Link rel='noopener noreferrer' style={{ textDecoration: 'none' }} href='https://www.facebook.com/quarksautomotriz/'><img src={WhatsappLogo.src} className={styles.logo} alt={`Cotiza tus repuestos Whatsapp`}/></Link>

          </div>
          <p className={styles.subtitleCopy}>(C) copyright Quarks 2023</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', flexDirection: 'column', alignItems: 'center', alignSelf: 'center' }}>
          <h3 style={{ color: 'white', fontSize: '20px', marginBottom: '16px' }}>Quarks Repuestos</h3>
          <img src={Logo.src} className={styles.image} alt={'Cotiza tus repuestos Logo'}/>
        </div>
      </div>
    </footer>
  )
}