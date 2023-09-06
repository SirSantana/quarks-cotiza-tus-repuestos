import { gql } from "@apollo/client";

export const CREATE_PREGUNTA = gql`
mutation createPregunta($marca:String, $celular:String, $referencia:String, $titulo:String, $user:ID,$userName:String, $imagen:String ) {
    createPregunta(input: {marca:$marca, celular:$celular, referencia:$referencia, titulo:$titulo, user:$user,userName:$userName, imagen:$imagen}) {
        titulo
        marca
        userName
        referencia
        id
        fecha
    }
  }
`
export const CREATE_COTIZACION = gql`
mutation createCotizacion($marca:String,$estado:String, $descripcion:String, $precio:String, $garantia:String,$pregunta:ID, $envio:Boolean, $stock:String ) {
  createCotizacion(input: {marca:$marca,estado:$estado, descripcion:$descripcion, precio:$precio, garantia:$garantia,pregunta:$pregunta, envio:$envio, stock:$stock}) {
        descripcion
        marca
        precio
        garantia
        id
        fecha
    }
  }
`
export const SIGN_IN_MUTATION = gql`
mutation signIn($email: String!, $password:String!) {
    signIn(input:{email: $email, password:$password}) {
      user {
        email
        id
        name
        role
      }
      token
    }
  }
`