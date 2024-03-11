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
import CallToActionFooter from '@/src/Main/CallToActionFooter'
import RepuestosHome from '@/src/Main/RepuestosHome'
import ProductosHome from '@/src/Main/ProductosHome'


export default function Home() {
  let description = '¡Encuentra los repuestos Chevrolet que necesitas en Colombia! Cotiza tus piezas y accesorios para vehículos Chevrolet de manera rápida, segura y sencilla Obtén las mejores ofertas en repuestos originales y homologaso con envios gratis y pago contraentrega para tu Chevrolet. Simplifica tu búsqueda y ahorra tiempo y dinero. ¡Cotiza hoy mismo en línea!'
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
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1233996863721897"
          crossorigin="anonymous"></script>
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "kjzmdhh19i");
            `,
          }}
        />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <FormCotizar />
        <ProductosHome/>
        <ListMarcasComercializadas />
        {/* <RepuestosHome/> */}

        {/* <PrevCotizaciones /> */}
        <PasosCotizacion />
        <SectionPasos />
        <CallToActionFooter />
        {/* <PasosCotizacion />
        <Beneficios />
        <Footer /> */}
        <Footer />
      </main>
    </>
  )
}
