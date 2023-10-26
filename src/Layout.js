import Head from 'next/head'
import Navbar2 from './Navbar/Navbar2'
import Footer from './Main/Footer'

function generarMarcadoEstructurado(producto) {
  if (producto) {
    return {
      "@context": "http://schema.org",
      "@type": "Product",
      "url": producto.url,
      "name": producto.repuesto,
      "description": producto.descripcion,
      "image": producto.image,
      "offers": {
        "@type": "Offer",
        "price": producto.precio.replace(/\./g, ''),
        "priceCurrency": "COP", // Cambia esto según tu moneda
        "availability": producto.stock > 0 ? "http://schema.org/InStock" : "http://schema.org/OutOfStock"
      },
      "brand": {
        "@type": "Brand",
        "name": producto?.marca // Reemplaza con el nombre real de la marca del producto
      },
      // "shippingDetails": {
      //   "@type": "OfferShippingDetails",
      //   "shippingRate": "COSTO_DE_ENVIO_AQUI", // Agrega el costo de envío si es aplicable
      //   "shippingDestination": {
      //     "@type": "DefinedRegion",
      //     "postalCode": "CODIGO_POSTAL_AQUI" // Agrega el código postal si es relevante
      //   }
      // },
      // "review": {
      //   "@type": "Review",
      //   "reviewRating": {
      //     "@type": "Rating",
      //     "ratingValue": "VALORACION_DEL_PRODUCTO_AQUI" // Agrega la valoración del producto si está disponible
      //   },
      //   "author": {
      //     "@type": "Person",
      //     "name": "NOMBRE_DEL_AUTOR_DE_LA_RESEÑA" // Reemplaza con el nombre del autor de la reseña si está disponible
      //   }
      // },
      // "priceValidUntil": "FECHA_DE_VALIDEZ_DEL_PRECIO_AQUI", // Agrega la fecha de validez del precio si es aplicable
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": 5, // Agrega la valoración promedio del producto si está disponible
        "reviewCount": 3 // Agrega el número de reseñas del producto si está disponible
      }
    }
  }
}
export default function Layout({ children, title, description, type, icon,price, keywords, image, tags, url, marca, fecha, productoMarcado }) {
  const marcadoEstructurado = generarMarcadoEstructurado(productoMarcado);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
       


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
        <meta name="twitter:image" content={image ? image : 'https://azurequarks.blob.core.windows.net/negocios/cotizatusrepuestos.png'} />
        <meta name="url" content={`https://www.cotizatusrepuestos.com${url}`} />
        <meta property="url" content={`https://www.cotizatusrepuestos.com${url}`} />
        <meta property="product:brand" content={marca} />
        <meta property="product:availability" content="Disponible" />
        <meta property="product:condition" content="Nuevo" />
        <meta property="product:price:amount" content={price} />
        <meta property="product:price:currency" content="COP"></meta>

        <meta property="twitter:description" content={description} />
        <meta property="og:title" content={title} key="title" />
        <meta property="og:image" content={image ? image : 'https://azurequarks.blob.core.windows.net/negocios/cotizatusrepuestos.png'} />
        <meta property="og:image:url" content={image ? image : 'https://azurequarks.blob.core.windows.net/negocios/cotizatusrepuestos.png'} />
        <meta property='og:description' content={description} />
        <meta property='og:url' content={`https://www.cotizatusrepuestos.com${url}`} />

        <meta property='og:locale' content='es_CO' />
        <meta property='og:locale:alternate' content='es_CO' />
        <meta property='og:site_name' content='Cotiza tus repuestos' />
        <meta property="og:image:width" content='200' />
        <meta property="og:image:height" content='200' />
        <meta property="og:image:type" content='image/png' />
        {fecha && <meta property='date' content={fecha} />}
        <link rel="icon" href={icon ? icon : "/Logo1.png"} />

        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1233996863721897"
          crossorigin="anonymous"></script>
        <meta name="google-site-verification" content="F-SVvzOscK_a9cq8mam6fewNIYr3oIMzwT610ZQReu0" />
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>

        {productoMarcado &&
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(marcadoEstructurado) }}
          />}
      </Head>


      <main ><Navbar2 />{children}<Footer /></main>

    </>
  )
}