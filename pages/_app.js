import '@/styles/globals.css'
import { client } from '@/client'
import { AuthProvider } from '@/Context/AuthContext'
import { ApolloProvider } from '@apollo/client'
import { Poppins } from 'next/font/google'


const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })
export default function App({ Component, pageProps }) {
  return <>
    <ApolloProvider client={client}>
      <AuthProvider>
        <main className={poppins.className}>
          <Component {...pageProps} />

        </main>
      </AuthProvider>
    </ApolloProvider>

  </>
}
