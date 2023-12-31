


export default function SideBar({data}) {
  return (
    <div style={{ width: '20%', backgroundColor: '#001547', display: 'flex', flexDirection: 'column', height: '100vh', alignItems: 'center' }}>
      {/* <img src="/Chevrolet.png" style={{ width: '96px', height: '96px', marginTop: '48px' }} /> */}
      <h2 style={{ fontSize: '64px', color: '#F9880B', marginTop: '48px', alignSelf: 'flex-end', padding: '32px' }}>{data?.['referencia-incolbest']}</h2>
      <div style={{ height: '1px', width: '90%', backgroundColor: '#394E8A' }} />

      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', padding: '16px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '50%', justifyContent: 'space-between', marginBottom: '16px' }}>
          <h3 style={{ fontSize: '20px', color: '#8A9ED6', fontWeight: '600' }}>Eje</h3>
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%', position: 'relative' }}>
            <ion-icon style={{ fontSize: '12px', color: '#F9880B', transform: 'rotate(180deg)', position: 'absolute', top: '-14px', left: data['posicion-eje'] === 'delantero' ? '8px' : '55px' }} name="triangle"></ion-icon>
            <img src="/car-icon.png" style={{ height: '28px', width: '72px' }} />
            <ion-icon style={{ marginTop: '4px', fontSize: '12px', color: '#F9880B', position: 'absolute', top: '28px', left: data['posicion-eje'] === 'delantero' ? '8px' : '55px' }} name="triangle"></ion-icon>
          </div>

        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '50%', justifyContent: 'space-between' }}>
          <h3 style={{ fontSize: '20px', color: '#8A9ED6', fontWeight: '600' }}>Espesor</h3>
          <div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
              <div style={{ height: '32px', width: '12px', backgroundColor: 'white', border: '1px solid #394E8A' }} />
              <div style={{ height: '44px', width: '8px', backgroundColor: 'white', border: '1px solid #394E8A' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', position: 'relative' }}>
              <div style={{ height: '16px', width: '1px', backgroundColor: '#8A9ED6' }} />
              <div style={{ height: '1px', width: '17px', backgroundColor: '#8A9ED6' }} />
              <div style={{ height: '10px', width: '1px', backgroundColor: '#8A9ED6' }} />
              <div style={{ height: '1px', width: '40px', backgroundColor: '#8A9ED6' }} />
              <p style={{ color: 'white', position: 'absolute', left: '26px' }}>{data?.espesor} <span style={{ fontSize: '10px', }}>mm</span></p>

            </div>
          </div>

        </div>
      </div>

      <div style={{ height: '1px', width: '90%', backgroundColor: '#394E8A', margin: '16px 0 8px 0' }} />

      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', padding: '16px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '50%' }}>
          <h3 style={{ fontSize: '20px', color: '#8A9ED6', fontWeight: '600' }}>Cantidad</h3>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '8px', alignItems: 'flex-end' }}>
            <img src="/icon-pasta-freno.png" style={{ height: '40px', width: '40px' }} />
            <p style={{ color: 'white', }}>x{data?.cantidad}</p>
          </div>

        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '50%', justifyContent: 'space-between' }}>
          <h3 style={{ fontSize: '20px', color: '#8A9ED6', fontWeight: '600' }}>Ref. WVA</h3>
          <p style={{ color: 'white', }}>{data['referencia-wva']} </p>
        </div>
      </div>

      <div style={{ height: '1px', width: '90%', backgroundColor: '#394E8A', margin: '16px 0 8px 0' }} />

      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', padding: '16px' }}>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '50%', justifyContent: 'space-between' }}>
          <h3 style={{ fontSize: '20px', color: '#8A9ED6', fontWeight: '600' }}>Ref. FMSI</h3>
          <p style={{ color: 'white', }}>{data['referencia-fmsi']} </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '50%', justifyContent: 'space-between' }}>
          <h3 style={{ fontSize: '20px', color: '#8A9ED6', fontWeight: '600' }}>Ref. Platina</h3>
          <p style={{ color: 'white', }}>{data['referencia-platina']} </p>
        </div>
      </div>
      <div>
        <p>{data?.precio}</p>
        <button style={{width:'100%', backgroundColor:'#F9880B'}}>Comprar ahora</button>
      </div> 
    </div>

  )
}