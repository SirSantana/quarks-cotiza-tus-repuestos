import Layout from "@/src/Layout";
import styles from '@/styles/Repuestos.module.css'
import { useRouter } from "next/router";
import repuestos from '@/src/repuestos.json'
import CardRepuesto from "@/src/Repuestos/CardRepuesto";

export default function Repuestos({ data }) {
  const router = useRouter()
  const parts = router?.query?.id

  return (
    <Layout title={`Repuestos ${parts.replace(/-/g, ' ')}`}>
      <div className={styles.container}>
       

        <h1 className={styles.title}>Repuestos {parts.replace(/-/g, ' ')}</h1>
        <h4 style={{ textAlign: 'left' }} className={styles.subtitle2}>Se encontraron {data?.length} repuestos de Chevrolet Corsa</h4>
        <div className={styles.gridCardRepuestos}>
          {data?.map(repuesto => (
            <CardRepuesto repuesto={repuesto} />
          ))}

        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps({ query }) {
  const vehiculo = query?.id
  const parts = vehiculo.split('-')

  const repuestosFiltrados = repuestos.filter((repuesto) => {
    const marcaAuto = repuesto.marcaAuto.toLowerCase();
    const modelosAutos = repuesto.modelosAutos.map((modelo) => modelo.toLowerCase());
    return (
      marcaAuto === parts[0].toLowerCase() &&
      modelosAutos.includes(parts[1].toLowerCase())
    );
  });

  return {
    props: {
      data: repuestosFiltrados
    }
  }


}