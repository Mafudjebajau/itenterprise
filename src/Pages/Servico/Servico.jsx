import { useLocation, useParams, Link } from 'react-router-dom'
import HeaderItsoft from '../../components/Header/HeaderItsoft'
import './Servico.css'
import { useEffect } from 'react'

const Servico = () => {
    const location = useLocation()
    const { id } = useParams()
    const { servico } = location.state || {}

    const servicoEncontrado = servico
    // console.log(servicoEncontrado)

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [])

    if (!servicoEncontrado) {
        return (
            <div className="servico-not-found">
                <HeaderItsoft />
                <div className="container">
                    <div className="not-found-content">
                        <h1>Serviço não encontrado</h1>
                        <p>O serviço que você está procurando não existe ou não está disponível.</p>
                        <Link to="/itsoft" className="btn-primary">
                            Voltar para Serviços
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
    // console.log(servicoEncontrado)

    return (
        <>
            <HeaderItsoft />
            <div className="servico-page" id='services'>
                {/* Hero do Serviço */}
                <section
                    className="servico-hero"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${servicoEncontrado.imagem})`
                    }}
                >
                    <div className="container">
                        <div className="servico-hero-content">
                            <div className="servico-hero-text" data-aos="fade-up">
                                <div className="servico-breadcrumb">
                                    <Link to="/itsoft">IT TECH SOFT</Link> / <Link to="/itsoft#servicos">Serviços</Link> / <span>{servicoEncontrado.titulo}</span>
                                </div>
                                <div className="servico-icone-hero">
                                    {servicoEncontrado.icone}
                                </div>
                                <h1>{servicoEncontrado.titulo}</h1>
                                <p>{servicoEncontrado.descricaoLonga}</p>
                                <div className="servico-hero-actions">
                                    <Link to={`/booking/${servicoEncontrado.titulo}`}
                                        state={{ servico: servicoEncontrado }}
                                        className="btn-primary"
                                        style={{ textDecoration: 'none' }}>
                                        Solicitar Orçamento
                                    </Link>
                                    <button className="btn-outline">Falar com Especialista</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Detalhes do Serviço */}
                <section className="servico-detalhes section">
                    <div className="container">
                        <h2 className='service-titulo' data-aos="fade-right">{servicoEncontrado.titulo}</h2>
                        <div className='descricao-container'>
                            <div data-aos="fade-right">{servicoEncontrado.descricao}</div>
                            <div data-aos="fade-left">
                                <img src={servicoEncontrado.imagem} alt="imagem" />
                            </div>
                        </div>
                        <div className="detalhes-content">
                            <h2 data-aos="fade-up">O que oferecemos</h2>
                            <div className="detalhes-lista ">
                                {servicoEncontrado.detalhes.map((detalhe, index) => (
                                    <div key={index} className="detalhe-item" style={{ color: 'black' }} data-aos="fade-up" data-aos-delay={index * 50}>
                                        <span>✓</span>
                                        <span>{detalhe}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Servico
