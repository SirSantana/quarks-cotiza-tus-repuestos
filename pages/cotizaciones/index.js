import { client } from "@/client";
import { GET_ONE_PREGUNTA, GET_PREV_PREGUNTAS } from "@/graphql/queries";
import Layout from "@/src/Layout";
import CardCotizacion from "@/src/Main/CardCotizacion";
import styles from '@/styles/Landing.module.css'


export default function Cotizaciones({ data, }) {

  return (
    <Layout title={'Cotizacion'} >
      <section  className={styles.containerGridTalleres}>
        <h2 className={styles.title2} style={{ textAlign: 'center', margin: '124px 0 64px 0' }}>
          Otras personas han cotizado recientemente
        </h2>
        <div className={styles.gridCardTalleres}>
          {data?.getPreguntas?.map(el => (
            <CardCotizacion cotizacion={el} />

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
      variables: { limit: 32, marca: 'Chevrolet' }
    }
  )

  return {
    props: {
      data: data,
    },
  };

}