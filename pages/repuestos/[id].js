import Layout from "@/src/Layout";
import styles from '@/styles/Repuestos.module.css'
import { useRouter } from "next/router";
import repuestos from '@/src/repuestos.json'
import CardRepuesto from "@/src/Repuestos/CardRepuesto";
import Select from "react-select";

const options = [
  { value: '', label: 'Todos', index: 0 },
  { value: '-Motor', label: 'Motor', index: 1 },
  { value: '-Electricos', label: 'Electricos', index: 2 },
  { value: '-Guayas', label: 'Guayas', index: 3 },
  { value: '-Suspension', label: 'Suspension', index: 4 },
  { value: '-Frenos', label: 'Frenos', index: 5 },
  { value: '-Refrigeracion', label: 'Refrigeracion', index: 6 },
  { value: '-Lujos', label: 'Lujos', index: 7 },
]
const customStyles = {
  control: (provided,) => ({
    ...provided,
    border: 'none',
    boxShadow: 'none',
    fontSize: '14px',
    fontWeight: '700',
    width: '200px'
  }),
  option: (provided, state) => ({
    ...provided,
    fontSize: '14px',
    backgroundColor: state.isSelected ? '#f1f1f1' : 'white',
    color: state.isSelected ? 'white' : 'black',
    ':hover': {
      backgroundColor: '#f1f1f1',
      color: 'black',
    },
    fontSize: '14px',
    color: state.isSelected ? 'black' : '#5c5c5c',
    zIndex: '999'
  }),
};
let description = 'Encuentraaa los repuestos para tu Chevrolet Corsa al mejor precio, y de las mejores marcas. Repuestos de suspension, motor, electricos, lujos, inyeccion, refrigeracion y mas'
export default function Repuestos({ data }) {
  const router = useRouter()
  const parts = router?.query?.id

  const handleChange = (e) => {
    router.push(`/repuestos/chevrolet-corsa${e.value}`)
  }

  return (
    <Layout title={`Repuestos ${parts.replace(/-/g, ' ')}`}description={description}  >
      <div className={styles.container}>


        <h1 className={styles.title}>Repuestos de {parts.replace(/-/g, ' ')}</h1>
        <h4 style={{ textAlign: 'left' }} className={styles.subtitle2}>Se encontraron {data?.length} repuestos de {parts.replace(/-/g, ' ')}</h4>

        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-end', gap: '16px',marginTop:'16px' }}>
          <Select onChange={handleChange} options={options} styles={customStyles} defaultValue={options[0]} isSearchable={false}/>
        </div>

        <div className={styles.gridCardRepuestos}>
          {data?.map(repuesto => (
            <CardRepuesto repuesto={repuesto} />
          ))}

        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps({ query }) {
  const vehiculo = query?.id
  const parts = vehiculo.split('-')

  const repuestosFiltrados = repuestos.filter((repuesto) => {
    const marcaAuto = repuesto.marcaAuto.toLowerCase();
    const modelosAutos = repuesto.modelosAutos.map((modelo) => modelo.toLowerCase());
    return (
      marcaAuto === parts[0].toLowerCase() &&
      modelosAutos.includes(parts[1].toLowerCase())
    );
  });

  let repFilterTipo;
  if(parts.length>2){
    repFilterTipo = repuestosFiltrados.filter(rep=> rep.tipo == parts[2])
  }

  return {
    props: {
      data: repFilterTipo?repFilterTipo: repuestosFiltrados
    }
  }


}