



import styles from '@/styles/Landing.module.css'
import { useEffect, useState } from 'react';
import CardCotizacion from './CardCotizacion';
import { GET_LAST_PREGUNTAS, GET_PREV_PREGUNTAS } from '@/graphql/queries';
import { client } from '@/client';
import { useQuery } from '@apollo/client';


export default function PrevCotizaciones() {
  const { data, loading, error } = useQuery(GET_LAST_PREGUNTAS)
  return (
    <section className={styles.containerGridTalleres}>
      <h2 className={styles.title2} style={{ textAlign: 'center', marginBottom: '64px' }}>
        Otras personas han cotizado recientemente
      </h2>
      <div className={styles.gridCardTalleres}>
        {data?.getLastPreguntas?.map(el => (
          <CardCotizacion cotizacion={el} />
        ))}
       
      </div>
    </section>

  )
}

export async function getServerSideProps({ query }) {
  const { data } = await client.query(
    {
      query: GET_PREV_PREGUNTAS,
      variables: { limit: 16, marca: 'Chevrolet' }
    }
  )

  return {
    props: {
      data: data
    },
  };

}