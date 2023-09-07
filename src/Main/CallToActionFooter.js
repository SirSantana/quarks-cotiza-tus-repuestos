import styles from '@/styles/Footer.module.css'
import { useRouter } from 'next/router'


export default function CallToActionFooter() {
  const router = useRouter()
  return (
    <div className={styles.container}>
      <h2 className={styles.title1}>Estas listo para cotizar repuestos para chevrolet originales y homologados sin salir de casa?</h2>
      <button onClick={() => router.push('/')} className={styles.button}>
        Cotiza ya!
      </button>
    </div>
  )
}