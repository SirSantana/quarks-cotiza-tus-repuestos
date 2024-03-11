
import { CREATE_PREGUNTA } from '@/graphql/mutations'
import styles from '@/styles/Main.module.css'
import { handleFileUpload } from '@/utils/base64'
import { ModalSuccessfull, ModalError, ModalLoading } from '@/utils/Modales'
import { useMutation } from '@apollo/client'
import { useEffect, useState } from 'react'

const marcas = ['Mazda', 'Chevrolet', 'Renault', 'Ford']

const initialForm = {
  celular: '',
  marca: 'Chevrolet',
  referencia: '',
  titulo: '',
  imagen: ''
}

export default function FormCotizar() {
  const [visibleMarca, setVisibleMarca] = useState(false)
  const [marca, setMarca] = useState('Chevrolet')
  const [selectedFile, setSelectedFile] = useState()
  const [preview, setPreview] = useState()
  const [form, setForm] = useState(initialForm)
  const [createPregunta, { data, error, loading }] = useMutation(CREATE_PREGUNTA)
  const [visibleCotizado, setVisibleCotizado] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.celular.length !== 10) {
      return alert('Tu numero de celular debe tener 10 digitos')
    }
    createPregunta({ variables: form })
    setForm(initialForm)
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  // const sendMessage = (problema) => {
  //   let url = `https://api.whatsapp.com/send?phone=57${3187464554}`;

  //   window.open(url);
  // }
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined)
      return
    }
    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)
    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  const cancelImage = () => {
    setForm({ ...form, imagen: '' })
    setSelectedFile()
    setPreview()
  }

  const onSelectFile = e => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined)
      return
    }
    setSelectedFile(e.target.files[0])
    handleFileUpload(e).then(res => setForm({ ...form, imagen: res }))
  }
  useEffect(() => {
    if (data) {
      setVisibleCotizado(true)
      setTimeout(() => {
        setVisibleCotizado(false)
      }, 2000)
    }
  }, [data])
  return (
    <section className={styles.home} >
      <h1 className={styles.title}>
        Cotiza tus repuestos Chevrolet facil, rapido y seguro
      </h1>
      <form onSubmit={handleSubmit} className={styles.homeCard}>
        <div className={styles.locationDivRef}>
          <label htmlFor='referencia' className={styles.label}>Referencia / Cilindraje / Modelo</label>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
            <img src={`./${marca}.png`} style={{ height: '32px', width: '32px', marginTop: '6px' }} alt={`Cotiza tus repuestos ${marca}`} />
            <input required id="referencia" style={{ marginTop: '6px' }} className={styles.input} type='text' onChange={handleChange} name='referencia' placeholder='Corsa 1.4 2004' value={form.referencia} />
          </div>
        </div>

        <div className={styles.locationDivRep}>
          <label htmlFor='repuestos' className={styles.label}>Repuestos</label>
          <input required id='repuestos' className={styles.input} type='text' onChange={handleChange} name='titulo' placeholder='Bomba de agua, balancines...' value={form.titulo} />
        </div>

        <div className={styles.locationDivCel}>
          <label htmlFor='celular' className={styles.label}>Tu celular</label>
          <input required id='celular' className={styles.input} type='number' onChange={handleChange} name='celular' placeholder='3214560210' value={form.celular} />
        </div>
        <div className={styles.locationImg}>
          <input id='image' style={{ display: 'none', height: 0, }} onChange={onSelectFile} type='file' accept="image/png, image/gif, image/jpeg" />
          <label className={styles.labelImage} htmlFor='image'>
            {selectedFile ?
              <div className={styles.containerImageSelected}>
                <img src={preview} style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
                <ion-icon onClick={cancelImage} style={{ fontSize: '24px', cursor: 'pointer', color: '#5B0221' }} name="trash"></ion-icon>
              </div >
              : <ion-icon style={{ fontSize: '24px', color: '#5B0221' }} name="image"></ion-icon>}

          </label>
        </div>
        {/* <input type={'submit'} className={styles.button} value='Wha' onClick={sendMessage} /> */}

        <input type={'submit'} className={styles.button} value='Cotizar' />


      </form>

      {visibleMarca &&
        <div onClick={() => setVisibleMarca(visibleMarca ? false : true)} className={styles.modal}>
          <div className={styles.modalContent}>
            {marcas.map(el => (<img key={el} onClick={() => { setMarca(el), setForm({ ...form, marca: el }) }} style={{ height: '40px', width: '40px', cursor: 'pointer' }} src={`./${el}.png`} />))}
          </div>
        </div>
      }
      {visibleCotizado &&
        <ModalSuccessfull title={'Tu cotización ha sido enviada!'} subtitle={'Te avisaremos por whatsapp las cotizaciones'} />
      }
      {loading &&
        <ModalLoading title={'Enviando Cotizacion ... '} />
      }
      {error &&
        <ModalError title={'Ha ocurrido un error'} subtitle={error?.message} />
      }


    </section>
  )
}