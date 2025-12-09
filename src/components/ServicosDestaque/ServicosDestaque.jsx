import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ServicosDestaque.css';

const ServicosDestaque = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const navigate = useNavigate();

    const servicosDestaque = [
        {
            titulo: "Produção de Camisolas",
            descricao: "Camisolas personalizadas de alta qualidade para empresas e eventos",
            icone: "👕",
            cor: "#E53935",
            destaque: true
        },
        {
            titulo: "Instalação de Starlink",
            descricao: "Internet via satélite de alta velocidade para áreas remotas",
            icone: "🛰️",
            cor: "#1565C0",
            destaque: true
        },
        {
            titulo: "Soluções em Cloud",
            descricao: "Migração e gestão completa de infraestrutura na nuvem",
            icone: "☁️",
            cor: "#2E7D32",
            destaque: true
        },
        {
            titulo: "Desenvolvimento Mobile",
            descricao: "Aplicativos nativos e híbridos para iOS e Android",
            icone: "📱",
            cor: "#6A1B9A",
            destaque: true
        }
    ];

    // Auto-play slider
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % servicosDestaque.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, servicosDestaque.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % servicosDestaque.length);
        setIsAutoPlaying(false);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + servicosDestaque.length) % servicosDestaque.length);
        setIsAutoPlaying(false);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
        setIsAutoPlaying(false);
    };

    return (
        <section className="servicos-destaque-slider" data-aos="fade-up">
            <div className="container">
                <div className="slider-header">
                    <h2>Serviços em <span className="danger">Destaque</span></h2>
                    <p>Nossos principais serviços especializados</p>
                </div>

                <div className="slider-wrapper">
                    {/* Navigation Arrows */}
                    <button className="slider-nav prev" onClick={prevSlide} aria-label="Anterior">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button className="slider-nav next" onClick={nextSlide} aria-label="Próximo">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Slides Container */}
                    <div className="slides-container" >
                        {servicosDestaque.map((servico, index) => (
                            <div
                                key={index}
                                className={`slide ${index === currentSlide ? 'active' : ''} ${index === (currentSlide - 1 + servicosDestaque.length) % servicosDestaque.length ? 'prev' : ''
                                    } ${index === (currentSlide + 1) % servicosDestaque.length ? 'next' : ''}`}
                            >
                                <div className="slide-content">
                                    <div className="slide-badge">Destaque</div>
                                    <div
                                        className="slide-icone"
                                        style={{ background: `linear-gradient(135deg, ${servico.cor}, ${servico.cor}dd)` }}
                                    >
                                        <span>{servico.icone}</span>
                                    </div>
                                    <div className="slide-info">
                                        <h3>{servico.titulo}</h3>
                                        <p>{servico.descricao}</p>
                                        <button
                                            className="btn-solicitar "
                                            onClick={() => navigate('/booking')}
                                        >
                                            Solicitar Orçamento
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Dots Navigation */}
                    <div className="slider-dots">
                        {servicosDestaque.map((_, index) => (
                            <button
                                key={index}
                                className={`dot ${index === currentSlide ? 'active' : ''}`}
                                onClick={() => goToSlide(index)}
                                aria-label={`Ir para slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicosDestaque;
