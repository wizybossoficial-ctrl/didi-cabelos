# Didi Cabelos - Website Oficial 💛 ✨

Website moderno, responsivo e de alto padrão desenvolvido especialmente para o salão e boutique **Didi Cabelos** em Imperatriz - MA.

---

## 🌟 Destaques & Funcionalidades

1. **Branding & Identidade Visual de Luxo:**
   - Paleta de cores sofisticada inspirada na identidade oficial da marca: tons quentes de ouro ambarino (`#E5A010`, `#F7B928`), preto ônix profundo (`#0C0B0A`), superfícies aveludadas e detalhes em creme suave (`#FAF6F0`).
   - Tipografia refinada combinando **Playfair Display** (títulos editoriais elegantes) e **Plus Jakarta Sans** (legibilidade e modernidade para corpo de texto e UI).
   - Efeitos modernos de glassmorphism, orbes de iluminação sutil e sombras douradas.

2. **Integração Completa dos Ativos:**
   - Uso estratégico de todas as fotos reais do salão localizadas em `images/`:
     - Logo oficial da marca no cabeçalho fixo, gaveta mobile e rodapé.
     - Clientes com tranças nagô e cacheados na seção Hero e Sobre.
     - Catálogo de produtos e serviços: Cabelo Orgânico Sleek Milanda, Bundles Goivo Iluminado, Rabo de Cavalo Bio Fibra 80cm, Soft Dread Locks 5X, Pomada Michelle Tobias e Fibras para Nagô.
     - Depoimentos reais de clientes recebidos via WhatsApp.
     - Referência visual do novo endereço na Rua Piauí.

3. **Seções do Website:**
   - **Barra de Anúncios no Topo:** Destaque de especialidades e link de contato direto.
   - **Header Fixo / Sticky Navigation:** Navegação fluida com efeito translúcido ao rolar a página, menu responsivo off-canvas (drawer) para mobile e botão CTA "Agende Já".
   - **Hero Section de Alto Impacto:** Headline envolvente (*"Transforme seu visual e revele sua verdadeira beleza"*), selo de salão afro #1, métricas comprovadas (+5.000 clientes) e card de destaque com efeito flutuante.
   - **Trust Bar:** 4 pilares de excelência (Trancistas especializadas, Fibras à pronta entrega, Tratamento & Hidratação, Localização privilegiada).
   - **Showcase de Especialidades & Boutique:** Grade interativa com filtros dinâmicos (*Todos, Tranças & Nagô, Cabelos Orgânicos, Dreadlocks, Produtos & Fibras*) e botão direto de agendamento em cada card.
   - **Sobre Nós (A História de Didi):** Espaço dedicado à ancestralidade, técnica suave e missão de elevar a autoestima feminina.
   - **Checklist Exclusivo de Cuidados com as Box Braids:** Dicas práticas e interativas (touca de cetim, lavagem correta, etc.).
   - **Galeria com Lightbox Interativo:** Visualizador em tela cheia com navegação por setas (teclado e touch).
   - **Depoimentos & Prova Social:** Avaliações reais de clientes e classificação 5 estrelas.
   - **Agendamento Inteligente com WhatsApp:** Formulário com seleção de serviço, comprimento, data e período, que gera a mensagem pré-formatada em tempo real e abre o WhatsApp oficial `(99) 98156-2202`.
   - **Localização, Horários & Mapa:** Indicador em tempo real de status operacional (*Aberto Agora / Fechado*), tabela de horários e mapa interativo do Google Maps.
   - **Botão Flutuante do WhatsApp:** Com efeito pulsante e balão de convite.

---

## 🚀 Como Executar Localmente

### Opção 1: Servidor Node.js Embutido
```bash
npm start
# ou
node server.js
```
Acesse no seu navegador: `http://localhost:3000`

### Opção 2: Abrir Diretamente no Navegador
Você também pode clicar duas vezes diretamente no arquivo `index.html`.

---

## 📁 Estrutura de Pastas

```
didi cabelos/
│
├── index.html          # Estrutura semântica e acessível (HTML5 + Schema.org)
├── server.js           # Servidor local estático rápido em Node.js
├── package.json        # Configuração de scripts
├── README.md           # Documentação completa do projeto
│
├── css/
│   └── style.css       # Design System completo (variáveis CSS, responsividade, animações)
│
├── js/
│   └── main.js         # Lógica interativa (menu mobile, filtros, lightbox, agendador WhatsApp, relógio)
│
└── images/             # Fotos originais e logotipo da marca
    ├── logo/           # Logotipo oficial Didi Cabelos
    └── ...             # Fotos de serviços, fibras, clientes e depoimentos
```
