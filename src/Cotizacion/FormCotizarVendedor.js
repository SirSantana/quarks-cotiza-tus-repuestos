import styles from '@/styles/Cotizaciones.module.css'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { CREATE_COTIZACION } from '@/graphql/mutations'
import { useMutation } from '@apollo/client'
import useAuth from '@/hooks/useAuth'
import { ModalError, ModalLoading, ModalSuccessfull } from '@/utils/Modales'
import { GET_COTIZACIONES } from '@/graphql/queries'

const initialForm = {
  garantia: '1',
  marca: '',
  pregunta: '',
  precio: '',
  descripcion: '',
  // stock: '1',
  envio: false,
  celular: '',
  estado: 'Nuevo'
}
export default function FormCotizar({ setVisibleCotizar, celular, emailVendedor, dataPregunta, cotizaciones }) {
  const [form, setForm] = useState(initialForm)
  const [colorBack, setColorBack] = useState('#80FF1C')
  const { user } = useAuth()
  const router = useRouter()
  const { cotizacion } = router?.query
  const partes = cotizacion?.split("-")
  const id = partes?.[partes?.length - 1]
  const [createCotizacion, { data, loading, error }] = useMutation(CREATE_COTIZACION,{ refetchQueries: [{ query: GET_COTIZACIONES, variables: { id: id } }] })
  
  const [visibleCotizado, setVisibleCotizado] = useState(false)

 

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (e.target.name === 'estado') {
      if (e.target.value === 'Nuevo') {
        setColorBack('#80FF1C')
      } else if (e.target.value === 'Segunda') {
        setColorBack('#f50057')
      } else {
        setColorBack('#FFBB56')
      }
    }
  }
  const handleSendMessage = () => {
    const nombreCliente = "Hola, Buen Dia!";
    const marcaModeloAuto = `${dataPregunta?.marca} ${dataPregunta?.referencia}`;
    const nombreRepuesto = dataPregunta?.titulo;
    let marcaA = "";
    let precioMarcaA = "";
    let marcaB = "";
    let precioMarcaB = "";
    cotizaciones.forEach((cotizacion, index) => {
      // Aquí asumimos que cada cotización tiene las propiedades: marca y precio
      const { marca, precio } = cotizacion;
      // Asignar los valores a las variables según el índice
      if (index === 0) {
        marcaA = marca;
        precioMarcaA = precio;
      } else if (index === 1) {
        marcaB = marca;
        precioMarcaB = precio;
      }
    });
    const mensajeWhatsApp = `${nombreCliente} 😊\n\nEs un placer informarte que tenemos el repuesto que necesitas para tu ${marcaModeloAuto}. Aquí están los detalles:\n\nRepuesto: ${nombreRepuesto} 🚗\n\nOpción 1 (Marca A):\nMarca: ${marcaA} 🏷️\nPrecio: ${precioMarcaA}\n\nOpción 2 (Marca B):\nMarca: ${marcaB} 🏷️\nPrecio: ${precioMarcaB}\n\nSi estás listo para proceder con la compra, simplemente responde a este mensaje con 'Confirmar'. Te proporcionaremos los pasos para finalizar la orden y enviarte el repuesto.\n\nSi tienes alguna pregunta adicional o necesitas más información sobre las opciones disponibles, no dudes en preguntar. Estamos aquí para ayudarte en cada paso del proceso. 🤝\n\n¡Gracias por elegirnos y confiar en nuestros servicios! 🙌\n\nSaludos, Miguel de Cotizatusrepuestos.com🚀\n`;

    let link = `https://www.cotizatusrepuestos.com${router?.asPath}`
    let url = `https://api.whatsapp.com/send?phone=57${celular}`;
    url += `&text=${encodeURI(mensajeWhatsApp + link)}&app_absent=0`
    window.open(url);
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (id && emailVendedor === process.env.NEXT_PUBLIC_EMAIL) {
      createCotizacion({ variables: form })
      setForm(initialForm)
      return
    }
    alert('No eres vendedor')
  }
  useEffect(() => {
    setForm({ ...form, pregunta: id, })
  }, [id])
  useEffect(() => {
    if (data) {
      setVisibleCotizado(true)
      setTimeout(() => {
        setVisibleCotizado(false)
        router.reload()
      }, 2000)
    }
  }, [data])
  return (
    <div className={styles.modal} >
      <div style={{ width: '300px', backgroundColor: 'white', padding: '16px', borderRadius: '8px' }} className={styles.modalContent}>
        <ion-icon onClick={() => setVisibleCotizar(false)} style={{ fontSize: '24px', cursor: 'pointer' }} name="close-outline"></ion-icon>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', marginTop: '8px', gap: '10px' }}>

          <label htmlFor="descripcion" className={styles.label}>Detalle de cotizacion</label>
          <input value={form.descripcion} onChange={handleChange} name='descripcion' id='descripcion' className={styles.input} type={'text'} placeholder='Coloca un mensaje de soporte de cotizacion' />


          <label htmlFor="marca" className={styles.label}>Marca / Origen</label>
          <input value={form.marca} required onChange={handleChange} id='marca' name='marca' className={styles.input} type={'text'} placeholder='General Motor' />

          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <section style={{ display: 'flex', flexDirection: 'column', width: '45%' }}>
              <label htmlFor="precio" style={{ marginBottom: '8px' }} className={styles.label}>Precio</label>
              <input value={form.precio} required onChange={handleChange} id='precio' name='precio' className={styles.input} type={'number'} placeholder='Precio' />
            </section>

            <section style={{ display: 'flex', flexDirection: 'column', width: '45%' }}>
              <label htmlFor="garantia" style={{ marginBottom: '8px' }} className={styles.label}>Garantia en meses</label>
              <input value={form.garantia} onChange={handleChange} id='garantia' name='garantia' className={styles.input} type={'number'} placeholder='Garantia del producto' min="1" max="24" />
            </section>

          </div>



          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>

            <section style={{ display: 'flex', flexDirection: 'column', width: '45%', justifyContent: 'space-between' }}>
              <label htmlFor="envio" className={styles.label}>Envio Gratis</label>
              <label className={styles.toggle}>
                <input onChange={(e) => setForm({ ...form, envio: form.envio === false ? true : false })} id='envio' name='envio' className={styles.toggleCheckbox} type="checkbox" />
                <div className={styles.toggleSwitch}></div>
              </label>

            </section>
            <section style={{ display: 'flex', flexDirection: 'column', width: '45%', justifyContent: 'space-between' }}>
              <label className={styles.label}>
                Estado
              </label>

              <select className={styles.input} style={{ backgroundColor: colorBack, width: '100px', padding: '4px', height: '40px', border: 'none', color: '#1b333d' }} name='estado' onChange={handleChange}>
                <option style={{ backgroundColor: '#80FF1C', color: '#3E8C00' }} id='estado' value="Nuevo">Nuevo</option>
                <option style={{ backgroundColor: '#f50057', color: '#5B0221' }} id='estado' value="Segunda">Segunda</option>
                <option style={{ backgroundColor: '#FFBB56', color: '#945E0D' }} id='estado' value="Reparado">Reparado</option>
              </select>

            </section>

          </div>

          <input className={styles.button} type={'submit'} value='Enviar Cotizacion' />
          {user?.email === process.env.NEXT_PUBLIC_EMAIL && <button onClick={handleSendMessage}>Enviar mensaje</button>}

        </form>
      </div>
      {visibleCotizado &&
        <ModalSuccessfull title={'Tu cotización ha sido enviada!'} subtitle={'Espera a que el cliente te contacte'} />
      }
      {loading &&
        <ModalLoading title={'Enviando Cotizacion ... '} />
      }
      {error &&
        <ModalError title={'Ha ocurrido un error'} subtitle={error?.message} />
      }
    </div>

  )
}