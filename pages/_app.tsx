import { AppProps } from 'next/app'
import Layout from '../layout/Layout';
const MyApp = ({ Component, pageProps }: AppProps) => {
  // Aditional props
  // Aditional layout
  // Manejar errores - componentDidCatch
  return (
    <Layout>
         <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
