
import styles from '@/styles/PastasFreno.module.css'
import Link from 'next/link'


export default function CardPrevPastaFreno({ data }) {
  return (
    <Link href={`/catalogo-pastas-freno/${data["referencia-incolbest"]}`} className={styles.containerCardPrevPastaFreno}>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '16px' }}>
          {data?.marcas.map(marca => (
            <img src={`/${marca}.png`} style={{ width: '32px', height: '32px', }} />
          ))}
        </div>
        <h2 style={{ fontSize: '48px', alignSelf: 'flex-end', color: '#F9880B' }}>{data["referencia-incolbest"]}</h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', }}>
        <div style={{ display: 'flex', width: '50%', flexDirection: 'column', gap: '8px', justifyContent: 'space-between', marginBottom: '16px' }}>
          <h3 style={{ fontSize: '16px', color: '#0E2358', fontWeight: '600' }}>Eje</h3>
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%', position: 'relative' }}>
            <ion-icon style={{ fontSize: '10px', color: '#F9880B', transform: 'rotate(180deg)', position: 'absolute', top: '-12px', left: data['posicion-eje'] === 'delantero' ? '5px' : '55px' }} name="triangle"></ion-icon>
            <img src="/car-icon-black.png" style={{ height: '16px', width: '48px' }} />
            <ion-icon style={{ fontSize: '10px', color: '#F9880B', position: 'absolute', top: '20px', left: data['posicion-eje'] === 'delantero' ? '5px' : '55px' }} name="triangle"></ion-icon>
          </div>

        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '50%', justifyContent: 'space-between' }}>
          <h3 style={{ fontSize: '16px', color: '#0E2358', fontWeight: '600' }}>Espesor</h3>
          <div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
              <div style={{ height: '20px', width: '10px', backgroundColor: '#373737', border: '1px solid white' }} />
              <div style={{ height: '32px', width: '6px', backgroundColor: '#373737', border: '1px solid white' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', position: 'relative' }}>
              <div style={{ height: '16px', width: '1px', backgroundColor: '#8A9ED6' }} />
              <div style={{ height: '1px', width: '14px', backgroundColor: '#8A9ED6' }} />
              <div style={{ height: '10px', width: '1px', backgroundColor: '#8A9ED6' }} />
              <div style={{ height: '1px', width: '40px', backgroundColor: '#8A9ED6' }} />
              <p style={{ color: '#394E8A', position: 'absolute', left: '26px', fontSize: '12px' }}>{data?.espesor} <span style={{ fontSize: '10px', }}>mm</span></p>

            </div>
          </div>

        </div>

      </div>
      <div style={{ height: '1px', width: '100%', backgroundColor: '#8A9ED6', margin: '16px 0' }} />

      <img src={data?.["img-posterior"]} style={{ alignSelf: 'center', backgroundColor: 'white', width: '90%', height: '100%', margin: '48px 0' }} />


    </Link>
  )
}