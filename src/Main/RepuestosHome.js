
import repuestos from '@/src/repuestos.json'
import CardRepuesto from '../Repuestos/CardRepuesto'
import styles from '@/styles/Landing.module.css'
import { useRouter } from 'next/router'

export default function RepuestosHome() {
  const router = useRouter()
  return (
    <section style={{marginBottom:'64px'}} className={styles.containerGridTalleres}>
      <h2 className={styles.title2} style={{ textAlign: 'center', marginBottom: '64px' }}>
        Repuestos Chevrolet Corsa
      </h2>
      <div className={styles.gridCardTalleres}>
        {repuestos?.slice(0, 4).map(repuesto => (
          <CardRepuesto repuesto={repuesto} />
        ))}
      </div>
      <button
      onClick={()=> router.push('/repuestos/chevrolet-corsa')}
        className={styles.button}
        style={{marginTop:'32px', textDecoration: 'none', fontSize: '14px', cursor: 'pointer', color: 'white', alignSelf: 'center' }}
      >
        Ver mas repuestos
        <ion-icon name="arrow-forward-outline"></ion-icon>

      </button>
    </section>
  )
}