import Layout from "@/src/Layout";
import CardPrevPastaFreno from "@/src/PastasFreno/CardPrevPastaFreno";
import Content from "@/src/PastasFreno/Content";
import SideBar from "@/src/PastasFreno/SideBar";
import pastasfreno from '@/src/pastas-freno.json'

import styles from '@/styles/PastasFreno.module.css'


export default function PastaFreno({ data }) {
  let eje = 'delantero'
  console.log(data);
  return (
    <Layout title={'Catalogo Pastas Freno'} navbar={false}>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <SideBar data={data} />
        <Content data={data} />


      </div>
      <div style={{ padding: '48px', width: '100%', display: 'flex', flexDirection: 'column', gap: '32px', justifyContent: 'space-between', backgroundColor: '#fbfbfb' }}>
        <h2 style={{ fontSize: '32px', color: '#001547' }}>Otras pastas de freno</h2>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '24px', width: '100%', flexWrap:'wrap'}}>
          {pastasfreno.map(el => (
            <CardPrevPastaFreno data={el} />
          ))}
        </div>

      </div>
    </Layout>

  )
}
export async function getServerSideProps({ query }) {
  const referencia = query?.id
  const pastafreno = pastasfreno.find(pastafreno => pastafreno['referencia-incolbest'] === Number(referencia))

  return {
    props: {
      data: pastafreno
    }
  }
}