import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import { Header } from '../components/header';

// Autenticação de email para acesso
import { SessionProvider } from "next-auth/react"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Header/>
      <Component {...pageProps} />{/*Aqui é o corpo da página */}
      
    </SessionProvider>
  );
}


/*  LEMBRE-SE QUE PARA MAIS DE 1 ITEM PRECISA POR EM () 
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />   <-----------------AQUI
}
*/