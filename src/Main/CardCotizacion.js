import styles from '@/styles/Landing.module.css'
import { timeSince } from '@/utils/dateEs';
import { useRouter } from 'next/router';
import ModalOneCotizacion from '../Cotizacion/ModalOneCotizacion';

export default function CardCotizacion({ cotizacion, data2, data3 }) {
  const router = useRouter()
  const handleSeeCotizaciones = () => {
    router.push({
      pathname: '/cotizacion',
      query: { cotizacion: `${cotizacion.titulo.replace(/ /g, '-')}-${cotizacion.id}` },
    });
  }
  const queryCotizacion = router?.query?.cotizacion

  return (
    <>
      <section style={{ cursor: 'pointer' }} onClick={handleSeeCotizaciones} className={styles.cardNewTaller}>

        <div className={styles.containerDataNewTaller}>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '16px', width: '100%', alignItems: 'center' }}>
            <img src={`${cotizacion.marca}.png`} style={{ height: '32px', width: '32px' }} />
            <div>
              <h4 style={{ fontSize: '16px', fontWeight: '600' }}>{cotizacion.referencia}</h4>
              <p style={{ fontSize: '12px', color: '#5C5C5C' }}>hace {timeSince(cotizacion?.fecha)}</p>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', justifyContent: 'space-between', height: '100%', width: '100%', }}>
            <p style={{ fontSize: '14px' }}>{cotizacion.titulo}</p>
            <button style={{ cursor: 'pointer', fontWeight: '600', fontSize: '12px', padding: '0', borderRadius: '2px', alignSelf: 'flex-end', color: '#f50057', backgroundColor: 'inherit', margin: 0, height: '28px' }} className={styles.button}>
              Ver cotizaciones
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </button>
          </div>
        </div>
      </section>
      {queryCotizacion && 
        <ModalOneCotizacion data={data2?.getOnePregunta} cotizaciones={data3?.getCotizaciones} />
     }
    </>
  )
}