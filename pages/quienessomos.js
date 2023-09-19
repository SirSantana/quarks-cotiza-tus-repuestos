import Layout from "@/src/Layout";
import styles from '@/styles/Faq.module.css'


export default function QuienesSomos() {
  return (
    <Layout title={'Quienes somos | Quarks'}>
      <div style={{ marginTop: '32px' }} className={styles.container}>
      <h1 className={styles.title}>Quiénes Somos</h1>
        <p style={{marginBottom:'48px'}} className={styles.response}>En Quarks, nuestra pasión por los automóviles y el compromiso con la calidad del servicio nos llevaron a crear esta plataforma única en Bogotá. <br/><br/>Una plataforma donde puedas cotizar tus repuestos chevrolet de forma facil, rapida y segura.</p>

        <h2>Nuestro Propósito</h2>
        <p style={{marginBottom:'48px'}}className={styles.response}>Nuestro propósito es simple pero poderoso: Ayudar a nuestros usuarios a encontrar sus repuestos chevrolet de las mejores marcas</p>

        <h2>Nuestro Equipo</h2>
        <p style={{marginBottom:'48px'}}className={styles.response}>Detrás de Quarks, hay un equipo apasionado y comprometido que trabaja arduamente para asegurarse de que cada detalle esté cuidadosamente gestionado.
        <br/><br/> Desde expertos en la industria automotriz hasta profesionales creativos, todos compartimos una visión común: ayudarte a encontrar el repuesto para tu auto.</p>

        <p className={styles.response}>¡Gracias por confiar en nosotros para el cuidado de tu automóvil!</p>

        <p className={styles.response}>Atentamente. Miguel de Quarks</p>
      </div>
    </Layout>
  )
}