import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Navbar from '@/src/Navbar/Navbar'
import FormCotizar from '@/src/Main/FormCotizar'
import ListMarcasComercializadas from '@/src/Main/ListMarcasComercializadas'
import PasosCotizacion from '@/src/Main/PasosDeCotizacion'
import Footer from '@/src/Main/Footer'
import SectionPasos from '@/src/Main/Section4'
import PrevCotizaciones from '@/src/Main/PrevCotizaciones'


export default function Home() {
  let description = 'Repuestos automotores para tu carro en colombia, encuentra los repuestos para tu vehiculo, cotiza con decenas de vendedores tus partes.Repuestos de carros en bogota.Repuestos para chevrolet en bogota. Repuestos para carros en colombia Cotiza ya!'
  return (
    <>
      <Head>
        <title>Cotiza los repuestos Chevrolet para tu carro</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Logo1.png" />
        <meta property="og:title" content={'Cotiza los repuestos Chevrolet para tu carro'} key="title" />
        <meta property='og:description' content={description} />
        <meta property='og:site_name' content='Cotiza tus repuestos' />
        <meta property='og:url' content='https://www.cotizatusrepuestos.com' />


        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={description} />
        <meta name="keywords" content={'Repuestos para vehiculos, Almacenes de repuestos en bogota, Repuestos bogota, Repuestos para chevrolet, Repuestos de Renault, Autopartes para carros, Cientos de cotizaciones de autopartes para carros, Cotizar repuestos Colombia, Repuestos chevrolet colombia, Repuestos chevrolet, Repuestos mazda, Repuestos ford'} />
        <meta name='robots' content='follow, index, max-image-preview:large' />
        <meta name='bingbot' content='follow, index' />
        <meta name='GOOGLEBOT' content='follow, index' />
        <meta name='language' content='spanish' />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@quarks-automotriz" />
        <meta name="twitter:creator" content="@quarks-automotriz" />
        <meta name="twitter:title" content={"Cotiza los repuestos de tu carro "} />
        <meta name="twitter:image" content={"https://azurequarks.blob.core.windows.net/negocios/cotizatusrepuestos.png"} />
        <meta name="url" content={`https://www.cotizatusrepuestos.com`} />
        <meta property="url" content={`https://www.cotizatusrepuestos.com`} />
        <meta name="google-site-verification" content="F-SVvzOscK_a9cq8mam6fewNIYr3oIMzwT610ZQReu0" />

        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
        {/* <meta property="twitter:description" content={'Cotiza los repuestos de tu carro facil y rapido'} />
        <meta property="og:title" content={"Los mejores Talleres mecanicos de carros en Bogotá "} key="title" />
        <meta property="og:image" content={"https://azurequarks.blob.core.windows.net/negocios/bannertalleresquarks.png"} />
        <meta property="og:image:url" content={"https://azurequarks.blob.core.windows.net/negocios/bannertalleresquarks.png"} />
        <meta property='og:description' content={`Encuentra los mejores talleres con reseñas de usuarios y recomendaciones en Bogota. Servicios de ${options?.map(el => " " + el.value)}`} />
        <meta property='og:url' content={`https://quarks.com.co/`} />

        <meta property='og:locale' content='es_CO' />
        <meta property='og:locale:alternate' content='es_CO' />
        <meta property='og:site_name' content='Quarks' />
        <meta property="og:image:width" content='1080' />
        <meta property="og:image:height" content='1080' />
        <meta property="og:image:type" content='image/png' /> */}

      </Head>
      <main className={styles.main}>
        <Navbar />
        <FormCotizar/>
        <ListMarcasComercializadas />
        <PrevCotizaciones/>

        <PasosCotizacion/>
        <SectionPasos/>
        {/* <PasosCotizacion />
        <Beneficios />
        <Footer /> */}
        <Footer/>
      </main>
    </>
  )
}
