
import styles from '@/styles/PastasFreno.module.css'
const contenedorEstilos = {
  position: 'relative',
  width: `80%`,
  height: `80%`,
  marginTop: '64px',
};
function ImagenConMedidas({ alto, ancho, img, alt }) {


  const lineaHorizontalEstilos = {
    position: 'absolute',
    top: '-40px',
    left: 0,
    width: '100%',
    height: '1.5px',
    background: '#8A9ED6', // color de la línea horizontal
  };
  const lineaHor2 = {
    position: 'absolute',
    top: '-40px',
    left: 0,
    width: '1px',
    height: '60%',
    background: '#8A9ED6',
  }
  const lineaHor3 = {
    position: 'absolute',
    top: '-40px',
    left: '100%',
    width: '1px',
    height: '60%',
    background: '#8A9ED6',
  }
  const lineaVerticalEstilos = {
    position: 'absolute',
    top: 0,
    left: '-40px',
    width: '1px',
    height: '100%',
    background: '#8A9ED6', // color de la línea vertical
  };
  const anchoText = {
    position: 'absolute',
    top: '40%',
    color: '#0E2358',
    left: '-16%',
    alignItems: 'center',
    alignSelf: 'center',
    fontWeight: '600',

    writingMode: 'vertical-lr', // Esta propiedad pone el texto en modo vertical de derecha a izquierda
  }
  const largoText = {
    position: 'absolute',
    top: '-70px',
    left: '45%',
    color: '#0E2358',
    fontWeight: '600',
    alignItems: 'center',
    alignSelf: 'center',
  }
  const lineaVerticalEstilos2 = {
    position: 'absolute',
    top: '0',
    left: '-40px',
    width: '55%',
    height: '1.5px',
    background: '#8A9ED6', // color de la línea vertical
  };
  const lineaVerticalEstilos3 = {
    position: 'absolute',
    top: '100%',
    left: '-40px',
    width: '55%',
    height: '1.5px',
    background: '#8A9ED6', // color de la línea vertical
  };
  return (
    <div style={contenedorEstilos}>
      <img src={img} style={{ width: '100%', height: '100%' }} alt={`Pastilla de freno ${alt}`} />
      <div style={lineaHorizontalEstilos}></div>
      <div style={lineaHor2}></div>
      <div style={lineaHor3}></div>
      <p style={anchoText}>{alto}mm</p>
      <p style={largoText}>{ancho}mm</p>

      <div style={lineaVerticalEstilos}></div>
      <div style={lineaVerticalEstilos2}></div>
      <div style={lineaVerticalEstilos3}></div>

    </div>
  );
}
export default function Content({ data }) {

  return (
    <div style={{ width: '65%', display: 'flex', flexDirection: 'column', margin: '0 auto', marginTop: '64px', marginBottom: '64px' }}>
      <p style={{ fontSize: '14px', color: '#8A9ED6', marginBottom: '24px' }}>Pastas de Freno | {data?.titulo}</p>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>

        <div style={{ width: '80%', display: 'flex', flexDirection: 'column' }}>
          <h1 style={{ color: '#001547', fontSize: '48px', lineHeight: '48px' }}>{data?.titulo}</h1>
          <p style={{ fontSize: '20px', color: '#0E2358', }}>{data?.['referencia-incolbest']}</p>

          <div className={styles.contenedorConMalla}>
            <ImagenConMedidas alt={data?.titulo} img={data?.["img-anterior"]} alto={data?.["medida-alto"]} ancho={data?.["medida-ancho"]} />
            <div style={{ width: '80%', height: '50%', marginTop: '48px' }}>

              <img src={data?.["img-posterior"]} style={{ width: '100%', height: '100%', }} />
            </div>

          </div>
        </div>
        <div className={styles.containerAplicaciones}>
          <div style={{ width: '100%', backgroundColor: '#001547', padding: '8px 16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <p style={{ color: 'white', fontSize: '14px', fontWeight: '600' }}>Aplicaciones</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', padding: '16px', gap: '16px' }}>
            <div style={{display:'flex', flexDirection:'row', gap:'16px'}}>
              {data?.marcas.map(marca => (
                <img src={`/${marca}.png`} style={{ width: '32px', height: '32px', }} />
              ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {
                data?.aplicaciones.map(aplicacion => (
                  <p id={aplicacion} style={{ color: '#001547', fontSize: '14px', fontWeight: '500' }}>{aplicacion}</p>
                )
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}