import Empresas from '../../components/Empresas/Empresas';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Noticias from '../../components/Noticias/Noticias';
import Servicos from '../../components/Servicos/Servicos';
import Footer from '../../components/Footer/Footer';
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Noticias />
      <Empresas />
      <Servicos />
      <Footer />
    </>
  )
}