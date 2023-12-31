import styles from '@/styles/Repuestos.module.css'
import Link from 'next/link'


export default function CardRepuesto({ repuesto }) {
  let textRepuesto = repuesto?.repuesto.replace(/ /g, "-").replace(/\//g, "-")

  // let precio = Number(repuesto.precio);
  let descuento = Number(repuesto.descuento);
  let price = parseFloat(repuesto?.precio.replace(/\./g, ''))

  const descuentoFraccion = descuento / 100;
  const precioConDescuento2 = price - (price * descuentoFraccion)

  // let precioConDescuento = precio - (precio * descuento / 100);
  return (
    <Link href={`/repuesto/${repuesto?.repuesto.replace(/ /g, "-").replace(/\//g, "-")}-${repuesto.idUrl}`} style={{ textDecoration: 'none' }} className={styles.cardRepuesto}>
      <img src={repuesto?.imagen} className={styles.imgRepuestoCard} alt={repuesto?.repuesto}/>
      <h2 className={styles.titleRepuesto}>{repuesto.repuesto}</h2>
      <p style={{fontSize:'14px',fontWeight:'500', color:'#5c5c5c'}}>{repuesto?.fabricante}</p>

      <div className={styles.containerFooterCard}>

        <div>
          {repuesto?.descuento > 0 && <p style={{ fontSize: '12px', color: '#f50057', lineHeight: '12px', textDecoration: 'line-through' }}>Antes ${repuesto?.precio}</p>}
          <p className={styles.textPrice}>${precioConDescuento2.toLocaleString()}{repuesto?.descuento > 0 && <b style={{ fontSize: '14px', color: 'green', fontWeight: '500', marginLeft: '8px' }}>{repuesto?.descuento}% OFF</b>}</p>
        </div>
        {/* <button style={{ cursor: 'pointer', fontWeight: '600', fontSize: '12px', padding: '0', borderRadius: '2px', alignSelf: 'flex-end', color: '#f50057', backgroundColor: 'inherit', margin: 0, height: '28px' }} className={styles.button}>
          Ver repuesto
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </button> */}
      </div>
    </Link>
  )
}