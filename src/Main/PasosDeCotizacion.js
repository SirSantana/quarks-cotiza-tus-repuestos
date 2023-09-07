import styles from '@/styles/PasosCotizacion.module.css'



export default function PasosCotizacion() {
  return (
    <div className={styles.container}>
      <div className={styles.divTitle}>
        <h2 className={styles.title1}>¿Cómo cotizo mis autopartes chevrolet?  </h2>
      </div>
      <div className={styles.containerPasos1}>
        <div className={styles.containerPasos2}>
          <div className={styles.circle}>
            <h3>1</h3>
          </div>
          <div className={styles.divTitle}>
            <h2 className={styles.title}>Cotiza tu repuesto </h2>
          </div>
          <h4 className={styles.subtitle}>Completa el formulario con tu marca, tu referencia / cilindraje, repuestos que estas buscando, tú número de celular y cotiza!.
          </h4>
        </div>
        <div className={styles.containerPasos2}>
          <div className={styles.circle}>
            <h3>2</h3>
          </div>
          <div className={styles.divTitle}>
            <h2 className={styles.title}>Revisa tu cotización</h2>
          </div>
          <h4 className={styles.subtitle}>Te enviaremos un mensaje por Whatsapp con los detalles de la cotizacion (precio, marca, garantia) junto con el link de la cotizacion.
          </h4>
        </div>
        <div className={styles.containerPasos2}>
          <div className={styles.circle}>
            <h3>3</h3>
          </div>
          <div className={styles.divTitle}>
            <h2 className={styles.title}>Confirma disponibilidad</h2>
          </div>
          <h4 className={styles.subtitle}>En la cotización encontrarás el precio, marca u origen, garantía y la fecha. Y listo!
          </h4>
        </div>
      </div>
    </div>
  )
}