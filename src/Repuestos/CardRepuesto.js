import styles from '@/styles/Repuestos.module.css'
import Link from 'next/link'


export default function CardRepuesto({ repuesto }) {
  let textRepuesto = repuesto?.repuesto.replace(/ /g, "-").replace(/\//g, "-")

  console.log(textRepuesto);
  return (
    <Link href={`/repuesto/${repuesto?.repuesto.replace(/ /g, "-").replace(/\//g, "-")}-${repuesto.idUrl}`} style={{textDecoration:'none'}} className={styles.cardRepuesto}>
      <img src={repuesto?.imagen} className={styles.imgRepuestoCard}  />
      <h2 className={styles.titleRepuesto}>{repuesto.repuesto}</h2>
      <div className={styles.containerFooterCard}>
        <p className={styles.textPrice}>${repuesto.precio}</p>
        <button style={{ cursor: 'pointer', fontWeight: '600', fontSize: '12px', padding: '0', borderRadius: '2px', alignSelf: 'flex-end', color: '#f50057', backgroundColor: 'inherit', margin: 0, height: '28px' }} className={styles.button}>
          Ver repuesto
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </button>
      </div>
    </Link>
  )
}