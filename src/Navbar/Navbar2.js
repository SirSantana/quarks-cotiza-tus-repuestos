

import styles from '@/styles/Navbar.module.css'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState, } from 'react';
import FormCotizar from '../Main/FormCotizar';
import Select from 'react-select';
import repuestos from '@/src/repuestos.json'


export const customStyles = {
  control: (provided) => ({
    ...provided,
    border: 'none', // Quitar el borde
    boxShadow: 'none',
    fontSize: '14px',
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    display: 'none', // Ocultar el icono de flecha
  }),
  indicatorSeparator: () => ({
    display: 'none', // Ocultar la línea horizontal
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#f1f1f1' : 'white', // Cambiar el color de fondo de la opción seleccionada
    color: state.isSelected ? 'white' : 'black', // Cambiar el color de texto de la opción seleccionada
    ':hover': {
      backgroundColor: '#f1f1f1', // Cambiar el color de fondo cuando se realiza un hover
      color: 'black', // Cambiar el color de texto cuando se realiza un hover
    },
    fontSize: '14px',
    color: '#5c5c5c',
    zIndex: '999'
  }),
};
const initialForm = {
  repuesto: '',
  id: ''
}

const repuestosWithOptions = repuestos.map((repuesto) => ({
  value: repuesto.repuesto,
  label: (
    <div style={{ display: 'flex', cursor: 'pointer', flexDirection: 'row', alignItems: 'center', gap: '8px', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '8px', }}>
        <img src={repuesto.imagen} alt={repuesto.repuesto} className={styles.optionImage} />
        <p style={{ fontSize: '12px' }}>{repuesto.repuesto}</p>
      </div>
      <p style={{ fontSize: '12px', fontWeight: '600' }}>${repuesto?.precio}</p>
    </div>
  ),
  index: repuesto?.idUrl
}));


export default function Navbar2() {
  const router = useRouter()
  const ref = useRef(null)
  const [scrolled, setScrolled] = useState(false);
  const [form, setForm] = useState(initialForm)
  const handleSubmit = (e) => {
    e.preventDefault()
    router.push(`/repuesto/${form.repuesto?.replace(/ /g, "-").replace(/\//g, "-")}-${form.id}`)

  }
  const handleChange = (e) => {
    setForm({ ...form, repuesto: e.value, id: e.index })
    router.push(`/repuesto/${e.value?.replace(/ /g, "-").replace(/\//g, "-")}-${e.index}`)

  }
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }} className={styles.headerNav}>
      <div ref={ref} className={styles.headerNav} >
        <div className={styles.navDiv}>
          <Link style={{ textDecoration: 'none', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px' }} href={'/'}>
            <img alt={'Cotiza tus repuestos logo'} src={'/Logo1.png'} className={styles.logo} />
            <h4 style={{ cursor: 'pointer', textDecoration: 'none', outline: 'none', color: '#373737' }} className={styles.titleNav}>Quarks Repuestos</h4>
          </Link>
          <form onSubmit={handleSubmit} className={styles.homeCard}>
            <div className={styles.select2}>
              <Select onChange={handleChange} options={repuestosWithOptions} styles={customStyles} placeholder='Buscar repuesto' noOptionsMessage={() => 'No se encontro ningun repuesto'} />
            </div>
            <span onClick={handleSubmit} className={styles.icon}>
              <ion-icon style={{ color: 'white', fontSize: '22px' }} name="search-outline"></ion-icon>
            </span>
          </form>
          <ul className={styles.navv}>
            <li style={{ listStyle: 'none', cursor: 'pointer', textDecoration: 'none', color: router?.pathname === '/repuestos/chevrolet-corsa' ? '#373737' : '#373737' }} className={styles.subtitle}>
              <Link style={{ textDecoration: 'none',listStyle: 'none', cursor: 'pointer', textDecoration: 'none', color: router?.pathname === '/repuestos/chevrolet-corsa' ? '#373737' : '#373737' }} href={'/repuestos/chevrolet-corsa'}>
                Productos
              </Link>
            </li>

            <li style={{ listStyle: 'none', cursor: 'pointer', textDecoration: 'none', color: router?.pathname === '/cotizaciones' ? '#373737' : '#373737' }} className={styles.subtitle}>
              <Link style={{ textDecoration: 'none',listStyle: 'none', cursor: 'pointer', textDecoration: 'none', color: router?.pathname === '/cotizaciones' ? '#373737' : '#373737'}} href={'/cotizaciones'}>
                Cotizaciones
              </Link>
            </li>


          </ul>
        </div>
        <form onSubmit={handleSubmit} className={styles.homeCardMobile}>
          <div className={styles.select2}>
            <Select onChange={handleChange} options={repuestosWithOptions} styles={customStyles} placeholder='Buscar repuesto' noOptionsMessage={() => 'No se encontro ningun repuesto'} />
          </div>
          <span onClick={handleSubmit} className={styles.icon}>
            <ion-icon style={{ color: 'white', fontSize: '20px' }} name="search-outline"></ion-icon>
          </span>
        </form>
      </div>
      {/* <FirstNewScreen /> */}
      {/* <button onClick={sendMessage}>What</button> */}
    </header>

  )
}