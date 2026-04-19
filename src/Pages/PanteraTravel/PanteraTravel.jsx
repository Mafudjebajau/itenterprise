import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import HeaderPantera from '../../components/Header/HeaderPantera'
import ToTopButton from '../../components/Adicionais/ToTopButton'
import {
    FaPlane,
    FaHotel,
    FaMapMarkedAlt,
    FaPassport,
    FaCar,
    FaQuoteLeft,
    FaWhatsapp,
    FaEnvelope,
    FaPhoneAlt,
    FaCheckCircle
} from 'react-icons/fa'
import logoFull from '../../assets/pantera-logo-full.png'
import logoText from '../../assets/pantera-logo-text.png'
import './PanteraTravel.css'

const PanteraTravel = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        const handleScroll = () => {
            setScrolled(window.scrollY > 100)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const servicos = [
        {
            icone: <FaPlane />,
            titulo: 'Passagens Aéreas',
            desc: 'Emissão e gestão de passagens nacionais e internacionais com as melhores tarifas.'
        },
        {
            icone: <FaHotel />,
            titulo: 'Hospedagem',
            desc: 'Reserva em hotéis selecionados, resorts e estadias exclusivas em todo o mundo.'
        },
        {
            icone: <FaPassport />,
            titulo: 'Assessoria de Vistos',
            desc: 'Suporte completo no processo de obtenção de vistos e documentação de viagem.'
        },
        {
            icone: <FaMapMarkedAlt />,
            titulo: 'Pacotes Turísticos',
            desc: 'Roteiros personalizados e pacotes completos para lazer ou negócios.'
        },
        {
            icone: <FaCar />,
            titulo: 'Aluguer de Viaturas',
            desc: 'Soluções de mobilidade com veículos modernos e seguros para a sua conveniência.'
        },
        {
            icone: <FaCheckCircle />,
            titulo: 'Seguro Viagem',
            desc: 'Proteção total para que se preocupe apenas em desfrutar da sua jornada.'
        }
    ]

    const destinos = [
        { nome: 'Dubai', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=400&fit=crop', desc: 'Luxo e inovação no deserto.' },
        { nome: 'Maldivas', img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&h=400&fit=crop', desc: 'O paraíso águas cristalinas.' },
        { nome: 'Paris', img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&h=400&fit=crop', desc: 'A cidade romance e cultura.' },
        { nome: 'Lisboa', img: 'https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=600&h=400&fit=crop', desc: 'História e modernidade lusa.' }
    ]

    return (
        <>
            <HeaderPantera />
            <div className="pantera-page">
                {/* ── HERO ── */}
                <section className="pt-hero">
                    <div className="pt-hero-overlay"></div>
                    <div className="container pt-hero-content" data-aos="fade-up">
                        <img src={logoFull} alt="Pantera Travel Logo" className="pt-hero-logo" />
                        <h1 className="pt-hero-title">
                            Agilidade em cada <span className="pt-accent">Conexão</span>
                        </h1>
                        <p className="pt-hero-subtitle">
                            A sua agência de confiança para experiências de viagem inesquecíveis.
                            Do planeamento à chegada, cuidamos de todos os detalhes.
                        </p>
                        <div className="pt-hero-actions">
                            <a href="#pt-contact" className="pt-btn-primary">Solicitar Orçamento</a>
                            <a href="#pt-servicos" className="pt-btn-secondary">Nossos Serviços</a>
                        </div>
                    </div>
                </section>

                {/* ── ABOUT ── */}
                <section className="pt-about section" id="pt-about">
                    <div className="container">
                        <div className="pt-about-grid">
                            <div className="pt-about-text" data-aos="fade-right">
                                <span className="pt-label">QUEM SOMOS</span>
                                <h2>A Excelência em <span className="pt-accent">Turismo</span></h2>
                                <p>
                                    A <strong>Pantera Travel</strong> nasceu com o propósito de redefinir o conceito de agência de viagens.
                                    Combinamos agilidade, segurança e um atendimento personalizado para garantir que cada quilómetro
                                    percorrido seja memorável.
                                </p>
                                <p>
                                    Seja para uma viagem de negócios urgente ou para as férias de sonho com a família,
                                    a nossa equipa de especialistas está pronta para conectar você ao mundo com a máxima eficiência.
                                </p>
                                <div className="pt-features-list">
                                    <span><FaCheckCircle /> Atendimento 24/7</span>
                                    <span><FaCheckCircle /> Melhores Tarifas</span>
                                    <span><FaCheckCircle /> Roteiros Exclusivos</span>
                                </div>
                            </div>
                            <div className="pt-about-visual" data-aos="fade-left">
                                <div className="pt-img-stack">
                                    <img src="https://images.unsplash.com/photo-1436491865332-7a61a109c05d?w=800&fit=crop" alt="Viagem" className="img-main" />
                                    <div className="pt-experience-badge">
                                        <strong>10+</strong>
                                        <span>Anos de Experiência</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── SERVICOS ── */}
                <section className="pt-servicos section" id="pt-servicos">
                    <div className="container">
                        <div className="section-title text-center" data-aos="fade-up">
                            <h2 className="pt-dark-h2">Soluções <b className="pt-accent">Completas</b></h2>
                            <p className="pt-dark-p">Cuidamos de tudo para que você apenas desfrute da viagem</p>
                        </div>
                        <div className="pt-servicos-grid">
                            {servicos.map((s, i) => (
                                <div key={i} className="pt-servico-card" data-aos="fade-up" data-aos-delay={i * 100}>
                                    <div className="pt-servico-icon">{s.icone}</div>
                                    <h3>{s.titulo}</h3>
                                    <p>{s.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── DESTINOS ── */}
                <section className="pt-destinos section">
                    <div className="container">
                        <div className="section-title text-center" data-aos="fade-up">
                            <h2 className="pt-dark-h2">Destinos em <b className="pt-accent">Destaque</b></h2>
                            <p className="pt-dark-p">Inspire-se com algumas das nossas rotas mais populares</p>
                        </div>
                        <div className="pt-destinos-grid">
                            {destinos.map((d, i) => (
                                <div key={i} className="pt-destino-card" data-aos="zoom-in" data-aos-delay={i * 150}>
                                    <div className="pt-destino-img">
                                        <img src={d.img} alt={d.nome} loading="lazy" />
                                        <div className="pt-destino-overlay">
                                            <h4>{d.nome}</h4>
                                            <p>{d.desc}</p>
                                            <button className="pt-destino-btn">Ver Detalhes</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── TESTIMONIAL ── */}
                <section className="pt-testimonial section">
                    <div className="container">
                        <div className="pt-testimonial-content" data-aos="fade-up">
                            <FaQuoteLeft className="pt-quote-icon" />
                            <p className="pt-testimonial-text">
                                "A Pantera Travel superou todas as minhas expectativas. A rapidez na reserva e o acompanhamento
                                constante durante a minha viagem a Dubai fizeram toda a diferença. Recomendo vivamente!"
                            </p>
                            <div className="pt-testimonial-author">
                                <strong>Ricardo Fonseca</strong>
                                <span>Empresário</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── CONTACT ── */}
                <section className="pt-contact section" id="pt-contact">
                    <div className="container">
                        <div className="pt-contact-card" data-aos="zoom-in">
                            <h2>Pronto para a sua próxima <span className="pt-accent">Aventura?</span></h2>
                            <p>Fale com os nossos agentes agora mesmo.</p>
                            <div className="pt-contact-links">
                                <a href="https://wa.me/245000000000" target="_blank" rel="noopener noreferrer" className="pt-contact-btn pt-whatsapp">
                                    <FaWhatsapp /> WhatsApp
                                </a>
                                <a href="mailto:contato@panteratravel.com" target="_blank" rel="noopener noreferrer" className="pt-contact-btn pt-email">
                                    <FaEnvelope /> Email
                                </a>
                                <a href="tel:+245000000000" target="_blank" rel="noopener noreferrer" className="pt-contact-btn pt-phone">
                                    <FaPhoneAlt /> Telefonar
                                </a>
                            </div>
                            <div className="pt-footer-logo">
                                <img src={logoText} alt="Pantera Travel" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <ToTopButton />
        </>
    )
}

export default PanteraTravel
