import { useState, useEffect } from 'react'
import HeaderItsoft from '../../components/Header/HeaderItsoft'
import './Shopping.css'
import { FaShop } from 'react-icons/fa6'
import { FaShoppingCart } from 'react-icons/fa'

const Shopping = () => {
    const [produtos, setProdutos] = useState([])
    const [carrinho, setCarrinho] = useState([])
    const [carrinhoAberto, setCarrinhoAberto] = useState(false)

    // Mock de produtos
    useEffect(() => {
        const mockProdutos = [
            {
                id: 1,
                nome: "Website Corporativo",
                descricao: "Site institucional responsivo com até 5 páginas",
                preco: 2999,
                categoria: "Desenvolvimento Web",
                imagem: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
                destaque: true
            },
            {
                id: 2,
                nome: "Loja Virtual E-commerce",
                descricao: "Plataforma completa de e-commerce com painel administrativo",
                preco: 5999,
                categoria: "E-commerce",
                imagem: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
                destaque: true
            },
            {
                id: 3,
                nome: "Sistema de Gestão",
                descricao: "Sistema personalizado para gestão de negócios",
                preco: 8999,
                categoria: "Sistemas",
                imagem: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
                destaque: false
            },
            {
                id: 4,
                nome: "App Mobile iOS/Android",
                descricao: "Aplicativo nativo para iOS e Android",
                preco: 14999,
                categoria: "Mobile",
                imagem: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
                destaque: true
            },
            {
                id: 5,
                nome: "Manutenção Mensal",
                descricao: "Pacote de manutenção e suporte técnico mensal",
                preco: 499,
                categoria: "Suporte",
                imagem: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop",
                destaque: false
            },
            {
                id: 6,
                nome: "Consultoria UX/UI",
                descricao: "Análise e melhorias de experiência do usuário",
                preco: 1999,
                categoria: "Consultoria",
                imagem: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
                destaque: false
            }
        ]
        setProdutos(mockProdutos)
    }, [])

    const adicionarAoCarrinho = (produto) => {
        setCarrinho(prevCarrinho => {
            const itemExistente = prevCarrinho.find(item => item.id === produto.id)
            
            if (itemExistente) {
                return prevCarrinho.map(item =>
                    item.id === produto.id
                        ? { ...item, quantidade: item.quantidade + 1 }
                        : item
                )
            } else {
                return [...prevCarrinho, { ...produto, quantidade: 1 }]
            }
        })
    }

    const removerDoCarrinho = (produtoId) => {
        setCarrinho(prevCarrinho => 
            prevCarrinho.filter(item => item.id !== produtoId)
        )
    }

    const atualizarQuantidade = (produtoId, novaQuantidade) => {
        if (novaQuantidade < 1) {
            removerDoCarrinho(produtoId)
            return
        }

        setCarrinho(prevCarrinho =>
            prevCarrinho.map(item =>
                item.id === produtoId
                    ? { ...item, quantidade: novaQuantidade }
                    : item
            )
        )
    }

    const calcularTotal = () => {
        return carrinho.reduce((total, item) => total + (item.preco * item.quantidade), 0)
    }

    const getTotalItens = () => {
        return carrinho.reduce((total, item) => total + item.quantidade, 0)
    }

    return (
        <>
            <HeaderItsoft />
             <div className="shopping-actions">
                            <button 
                                className="btn-carrinho"
                                onClick={() => setCarrinhoAberto(true)}
                            >
                                <FaShoppingCart size={24} color='gold'/> <br/><span>{getTotalItens()}</span>
                            </button>
                        </div>
            <div className="shopping-page">
                <div className="container">
                    {/* Header da Loja */}
                    <div className="shopping-header">
                        <h1>Nossa Loja de Serviços</h1>
                        <p>Encontre a solução perfeita para o seu negócio</p>
                        
                       
                    </div>

                    {/* Filtros */}
                    <div className="filtros">
                        <button className="filtro-btn active">Todos</button>
                        <button className="filtro-btn">Desenvolvimento Web</button>
                        <button className="filtro-btn">E-commerce</button>
                        <button className="filtro-btn">Mobile</button>
                        <button className="filtro-btn">Consultoria</button>
                    </div>

                    {/* Grid de Produtos */}
                    <div className="produtos-grid">
                        {produtos.map(produto => (
                            <div key={produto.id} className={`produto-card ${produto.destaque ? 'destaque' : ''}`}>
                                {produto.destaque && <span className="badge-destaque">Mais Vendido</span>}
                                <div className="produto-imagem">
                                    <img src={produto.imagem} alt={produto.nome} />
                                </div>
                                <div className="produto-info">
                                    <span className="produto-categoria">{produto.categoria}</span>
                                    <h3>{produto.nome}</h3>
                                    <p>{produto.descricao}</p>
                                    <div className="produto-preco">
                                        XOF {produto.preco.toLocaleString('pt-PT')}
                                    </div>
                                    <button 
                                        className="btn-adicionar"
                                        onClick={() => adicionarAoCarrinho(produto)}
                                    >
                                        Adicionar ao Carrinho
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Carrinho Sidebar */}
                <div className={`carrinho-sidebar ${carrinhoAberto ? 'aberto' : ''}`}>
                    <div className="carrinho-header">
                        <h2>Seu Carrinho</h2>
                        <button 
                            className="btn-fechar"
                            onClick={() => setCarrinhoAberto(false)}
                        >
                            ×
                        </button>
                    </div>

                    <div className="carrinho-content">
                        {carrinho.length === 0 ? (
                            <div className="carrinho-vazio">
                                <p>Seu carrinho está vazio</p>
                                <span>Adicione alguns serviços incríveis!</span>
                            </div>
                        ) : (
                            <>
                                <div className="carrinho-itens">
                                    {carrinho.map(item => (
                                        <div key={item.id} className="carrinho-item">
                                            <div className="item-info">
                                                <h4>{item.nome}</h4>
                                                <span className="item-preco">
                                                    XOF {item.preco.toLocaleString('pt-PT')}
                                                </span>
                                            </div>
                                            <div className="item-controles">
                                                <div className="quantidade-controles">
                                                    <button 
                                                        onClick={() => atualizarQuantidade(item.id, item.quantidade - 1)}
                                                    >
                                                        -
                                                    </button>
                                                    <span className='black'>{item.quantidade}</span>
                                                    <button 
                                                        onClick={() => atualizarQuantidade(item.id, item.quantidade + 1)}
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                                <button 
                                                    className="btn-remover"
                                                    onClick={() => removerDoCarrinho(item.id)}
                                                >
                                                    Remover
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="carrinho-total">
                                    <div className="total-line">
                                        <span>Subtotal:</span>
                                        <span>XOF {calcularTotal().toLocaleString('pt-PT')}</span>
                                    </div>
                                    <div className="total-line">
                                        <span>Desconto:</span>
                                        <span>XOF 0,00</span>
                                    </div>
                                    <div className="total-line final">
                                        <span>Total:</span>
                                        <span>XOF {calcularTotal().toLocaleString('pt-PT')}</span>
                                    </div>
                                </div>

                                <button className="btn-finalizar">
                                    Finalizar Compra
                                </button>
                            </>
                        )}
                    </div>
                </div>

                {/* Overlay do carrinho */}
                {carrinhoAberto && (
                    <div 
                        className="carrinho-overlay"
                        onClick={() => setCarrinhoAberto(false)}
                    ></div>
                )}
            </div>
        </>
    )
}

export default Shopping