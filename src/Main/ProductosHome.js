

import styles from '@/styles/Landing.module.css'
import repuestos from '@/src/repuestos.json'
import CardRepuesto from '../Repuestos/CardRepuesto';
import { useRouter } from 'next/router';
import Link from 'next/link';


export default function ProductosHome() {
  const router = useRouter()
  const repuestosFiltrados = repuestos.reduce((acc, repuesto) => {
    if (repuesto.marcaAuto === 'Chevrolet' && acc.length < 10) {
      acc.push(repuesto);
    }
    return acc;
  }, []);
  console.log(repuestosFiltrados);
  return (
    <section className={styles.containerGridTalleres} style={{ marginTop: '96px' }}>
      <h2 className={styles.title2} style={{ textAlign: 'center', marginBottom: '64px' }}>
        Chevrolet Repuestos
      </h2>
      <div className={styles.gridCardTalleres}>
        {repuestosFiltrados?.map(repuesto => (
          <CardRepuesto repuesto={repuesto} />
        ))}
        <Link href={'/repuestos/chevrolet'}  style={{ cursor: 'pointer', backgroundColor:'#373737', alignItems:'flex-end', justifyContent:'end', display:'flex' }} className={styles.cardNewTaller}>
        <div style={{alignItems:'center', justifyContent:'center',}} className={styles.containerDataNewTaller}>
          <p style={{color:'white', display:'flex', alignItems:'center', gap:'8px', fontSize:'24px', fontWeight:'600'}}>Mas productos <ion-icon name="arrow-forward-outline"></ion-icon></p>
        </div>
      </Link>
      </div>
      
    </section>
  )
}

