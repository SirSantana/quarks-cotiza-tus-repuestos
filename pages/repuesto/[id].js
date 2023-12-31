import Layout from "@/src/Layout";
import styles from '@/styles/Repuestos.module.css'
import repuestos from '@/src/repuestos.json'
import CardRepuesto from "@/src/Repuestos/CardRepuesto";
import { useRouter } from "next/router";

const options = {
  style: 'decimal',
  useGrouping: true,
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
};
export default function Repuesto({ data }) {
  const router = useRouter()

  let price = parseFloat(data?.precio.replace(/\./g, ''))

  let descuento = Number(data.descuento);
  const descuentoFraccion = descuento / 100;

  let precioConDescuento = price - (price * descuentoFraccion);
  let description = `${data?.repuesto}, Precio: $${precioConDescuento.toFixed(3)}, Marca: ${data?.fabricante}, PAGO CONTRAENTREGA y ENVIO GRATIS en Bogotá. ${data?.garantiaMeses} mes(es) de garantia. Cotiza tus repuestos chevrolet aqui!`

  const urlPregunta = `https://www.cotizatusrepuestos.com${router.asPath}`
  const sendMessage = () => {
    let url = `https://api.whatsapp.com/send?phone=573143551942`;
    url += `&text=${encodeURI(`👋 Hola, estoy interesado en el repuesto: ${data?.repuesto} \n 📌 Link del repuesto: ${urlPregunta}`)}&app_absent=0`
    window.open(url);
  }

  const sendMessage2 = () => {
    let url = `https://api.whatsapp.com/send?phone=573143551942`;
    url += `&text=${encodeURI(`👋 Buen dia, estoy buscando el siguiente repuesto: ${urlPregunta}`)}&app_absent=0`
    window.open(url);
  }
  let productoMarcado = {
    repuesto: data?.repuesto,
    descripcion: description,
    precio: data?.precio,
    stock: data?.stock,
    image: data?.imagen,
    url: "https://cotizatusrepuestos.com" + router.asPath,
    marca:data?.fabricante
  }
  return (
    <Layout title={data?.repuesto + " " + data?.fabricante} marca={data?.fabricante} description={description} price={precioConDescuento?.toLocaleString()} image={data?.imagen} icon={data?.imagen} url={router?.asPath} productoMarcado={productoMarcado} >

      <div className={styles.container2}>
        <p onClick={() => router?.back()} className={styles.textReturn} > Regresar | Repuestos &gt; {data?.marcaAuto} &gt; {data?.tipo} &gt; {data?.repuestoTipo} </p>

        <div className={styles.containerCardRepuesto}>
          <div className={styles.containerImgRepuestos}>
            <img src={data?.imagen} className={styles.imgPrincipalRepuesto} alt={data?.repuesto} />
            <div style={{ width: '100%', margin: '16px 0', backgroundColor: '#d9d9d9', height: '1px' }} />

            <div className={styles.repSugeridos}  >
              <h2 className={styles.titleNombre}>Otros repuestos</h2>
              <div style={{ display: 'flex', flexDirection: 'row', gap: '16px', justifyContent: 'space-between', width: '100%', }}>
                {repuestos?.slice(0, 2).map(repuesto => (
                  <CardRepuesto key={repuesto.repuesto} repuesto={repuesto} />
                ))}
              </div>

            </div>
          </div>
          <div className={styles.cardDetalleRepuesto}>
            <p style={{ fontSize: '12px', color: '#5C5C5C', margin: 0 }}>Nuevo | {data?.ventas>0 && "+" + data?.ventas + " vendidos"}</p>
            <h1 className={styles.titleNombre}>{data?.repuesto}</h1>
            <div>
              {data?.descuento > 0 && <p style={{ fontSize: '16px',color:'#f50057',lineHeight:'10px', textDecoration: 'line-through' }}>Antes ${data?.precio}</p>}
              <h2 style={{ alignItems: 'center', display: 'flex' }} className={styles.textPricePrincipal}>${precioConDescuento?.toLocaleString()}{data?.descuento > 0 && <b style={{ fontSize: '14px', color: 'green', fontWeight: '500', marginLeft: '8px' }}>{data?.descuento}% OFF</b>}</h2>
            </div>
            <img src={data?.imagen} className={styles.imgPrincipalRepuestoMobile} alt={data?.repuesto} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '24px' }}>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px' }}>
                <h3 style={{ fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '600' }}><ion-icon style={{ fontSize: '20px',}} name="car-sport-outline"></ion-icon>Vehiculo:</h3>
                <p style={{ fontSize: '14px', }}>{data?.marcaAuto}</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px' }}>
                <h3 style={{ fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '600' }}><ion-icon style={{ fontSize: '20px' }} name="shield-checkmark-outline"></ion-icon>Marca / Origen:</h3>
                <p style={{ fontSize: '14px', }}>{data?.fabricante}</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px' }}>
                <h3 style={{ fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '600' }}><ion-icon style={{ fontSize: '20px' }} name="ribbon-outline"></ion-icon>Garantìa:</h3>
                <p style={{ fontSize: '14px', }}>{data?.garantiaMeses} meses</p>
              </div>

            </div>

            <div style={{ width: '98%', marginTop: '24px', height: '30px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'left', gap: '8px' }}>
              <ion-icon style={{ color: 'green', fontSize: '20px' }} name="checkmark-circle"></ion-icon>
              <p style={{ color: '#373737', fontSize: '12px', fontWeight: '600' }}>Envios Gratis y Pagos contraentrega en Bogotá</p>
            </div>
            <button onClick={sendMessage} style={{ height: '40px', width: '100%', }} className={styles.button}>
              Estoy interesado
            </button>
            <div style={{ width: '100%', margin: '16px 0', backgroundColor: '#d9d9d9', height: '1px' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '8px' }}>
              <h3 style={{ fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '600' }}><ion-icon style={{ fontSize: '20px' }} name="reader-outline"></ion-icon>Descripcion:</h3>
              <p style={{ fontSize: '14px',color:'#5c5c5c', lineHeight:'22px'}}>{data?.descripcion}</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px' }}>
              <h3 style={{ fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '600' }}>Aplicaciones:</h3>
              <p style={{ fontSize: '14px', color:'#5c5c5c'}}>{data?.modelosAutos?.map(el => el + " • ")}</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px' }}>
              <h3 style={{ fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '600' }}>Cilindrajes:</h3>
              <p style={{ fontSize: '14px',color:'#5c5c5c' }}>{data?.cilindraje?.map(el => el + " - ")}</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px' }}>
              <h3 style={{ fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '600' }}>Categoria repuesto:</h3>
              <p style={{ fontSize: '14px',color:'#5c5c5c' }}>{data?.tipo}</p>
            </div>
            <div style={{ width: '100%', margin: '16px 0', backgroundColor: '#d9d9d9', height: '1px' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <h3 style={{ fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '600' }}><ion-icon style={{ fontSize: '20px' }} name="cube-outline"></ion-icon>Envios:</h3>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px' }}>
                <h4 style={{ fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '600' }}>Principales Ciudades:</h4>
                <p style={{ fontSize: '14px', }}>24hrs - 48hrs</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px' }}>
                <h4 style={{ fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '600' }}>Municipios:</h4>
                <p style={{ fontSize: '14px', }}>24hrs - 72hrs</p>
              </div>
            </div>

            <div style={{ width: '98%', marginTop: '16px', display: 'flex', alignItems: 'center', justifyContent: 'left', gap: '8px' }}>
              <ion-icon style={{ color: '#f50057', fontSize: '20px' }} name="alert-circle"></ion-icon>
              <p style={{ color: '#373737', fontSize: '12px', fontWeight: '600' }}>No encuentras tu repuesto?</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: '4%' }}>
              <button onClick={() => router.push('/')} style={{ height: '40px', width: '48%', marginBottom: '16px', }} className={styles.button}>
                Cotizar en linea
              </button>
              <button onClick={sendMessage2} className={styles.buttonSecondary} style={{ height: '40px', width: '48%', marginBottom: '16px', }} >
                <ion-icon style={{ fontSize: '20px' }} name="logo-whatsapp"></ion-icon>
                Contactar
              </button>
            </div>
            <div className={styles.repSugeridosMobile} >
              <div style={{ width: '100%', margin: '16px 0', backgroundColor: '#d9d9d9', height: '1px' }} />

              <h2 className={styles.titleNombre}>Otros repuestos</h2>
              <div style={{ display: 'flex', flexDirection: 'row', gap: '16px', justifyContent: 'space-between', width: '100%', }}>
                {repuestos?.slice(0, 2).map(repuesto => (
                  <CardRepuesto key={repuesto?.repuesto} repuesto={repuesto} />
                ))}
              </div>

            </div>
          </div>


        </div>

      </div>
    </Layout>
  )
}

export async function getServerSideProps({ query }) {
  const repuesto = query?.id
  let repuestoParse = repuesto.split('-')
  const repuestoOne = repuestos.find(rep => rep.idUrl == repuestoParse[repuestoParse.length - 1])

  return {
    props: {
      data: repuestoOne
    }
  }
}