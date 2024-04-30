import Link from "next/link";


export default function ToolsQuarks() {
  return (
    <div style={{width:'90%', maxWidth:'1200px', display:'flex', flexDirection:'row', flexWrap:'wrap', margin:'0 auto', gap:'32px'}}>
      <div style={{ cursor: 'pointer', textDecoration: 'none', color: '#373737', width: '320px', borderRadius: '10px', padding: '8px', margin: '32px 0', backgroundColor: '#FFC003', height: '100px' }} >
        <Link  target="_blank" rel="noopener noreferrer" href={'https://www.quarks.com.co/pico-y-placa-hoy-bogota'} style={{ color: 'black', textDecoration: 'none', border: '4px solid black', borderRadius: '8px', height: '100%', width: '100%', alignItems: 'center', display: 'flex', justifyContent: 'space-evenly', flexDirection: 'column', padding: '8px' }}>
          <h4 style={{ fontSize: '32px', fontFamily: 'fantasy', letterSpacing: '6px', fontWeight: '100' }}>PICO Y PLACA</h4>
        </Link>
      </div>

      <Link  target="_blank" rel="noopener noreferrer" href={'https://www.quarks.com.co/calculadora-de-cilindraje-de-un-vehiculo'} style={{ textDecoration: 'none', color: 'white', width: '280px', borderRadius: '10px', padding: '16px', margin: '32px 0', backgroundColor: '#373737', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
        <h4 style={{ fontSize: '48px', }}>1600cc</h4>
        <p style={{ color: 'white', fontSize: '14px', textAlign: 'end', alignSelf: 'flex-end' }}>Calcula tu cilindrada aquí</p>
      </Link>
      <Link  target="_blank" rel="noopener noreferrer" href={'https://www.quarks.com.co/engine-displacement-calculator'} style={{ textDecoration: 'none', color: 'white', width: '280px', borderRadius: '10px', padding: '16px', margin: '32px 0', backgroundColor: '#373737', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
        <h4 style={{ fontSize: '48px', }}>1600cc</h4>
        <p style={{ color: 'white', fontSize: '14px', textAlign: 'end', alignSelf: 'flex-end' }}>Displacement Engine calculator</p>
      </Link>
      <Link  target="_blank" rel="noopener noreferrer" href={'https://www.quarks.com.co/calculadora-de-combustible'} style={{ textDecoration: 'none', color: 'white', width: '280px', borderRadius: '10px', padding: '16px', margin: '32px 0', backgroundColor: '#f50057', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
        <h4 style={{ fontSize: '48px', }}>6.82 <b style={{ fontSize: '18px', fontWeight: '400' }}>/ gl</b></h4>
        <p style={{ color: 'white', fontSize: '14px', textAlign: 'end', alignSelf: 'flex-end' }}>Calcula el consumo de combustible</p>
      </Link>
      <Link  target="_blank" rel="noopener noreferrer" href={'https://www.quarks.com.co/gasolineras'} style={{ textDecoration: 'none', color: 'white', width: '280px', borderRadius: '10px', padding: '16px', margin: '32px 0', backgroundColor: '#f50057', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
        <h4 style={{ fontSize: '48px', }}>Gasolineras en Bogota</h4>
      </Link>
    </div>
  )
}