import { timeSince } from "@/utils/dateEs";
import styles from '@/styles/Landing.module.css'
import PriceFormat from "@/utils/priceFormat";
import { useRouter } from "next/router";



export default function CardCotizacionVendedor({ cotizacion, pregunta }) {
  const router = useRouter()
  const precio = PriceFormat({price:cotizacion?.precio})
  const urlPregunta = `https://www.quarks.com.co${router.asPath}`
  
  const sendMessage = () => {
    let url = `https://api.whatsapp.com/send?phone=57${cotizacion?.celular}`;
    url += `&text=${encodeURI(`😁 Hola, quiero saber si tienen disponibilidad de la cotizacion N°${cotizacion.id} \n ✍️ Descripcion: ${pregunta} \n 📌 Link de la pregunta: ${urlPregunta}`)}&app_absent=0`
    window.open(url);
  }
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
      <button onMouseDown={(e)=> e.preventDefault()} onClick={sendMessage} style={{marginTop:'8px', borderRadius:'4px', cursor:'pointer'}} className={styles.button}>
        Estoy interesado
      </button>
    </div>
  )
}