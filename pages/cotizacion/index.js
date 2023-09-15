import { client } from "@/client";
import { GET_COTIZACIONES, GET_ONE_PREGUNTA, GET_PREV_PREGUNTAS } from "@/graphql/queries";
import Layout from "@/src/Layout";
import CardCotizacion from "@/src/Main/CardCotizacion";
import styles from '@/styles/Landing.module.css'
import { useRouter } from "next/router";


export default function OneCotizacion({data, data2, data3}){
  const router = useRouter()  
  let titlePrecio = `- $${data3?.getCotizaciones?.[0]?.precio}`
  let titleWithoutPrecio = data2?.getOnePregunta?.titulo +" "+ data2?.getOnePregunta?.marca + " | " + "Cotiza tus repuestos Chevrolet"

  let descriptionWith= `${data2?.getOnePregunta?.titulo} ${titlePrecio}, Marca: ${data3?.getCotizaciones?.[0]?.marca}, PAGO CONTRAENTREGA y ENVIO GRATIS en Bogotá. ${data3?.getCotizaciones?.[0]?.garantia} mes(es) de garantia. Cotiza tus repuestos chevrolet aqui!`
  let descriptionWithout = `${data2?.getOnePregunta?.titulo}  Cotiza tus repuestos chevrolet aqui!`
  console.log(data3?.getCotizaciones[0]?.imagen);
    return(
      <Layout title={titleWithoutPrecio}url={router?.asPath} description={data3?.getCotizaciones?.[0]?.marca?descriptionWith:descriptionWithout} price={data3?.getCotizaciones?.[0]?.precio} marca={data3?.getCotizaciones?.[0]?.marca} fecha={data2?.getOnePregunta?.fecha} image={data2?.getOnePregunta?.imagen|| data3?.getCotizaciones[0]?.imagen}>
      <section  className={styles.containerGridTalleres}>
        <h2 className={styles.title2} style={{ textAlign: 'center', margin: '124px 0 64px 0' }}>
          Otras personas han cotizado recientemente
        </h2>
        <div className={styles.gridCardTalleres}>
          {data?.getPreguntas?.map(el => (
            <CardCotizacion cotizacion={el} data2={data2} data3={data3}/>

          ))}
        </div>
      </section>
    </Layout>
    )
}
export async function getServerSideProps({ query }) {
  const { data } = await client.query(
    {
      query: GET_PREV_PREGUNTAS,
      variables: { limit: 16, marca: 'Chevrolet' }
    }
  )
  const queryy = query?.cotizacion
  const partes = queryy?.split("-")
  const id = partes?.[partes?.length - 1]
  const { data:data2 } = await client.query(
    {
      query: GET_ONE_PREGUNTA,
      variables: { id: id}
    }
  )
  const { data:data3 } = await client.query(
    {
      query: GET_COTIZACIONES,
      variables: { id: id}
    }
  )
  
  return {
    props: {
      data: data,
      data2:data2,
      data3:data3
    },
  };
}
