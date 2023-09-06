import Head from 'next/head'
import Navbar2 from './Navbar/Navbar2'

export default function Layout({ children, title, description, type, price, keywords,image, tags, url, }) {
  return (
    <>
      <Head>
      <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Logo1.png" />
        <meta property="og:title" content={title} key="title" />
        <meta property='og:description' content={description} />
        <meta property='og:site_name' content='Cotiza tus repuestos' />
        <meta property='og:url' content='https://www.cotizatusrepuestos.com' />


        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
        <meta name="url" content={`https://www.cotizatusrepuestos.com${url}`} />
        <meta property="url" content={`https://www.cotizatusrepuestos.com${url}`} />

        <meta property="twitter:description" content={description} />
        <meta property="og:title" content={title} key="title" />
        <meta property="og:image" content={'https://azurequarks.blob.core.windows.net/negocios/cotizatusrepuestos.png'} />
        <meta property="og:image:url" content={'https://azurequarks.blob.core.windows.net/negocios/cotizatusrepuestos.png'} />
        <meta property='og:description' content={description} />
        <meta property='og:url' content={`https://www.cotizatusrepuestos.com${url}`} />

        <meta property='og:locale' content='es_CO' />
        <meta property='og:locale:alternate' content='es_CO' />
        <meta property='og:site_name' content='Cotiza tus repuestos' />
        <meta property="og:image:width" content='200' />
        <meta property="og:image:height" content='200' />
        <meta property="og:image:type" content='image/png' />

        <meta name="google-site-verification" content="F-SVvzOscK_a9cq8mam6fewNIYr3oIMzwT610ZQReu0" />
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
      </Head>

      <main ><Navbar2 />{children}</main>

    </>
  )
}