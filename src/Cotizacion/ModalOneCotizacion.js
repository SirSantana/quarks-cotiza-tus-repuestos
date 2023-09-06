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
  const [anchoPantalla, setAnchoPantalla] = useState();
  const [visibleCotizar, setVisibleCotizar] = useState(false)

  let ancho = anchoPantalla >1080 ? 30: 140
  let padding = cotizaciones.length * ancho
  useEffect(() => {
    // Función para actualizar el ancho de la pantalla cuando cambie el tamaño de la ventana
    function actualizarAnchoPantalla() {
      setAnchoPantalla(window.innerWidth);
    }

    // Agregar un event listener para escuchar cambios en el tamaño de la ventana
    window.addEventListener('resize', actualizarAnchoPantalla);

    // Eliminar el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('resize', actualizarAnchoPantalla);
    };
  }, [])
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
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', justifyContent: 'space-between', height: '100%', width: '100%', marginTop: '16px' }}>
          <p style={{ fontSize: '14px' }}>{data?.titulo}</p>
        </div>


        {cotizaciones &&
          <div className={styles.gridCardCotizaciones}>
            {cotizaciones.map(el => (
              <CardCotizacionVendedor cotizacion={el} pregunta={data?.titulo} />
            ))}

          </div>
        }
        {visibleCotizar &&
          <FormCotizar setVisibleCotizar={setVisibleCotizar} celular={data?.celular}/>
        }

      </div>

    </div>

  )
}

