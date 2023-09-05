import styles from '@/styles/Landing.module.css'
import CardCotizacion from '../Main/CardCotizacion'



export default function Cotizaciones({data}) {
  return (
    <section className={styles.containerGridTalleres}>
      <h2 className={styles.title2} style={{ textAlign: 'center', margin: '124px 0 64px 0' }}>
        Otras personas han cotizado recientemente
      </h2>
      <div className={styles.gridCardTalleres}>
        {data?.getPreguntas?.map(el => (
          <CardCotizacion cotizacion={el} />
        ))}
      </div>
    </section>
  )
}