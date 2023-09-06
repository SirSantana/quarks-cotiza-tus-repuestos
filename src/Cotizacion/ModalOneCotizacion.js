import { GET_ONE_PREGUNTA } from '@/graphql/queries'
import styles from '@/styles/Main.module.css'
import { timeSince } from '@/utils/dateEs'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import CardCotizacionVendedor from './CardCotizacionVendedor'
import useAuth from '@/hooks/useAuth'
import FormCotizar from './FormCotizarVendedor'



export default function ModalOneCotizacion({ data, cotizaciones }) {
  const router = useRouter()
  const { user } = useAuth()
  const [visibleCotizar, setVisibleCotizar] = useState(false)

  return (
    <div className={styles.modalBackdrop} >
      <div className={styles.modalCoti}>
        <div style={{ display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '16px', alignItems: 'center', }}>
            <img src={`${data?.marca}.png`} style={{ height: '32px', width: '32px' }} />
            <div>
              <h4 style={{ fontSize: '16px', fontWeight: '600' }}>{data?.referencia}</h4>
              <p style={{ fontSize: '12px', color: '#5C5C5C' }}>hace {timeSince(data?.fecha)}</p>
            </div>
            
          </div>
          {user?.email === process.env.NEXT_PUBLIC_EMAIL &&
            <button onClick={()=> setVisibleCotizar(true)} style={{ height:'28px', padding:'4px', fontSize:'12px', width:'100px', borderRadius:'4px'}} className={styles.button}>
              Cotizar
            </button>}
          <ion-icon onClick={() => router.push('/cotizaciones')} style={{ fontSize: '24px', cursor: 'pointer' }} name="close-outline"></ion-icon>
          
        </div>
        {cotizaciones.length<=0&& 
        <div onClick={() => router.push('/cotizaciones')} className={styles.cardCotizacionVendedor}>
          <ion-icon style={{ fontSize: '24px'}} name="alert-circle"></ion-icon>
          <p style={{ fontSize: '14px' }}>Aún no hay cotizaciones, vuelve pronto</p>
          </div>
        }
        {data?.imagen && <img alt={data?.titulo} src={data?.imagen} style={{ width: '100%', objectFit: 'contain', height: 'auto',  maxHeight: '400px', margin: '8px 0' }} />}
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', justifyContent: 'space-between', height: '100%', width: '100%', marginTop: '16px' }}>
          <p style={{ fontSize: '14px' }}>{data?.titulo}</p>
        </div>


        {cotizaciones &&
          <div className={styles.gridCardCotizaciones}>
            {cotizaciones.map(el => (
              <CardCotizacionVendedor cotizacion={el} pregunta={data?.titulo} emailVendedor={user?.email} />
            ))}
          </div>
        }
        
        {visibleCotizar &&
          <FormCotizar setVisibleCotizar={setVisibleCotizar} celular={data?.celular}emailVendedor={user?.email} dataPregunta={data} cotizaciones={cotizaciones}/>
        }

      </div>

    </div>

  )
}

