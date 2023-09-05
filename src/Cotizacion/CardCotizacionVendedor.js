import { timeSince } from "@/utils/dateEs";
import styles from '@/styles/Landing.module.css'
import PriceFormat from "@/utils/priceFormat";



export default function CardCotizacionVendedor({ cotizacion }) {
  const precio = PriceFormat({price:cotizacion?.precio})
  return (
    <div className={styles.cardCotizacionVendedor} >
      <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between',}}>
        <h2 style={{ fontSize: '24px', fontWeight: '600' }}>$ {precio}</h2>
        <p style={{ fontSize: '10px' }}>hace {timeSince(cotizacion.fecha)}</p>
      </div>
      <div style={{marginTop:'8px', display:'flex', gap:'8px', flexDirection:'column'}}>
        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
          <p style={{ fontSize: '14px', color:'#929090'}}>Garantía</p>
          <p style={{ fontSize: '14px', fontWeight:'500' }}>{cotizacion.garantia} mes(es)</p>
        </div>
        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
          <p style={{ fontSize: '14px', color:'#929090'}}>Marca / Origen</p>
          <p style={{ fontSize: '14px', fontWeight:'500' }}>{cotizacion.marca}</p>
        </div>
        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
          <p style={{ fontSize: '14px', color:'#929090'}}>Estado</p>
          <p style={{ fontSize: '14px', fontWeight:'500' }}>{cotizacion.estado}</p>
        </div>
      </div>
    </div>
  )
}