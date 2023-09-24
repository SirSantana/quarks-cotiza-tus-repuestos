import Layout from "@/src/Layout";
import styles from '@/styles/Repuestos.module.css'
import repuestos from '@/src/repuestos.json'
import CardRepuesto from "@/src/Repuestos/CardRepuesto";
import { useRouter } from "next/router";


export default function Repuesto({ data }) {
	const router = useRouter()
  let description= `${data?.repuesto}, Precio: ${data?.precio}, Marca: ${data?.fabricante}, PAGO CONTRAENTREGA y ENVIO GRATIS en Bogotá. ${data?.garantiaMeses} mes(es) de garantia. Cotiza tus repuestos chevrolet aqui!`

	return (
		<Layout title={data?.repuesto + " "+ data?.fabricante}marca={data?.fabricante}  description={description} price={data?.precio} image={data?.imagen} url={router?.asPath}>

			<div className={styles.container2}>
				<p onClick={() => router?.back()} className={styles.textReturn} > Regresar | Repuestos &gt; {data?.marcaAuto} &gt; {data?.tipo} &gt; {data?.repuestoTipo} </p>

				<div className={styles.containerCardRepuesto}>
					<div className={styles.containerImgRepuestos}>
						<img src={data?.imagen} className={styles.imgPrincipalRepuesto} />
						<div style={{ width: '100%', margin: '16px 0', backgroundColor: '#d9d9d9', height: '1px' }} />

						<div className={styles.repSugeridos}  >
							<h2 className={styles.titleNombre}>Otros repuestos</h2>
							<div style={{ display: 'flex', flexDirection: 'row', gap: '16px', justifyContent: 'space-between', width: '100%', }}>
								{repuestos?.slice(0, 2).map(repuesto => (
									<CardRepuesto repuesto={repuesto} />
								))}
							</div>

						</div>
					</div>
					<div className={styles.cardDetalleRepuesto}>
						<p style={{ fontSize: '12px', color: '#5C5C5C', margin: 0 }}>Nuevo | 2 Vendidos</p>
						<h1 className={styles.titleNombre}>{data?.repuesto}</h1>
						<h2 className={styles.textPricePrincipal}>${data?.precio}</h2>
						<img src={data?.imagen} className={styles.imgPrincipalRepuestoMobile} />

						<div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '24px' }}>
							<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px' }}>
								<p style={{ fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '600' }}><ion-icon style={{ fontSize: '20px' }} name="car-sport-outline"></ion-icon>Vehiculo:</p>
								<p style={{ fontSize: '14px', }}>{data?.marcaAuto}</p>
							</div>
							<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px' }}>
								<p style={{ fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '600' }}><ion-icon style={{ fontSize: '20px' }} name="shield-checkmark-outline"></ion-icon>Marca / Origen:</p>
								<p style={{ fontSize: '14px', }}>{data?.fabricante}</p>
							</div>
							<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px' }}>
								<p style={{ fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '600' }}><ion-icon style={{ fontSize: '20px' }} name="ribbon-outline"></ion-icon>Garantìa:</p>
								<p style={{ fontSize: '14px', }}>{data?.garantiaMeses} meses</p>
							</div>

						</div>

						<div style={{ width: '98%', marginTop: '24px', height: '30px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'left', gap: '8px' }}>
							<ion-icon style={{ color: 'green', fontSize: '20px' }} name="checkmark-circle"></ion-icon>
							<p style={{ color: '#373737', fontSize: '12px', fontWeight: '600' }}>Envios Gratis y Pagos contraentrega en Bogotá</p>
						</div>
						<button style={{ height: '40px', width: '100%', }} className={styles.button}>
							Estoy interesado
						</button>
						<div style={{ width: '100%', margin: '16px 0', backgroundColor: '#d9d9d9', height: '1px' }} />
						<div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '8px' }}>
							<p style={{ fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '600' }}><ion-icon style={{ fontSize: '20px' }} name="reader-outline"></ion-icon>Descripcion:</p>
							<p style={{ fontSize: '14px', }}>{data?.descripcion}</p>
						</div>
						<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px' }}>
							<p style={{ fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '600' }}>Aplicaciones:</p>
							<p style={{ fontSize: '14px', }}>{data?.modelosAutos?.map(el => el)}</p>
						</div>
						<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px' }}>
							<p style={{ fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '600' }}>Cilindrajes:</p>
							<p style={{ fontSize: '14px', }}>{data?.cilindraje?.map(el => el)}</p>
						</div>
						<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px' }}>
							<p style={{ fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '600' }}>Categoria repuesto:</p>
							<p style={{ fontSize: '14px', }}>{data?.tipo}</p>
						</div>
						<div style={{ width: '100%', margin: '16px 0', backgroundColor: '#d9d9d9', height: '1px' }} />
						<div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
							<p style={{ fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '600' }}><ion-icon style={{ fontSize: '20px' }} name="cube-outline"></ion-icon>Envios:</p>
							<p style={{ fontSize: '14px', }}>Principales Ciudades: 24hrs - 48hrs</p>
							<p style={{ fontSize: '14px', }}>Municipios: 24hrs - 72hrs</p>
						</div>

						<div style={{ width: '98%', marginTop: '16px', display: 'flex', alignItems: 'center', justifyContent: 'left', gap: '8px' }}>
							<ion-icon style={{ color: '#f50057', fontSize: '20px' }} name="alert-circle"></ion-icon>
							<p style={{ color: '#373737', fontSize: '12px', fontWeight: '600' }}>No encuentras tu repuesto?</p>
						</div>
						<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: '4%' }}>
							<button style={{ height: '40px', width: '48%', marginBottom: '16px',  }} className={styles.button}>
								Cotizar en linea
							</button>
							<button className={styles.buttonSecondary} style={{ height: '40px', width: '48%', marginBottom: '16px',}} >
								<ion-icon style={{fontSize:'20px'}} name="logo-whatsapp"></ion-icon>
								Contactar
							</button>
						</div>
						<div className={styles.repSugeridosMobile} >
						<div style={{ width: '100%', margin: '16px 0', backgroundColor: '#d9d9d9', height: '1px' }} />

							<h2 className={styles.titleNombre}>Otros repuestos</h2>
							<div style={{ display: 'flex', flexDirection: 'row', gap: '16px', justifyContent: 'space-between', width: '100%', }}>
								{repuestos?.slice(0, 2).map(repuesto => (
									<CardRepuesto repuesto={repuesto} />
								))}
							</div>

						</div>
					</div>
					

				</div>
				
			</div>
		</Layout>
	)
}

export async function getServerSideProps({ query }) {
	const repuesto = query?.id
	let repuestoParse = repuesto.split('-')
	const repuestoOne = repuestos.find(rep => rep.idUrl == repuestoParse[repuestoParse.length - 1])

	return {
		props: {
			data: repuestoOne
		}
	}
}