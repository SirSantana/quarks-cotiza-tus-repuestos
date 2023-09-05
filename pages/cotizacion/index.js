import { client } from "@/client";
import { GET_COTIZACIONES, GET_ONE_PREGUNTA, GET_PREV_PREGUNTAS } from "@/graphql/queries";
import Layout from "@/src/Layout";
import CardCotizacion from "@/src/Main/CardCotizacion";
import styles from '@/styles/Landing.module.css'


export default function OneCotizacion({data, data2, data3}){
    return(
      <Layout title={'Cotizacion'} >
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
