import Layout from "@/src/Layout";
import CardPrevPastaFreno from "@/src/PastasFreno/CardPrevPastaFreno";
import Content from "@/src/PastasFreno/Content";
import SideBar from "@/src/PastasFreno/SideBar";

import styles from '@/styles/PastasFreno.module.css'


export default function CatalogoPastasFreno() {
  let eje = 'delantero'
  return (
    <Layout title={'Catalogo Pastas Freno'} navbar={false}>
      <div style={{ width: '100%',  display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <SideBar eje={eje} />
        <Content />


      </div>
      <div style={{ padding: '48px', width: '100%', display: 'flex', flexDirection: 'column', gap: '32px', justifyContent: 'space-between', backgroundColor: '#fbfbfb' }}>
        <h2 style={{ fontSize: '32px', color: '#001547' }}>Otras pastas de freno</h2>
        <div style={{display:'flex', flexDirection:'row', gap:'24px', width:'100%'}}>
          <CardPrevPastaFreno eje={eje} />
          <CardPrevPastaFreno eje={eje} />
          <CardPrevPastaFreno eje={eje} />
        </div>

      </div>
    </Layout>

  )
}
