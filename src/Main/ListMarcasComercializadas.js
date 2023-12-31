
import styles from '@/styles/Main.module.css'
import Link from 'next/link';
import { useEffect, useState } from 'react';

let imagesMarcas = [
  { src: 'Brosol.png', nombre: 'Brosol' },
  { src: 'Continental.jpg', nombre: 'Continental' },
  { src: 'Gabriel.png', nombre: 'Gabriel' },
  { src: 'GeneralMotors.png', nombre: 'General Motors' },
  { src: 'Koyo.png', nombre: 'Koyo' },
  { src: 'Tnk.svg', nombre: 'Tnk' },
  { src: 'ACDelco.png', nombre: 'Ac Delco' },
  { src: 'BorgWarner.png', nombre: 'Borg Warner' },
  { src: 'Bosch.jpg', nombre: 'Bosch' },
  { src: 'Gates.png', nombre: 'Gates' },
  { src: 'Mahle.png', nombre: 'Mahle' },
  { src: 'Valeo.png', nombre: 'Valeo' },
];
export default function ListMarcasComercializadas() {
  const [isLoading, setIsLoading] = useState(true);
  const scrollToTop = () => {
    // Hacer que la página se desplace al principio suavemente
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <section className={styles.containerListTalleres}>
      <h2 className={styles.title2} style={{ textAlign: 'center', color: '#373737' }}>
        Las mejores marcas del sector automotriz
      </h2>
      <div className={styles.containerImgTalleres}>
        {imagesMarcas.map((el, index) => (
           <div key={index} className={styles.imageWrapper}>
           {isLoading ? (
              <div className={styles.skeletonLoader} />
            ) : (
              <img
                className={styles.imgFotoTaller}
                src={el.src}
                alt={`Repuestos de carro en Bogota marca ${el.nombre}`}
              />
            )}
            <div className={styles.tooltip}>{el.nombre}</div>
           </div> 
        ))}
      </div>
      <button
      onClick={scrollToTop}
        className={styles.button2}
        style={{ textDecoration: 'none', fontSize: '14px', cursor:'pointer', color: 'white', alignSelf:'center'}}
      >
        Cotizar
        <ion-icon name="arrow-forward-outline"></ion-icon>

      </button>
    </section>

  )
}