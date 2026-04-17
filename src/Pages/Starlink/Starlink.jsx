import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import HeaderItsoft from '../../components/Header/HeaderItsoft'
import ToTopButton from '../../components/Adicionais/ToTopButton'
import {
    FaSatellite,
    FaSatelliteDish,
    FaRocket,
    FaTools,
    FaClipboardList,
    FaSun,
    FaGlobe,
    FaHeadset,
    FaBolt,
    FaWhatsapp,
    FaPhoneAlt
} from 'react-icons/fa'
import { SiSpacex } from 'react-icons/si'
import './Starlink.css'

const Starlink = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [])

    const produtos = [
        {
            id: 1,
            nome: 'Starlink Mini',
            badge: 'Mobilidade Total',
            icone: <FaSatelliteDish />,
            cor: '#2563EB',
            descricao:
                'A Starlink Mini redefine os padrões de conectividade móvel. Projetada para ambientes que exigem mobilidade total sem comprometer a largura de banda, esta unidade compacta integra uma antena de matriz de fase eletrónica e um router Wi-Fi num único chassis.',
            specs: [
                { label: 'Velocidade Download', valor: 'até 100 Mbps' },
                { label: 'Latência', valor: '~50ms' },
                { label: 'Peso', valor: '1,1 kg' },
                { label: 'Ideal para', valor: 'Mobilidade / Campo' },
            ],
            ideal: 'Operações críticas, equipas técnicas no terreno e infraestruturas móveis fora das redes convencionais.',
        },
        {
            id: 2,
            nome: 'Starlink Standard',
            badge: 'Mais Popular',
            icone: <FaSatellite />,
            cor: '#059669',
            descricao:
                'A Starlink Standard é a solução de referência para empresas e residências que exigem banda larga sem compromissos. Concebida para instalações fixas ou semi-permanentes, oferece campo de visão alargado e hardware otimizado da constelação LEO.',
            specs: [
                { label: 'Velocidade Download', valor: 'até 200 Mbps' },
                { label: 'Latência', valor: '~30ms' },
                { label: 'Peso', valor: '2,8 kg' },
                { label: 'Ideal para', valor: 'Casa / Empresa' },
            ],
            ideal: 'Escolha estratégica para operações digitais onde a fibra ótica não chega ou as redes móveis são instáveis.',
        },
        {
            id: 3,
            nome: 'Starlink High Performance',
            badge: 'Máximo Desempenho',
            icone: <FaRocket />,
            cor: '#7C3AED',
            descricao:
                'Desenvolvida para utilizadores empresariais que não podem permitir falhas na conectividade. Com antenas de maior dimensão e sensibilidade de receção superior, oferece estabilidade sem precedentes em condições extremas.',
            specs: [
                { label: 'Velocidade Download', valor: 'até 500 Mbps' },
                { label: 'Latência', valor: '~20ms' },
                { label: 'Resistência', valor: 'Condições extremas' },
                { label: 'Ideal para', valor: 'Empresarial / Marítimo' },
            ],
            ideal: 'Centros de dados remotos, frotas marítimas comerciais e infraestruturas de emergência.',
        },
    ]

    const vantagens = [
        { icone: <FaTools />, titulo: 'Instalação Profissional', desc: 'Instalação do sistema por equipa técnica certificada e especializada.' },
        { icone: <FaClipboardList />, titulo: 'Configuração Normatizada', desc: 'Configuração conforme as normas para casas e empresas.' },
        { icone: <FaSun />, titulo: 'Integração Solar', desc: 'Opção de integrar com soluções de painéis solares e baterias.' },
        { icone: <FaGlobe />, titulo: 'Cobertura Total', desc: 'Serviço em todo o país sem subcontratações, diretamente pela nossa equipa.' },
        { icone: <FaHeadset />, titulo: 'Suporte 24/7', desc: 'Suporte técnico local sempre disponível para resolver qualquer situação.' },
        { icone: <FaBolt />, titulo: 'Ativação Rápida', desc: 'Ativação e configuração completa no mesmo dia da instalação.' },
    ]

    const passos = [
        { num: '01', titulo: 'Pedido', desc: 'Entre em contacto e descreva a sua localização e necessidades.' },
        { num: '02', titulo: 'Estudo', desc: 'Avaliamos a cobertura e o melhor equipamento para o seu caso.' },
        { num: '03', titulo: 'Instalação', desc: 'A nossa equipa instala e configura o sistema no local.' },
        { num: '04', titulo: 'Ligado!', desc: 'Internet de alta velocidade ativa, em qualquer lugar.' },
    ]

    return (
        <>
            <HeaderItsoft />

            <div className="starlink-page">

                {/* ── HERO ── */}
                <section className="sl-hero">
                    <div className="sl-hero-bg" />
                    <div className="container sl-hero-content" data-aos="fade-up">
                        <div className="sl-hero-badge">
                            <FaSatellite style={{ marginRight: '8px' }} /> Instalador Autorizado Starlink
                        </div>
                        <h1>
                            Internet Rápida em<br />
                            <span className="sl-accent">Qualquer Lugar</span>
                        </h1>
                        <p>
                            Internet rápida e fiável por satélite, na sua casa ou empresa.<br />
                            Conectividade de alta velocidade via <SiSpacex style={{ verticalAlign: 'middle', fontSize: '1.5em' }} />, instalada pela nossa equipa certificada.
                        </p>
                        <div className="sl-hero-actions">
                            <Link
                                to="/booking/starlink"
                                state={{ servico: { titulo: 'Instalação Starlink', descricao: 'Internet por satélite de alta velocidade', detalhes: ['Starlink Mini', 'Starlink Standard', 'Starlink High Performance'] } }}
                                className="sl-btn-primary"
                            >
                                <FaSatelliteDish style={{ marginRight: '8px' }} /> Pedir Instalação
                            </Link>
                            <a href="#sl-produtos" className="sl-btn-outline">Ver Equipamentos</a>
                        </div>
                        <div className="sl-hero-stats">
                            <div className="sl-stat"><strong>500+</strong><span>Mbps máx.</span></div>
                            <div className="sl-stat"><strong>~20ms</strong><span>Latência</span></div>
                            <div className="sl-stat"><strong>24/7</strong><span>Suporte</span></div>
                            <div className="sl-stat"><strong>100%</strong><span>Cobertura país</span></div>
                        </div>
                    </div>
                </section>

                {/* ── SOBRE A STARLINK ── */}
                <section className="sl-sobre section" id="sl-sobre">
                    <div className="container">
                        <div className="sl-sobre-grid">
                            <div className="sl-sobre-text" data-aos="fade-right">
                                <span className="sl-label">O QUE É</span>
                                <h2>Sobre a <span className="sl-accent">Starlink</span></h2>
                                <p>
                                    A Starlink fornece Internet de alta velocidade e baixa latência a utilizadores de todo o mundo.
                                    Sendo a primeira e maior constelação de satélites a utilizar órbita terrestre baixa (LEO), oferece
                                    Internet de banda larga capaz de suportar streaming, jogos online, videochamadas e muito mais.
                                </p>
                                <p>
                                    Projetada e operada pela <strong>SpaceX</strong>, a Starlink liga-se diretamente à rede de satélites
                                    em órbita, garantindo internet rápida e estável onde quer que esteja — mesmo em zonas rurais
                                    e remotas onde a fibra não existe.
                                </p>
                                <div className="sl-sobre-chips">
                                    <span>✅ Banda Larga via Satélite</span>
                                    <span>✅ Latência Baixa LEO</span>
                                    <span>✅ Sem Cabos Terrestres</span>
                                    <span>✅ SpaceX Technology</span>
                                </div>
                            </div>
                            <div className="sl-sobre-visual" data-aos="fade-left">
                                <div className="sl-orbit-container">
                                    <div className="sl-planet"><FaGlobe /></div>
                                    <div className="sl-orbit">
                                        <div className="sl-satellite"><FaSatellite /></div>
                                    </div>
                                    <div className="sl-orbit sl-orbit-2">
                                        <div className="sl-satellite"><FaSatellite /></div>
                                    </div>
                                    <div className="sl-signal-lines">
                                        <div className="sl-signal" />
                                        <div className="sl-signal" />
                                        <div className="sl-signal" />
                                    </div>
                                </div>
                                <div className="sl-coverage-badge">
                                    <FaGlobe style={{ marginBottom: '5px' }} /> Cobertura Global<br />
                                    <small>+5.000 satélites em órbita</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── PRODUTOS ── */}
                <section className="sl-produtos section" id="sl-produtos">
                    <div className="container">
                        <div className="section-title" data-aos="fade-up">
                            <h2 className="black">Equipamentos em <b className="danger">Destaque</b></h2>
                            <p style={{ color: '#444' }}>Escolha o kit Starlink ideal para a sua necessidade</p>
                        </div>
                        <div className="sl-produtos-grid">
                            {produtos.map((p, i) => (
                                <div key={p.id} className="sl-produto-card" data-aos="fade-up" data-aos-delay={i * 150}>
                                    <div className="sl-produto-badge" style={{ background: p.cor }}>{p.badge}</div>
                                    <div className="sl-produto-icone" style={{ color: p.cor }}>{p.icone}</div>
                                    <h3>{p.nome}</h3>
                                    <p className="sl-produto-desc">{p.descricao}</p>
                                    <div className="sl-specs">
                                        {p.specs.map((s, idx) => (
                                            <div key={idx} className="sl-spec-row">
                                                <span className="sl-spec-label">{s.label}</span>
                                                <span className="sl-spec-valor" style={{ color: p.cor }}>{s.valor}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="sl-ideal"><em>💡 {p.ideal}</em></p>
                                    <Link
                                        to="/booking/starlink"
                                        state={{ servico: { titulo: p.nome, descricao: p.descricao, detalhes: p.specs.map(s => `${s.label}: ${s.valor}`) } }}
                                        className="sl-produto-btn"
                                        style={{ background: p.cor }}
                                    >
                                        Solicitar Orçamento
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── VANTAGENS ── */}
                <section className="sl-vantagens section">
                    <div className="container">
                        <div className="section-title" data-aos="fade-up">
                            <h2 className="black">Porquê Escolher a <b className="danger">IT Tech Soft</b></h2>
                            <p style={{ color: '#444' }}>Instalador certificado com equipa técnica local</p>
                        </div>
                        <div className="sl-vantagens-grid">
                            {vantagens.map((v, i) => (
                                <div key={i} className="sl-vantagem-card" data-aos="fade-up" data-aos-delay={i * 100}>
                                    <div className="sl-vantagem-icone">{v.icone}</div>
                                    <h4>{v.titulo}</h4>
                                    <p>{v.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── COMO FUNCIONA ── */}
                <section className="sl-processo section">
                    <div className="container">
                        <div className="section-title" data-aos="fade-up">
                            <h2 className="black">Como <b className="danger">Funciona</b></h2>
                            <p style={{ color: '#444' }}>Processo simples e rápido do pedido à ligação</p>
                        </div>
                        <div className="sl-processo-steps">
                            {passos.map((p, i) => (
                                <div key={i} className="sl-passo" data-aos="fade-up" data-aos-delay={i * 150}>
                                    <div className="sl-passo-num">{p.num}</div>
                                    <h4>{p.titulo}</h4>
                                    <p>{p.desc}</p>
                                    {i < passos.length - 1 && <div className="sl-passo-arrow">→</div>}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── CTA ── */}
                <section className="sl-cta section">
                    <div className="container">
                        <div className="sl-cta-content" data-aos="zoom-in">
                            <div className="sl-cta-icon"><FaSatellite /></div>
                            <h2>Pronto para se Ligar?</h2>
                            <p>Entre em contacto e receba uma proposta personalizada sem compromisso</p>
                            <div className="sl-cta-buttons">
                                <Link
                                    to="/booking/starlink"
                                    state={{ servico: { titulo: 'Instalação Starlink', descricao: 'Internet por satélite de alta velocidade Starlink', detalhes: ['Starlink Mini', 'Starlink Standard', 'Starlink High Performance', 'Suporte e manutenção', 'Integração com energia solar'] } }}
                                    className="sl-btn-primary"
                                >
                                    <FaSatelliteDish style={{ marginRight: '8px' }} /> Pedir Instalação
                                </Link>
                                <a href="tel:+245955066969" className="sl-btn-outline"><FaPhoneAlt style={{ marginRight: '8px' }} /> Ligar Agora</a>
                                <a href="https://wa.me/245955066969" target="_blank" rel="noreferrer" className="sl-btn-whatsapp"><FaWhatsapp style={{ marginRight: '8px' }} /> WhatsApp</a>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

            <ToTopButton />
        </>
    )
}

export default Starlink
