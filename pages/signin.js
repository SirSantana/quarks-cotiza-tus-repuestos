import { SIGN_IN_MUTATION } from "@/graphql/mutations"
import useAuth from "@/hooks/useAuth"
import { useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const initialForm = {
  email: '',
  password: ''
}
export default function SignIn() {
  const [form, setForm] = useState(initialForm)
  const [signIn, { data, loading, error }] = useMutation(SIGN_IN_MUTATION)
  const { login, user } = useAuth()
  const router = useRouter()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setForm(initialForm)
    signIn({ variables: form })
  }
  useEffect(() => {
    if (data) {
      localStorage.setItem('token', JSON.stringify(data?.signIn.token))
      login(data?.signIn)
      setForm(initialForm)
      router.replace(`/vendedor/perfil/${data?.signIn?.user?.id}`)
    }
  }, [data])
  console.log(user);


  return (
    <form onSubmit={handleSubmit} >
      <input value={form.email} required onChange={handleChange} id='email' name='email' placeholder="Tú email"  type={'email'} />
      <input value={form.password} required onChange={handleChange} id='password' name='password' placeholder="Tú contraseña" type={'password'} />
      <button style={{ alignSelf: 'flex-start', marginBottom: '8px' }} >
        Inicia Sesión
      </button>
    </form>
  )
}