import Head from 'next/head'
import Navbar2 from './Navbar/Navbar2'

export default function Layout({ children, title, description, type, price, keywords }) {
  return (
    <>
      <Head>
      <title>Cotiza tus repuestos para tu carro</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Logo1.png" />
        <meta property="og:title" content={'Repuestos de carro'} key="title" />
        <meta property='og:description' content={'Cotiza tus autopartes para tu vehiculo'} />
        <meta property='og:site_name' content='Quarks' />
        <meta property='og:url' content='https://quarks.com.co' />


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
        <meta name="twitter:image" content={"https://azurequarks.blob.core.windows.net/negocios/bannertalleresquarks.png"} />
        <meta name="url" content={`https://quarks.com.co`} />
        <meta property="url" content={`https://quarks.com.co`} />
      </Head>

      <main ><Navbar2 />{children}</main>

    </>
  )
}