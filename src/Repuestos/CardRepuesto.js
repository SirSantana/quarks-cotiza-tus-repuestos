import styles from '@/styles/Repuestos.module.css'
import Link from 'next/link'


export default function CardRepuesto({ repuesto }) {
  let textRepuesto = repuesto?.repuesto.replace(/ /g, "-").replace(/\//g, "-")

  let precio = Number(repuesto.precio);
  let descuento = Number(repuesto.descuento);

  let precioConDescuento = precio - (precio * descuento / 100);
  return (
    <Link href={`/repuesto/${repuesto?.repuesto.replace(/ /g, "-").replace(/\//g, "-")}-${repuesto.idUrl}`} style={{ textDecoration: 'none' }} className={styles.cardRepuesto}>
      <img src={repuesto?.imagen} className={styles.imgRepuestoCard} />
      <h2 className={styles.titleRepuesto}>{repuesto.repuesto}</h2>
      <div className={styles.containerFooterCard}>
        <p className={styles.textPrice}>${precioConDescuento?.toFixed(3)}{repuesto?.descuento > 0 && <b style={{ fontSize: '14px', color: 'green', fontWeight: '500', marginLeft: '8px' }}>{repuesto?.descuento}% OFF</b>}</p>
        <button style={{ cursor: 'pointer', fontWeight: '600', fontSize: '12px', padding: '0', borderRadius: '2px', alignSelf: 'flex-end', color: '#f50057', backgroundColor: 'inherit', margin: 0, height: '28px' }} className={styles.button}>
          Ver repuesto
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </button>
      </div>
    </Link>
  )
}