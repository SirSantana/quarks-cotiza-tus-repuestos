import { gql } from "@apollo/client";

//USER
export const GET_USER = gql`
    query getUser{
        getUser{
            name
            apellido
            email
            vehiculos
            avatar
            role
            ciudad 
            pais
            id
            cotizaciones
            almacen
            marcas
        }
    }
`
export const GET_PREV_PREGUNTAS = gql`
query getPreguntas($limit:Int, $marca:String) {
  getPreguntas(limit:$limit, marca:$marca) {
   titulo
   marca
   userName
   referencia
   id
   fecha
  }
}
`;

export const GET_LAST_PREGUNTAS = gql`
query getLastPreguntas {
  getLastPreguntas {
   titulo
   marca
   userName
   referencia
   id
   fecha
  }
}
`;

export const GET_ONE_PREGUNTA = gql`
  query getOnePregunta($id:ID){
    getOnePregunta(id:$id){
    titulo
    marca
    referencia
    fecha
    celular
    cotizaciones
   imagen
   id
    }
  }
`
export const GET_COTIZACIONES = gql`
query getCotizaciones($id:ID) {
  getCotizaciones(id:$id) {
   descripcion
   marca
   garantia
   precio
   id
   user
   celular
   stock
   envio
   estado
   fecha
  }
}
`