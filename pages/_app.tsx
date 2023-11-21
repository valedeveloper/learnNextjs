import { AppProps } from 'next/app'
import Layout from '../layout/Layout';
import CartProvider from '../store/CartProvider';
const MyApp = ({ Component, pageProps }: AppProps) => {
  // Aditional props
  // Aditional layout
  // Manejar errores - componentDidCatch
  return (
    <CartProvider>
      <Layout>
         <Component {...pageProps} />
    </Layout>
    </CartProvider>
    
  )
}

export default MyApp
