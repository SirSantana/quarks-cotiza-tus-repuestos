import { client } from "@/client";
import { GET_PREV_PREGUNTAS } from "@/graphql/queries";
import Layout from "@/src/Layout";
import CardCotizacion from "@/src/Main/CardCotizacion";
import styles from '@/styles/Landing.module.css'
import { useRouter } from "next/router";


export default function Cotizaciones({ data, }) {
  const router = useRouter()

  return (
    <Layout title={'Cotizaciones recientes de repuestos de carros Colombia'} url={router?.asPath} description={'Cotizaciones de repuestos de carros en Colombia'} >
      <section  className={styles.containerGridTalleres}>
        <h1 className={styles.title2} style={{ textAlign: 'center', margin: '124px 0 64px 0' }}>
          Cotizaciones recientes de autopartes chevrolet
        </h1>
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