# Hability Consult - Website

Site moderno e responsivo para a Hability Consult, desenvolvido com Next.js, Tailwind CSS e Framer Motion.

## Tecnologias

- **Next.js 15** - Framework React para produção
- **React 19** - Biblioteca UI
- **Tailwind CSS** - Framework CSS utilitário
- **Framer Motion** - Animações e transições
- **TypeScript** - Type safety
- **Lucide Icons** - Ícones vetoriais

## Instalação

```bash
# Instalar dependências
npm install

# Executar modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar servidor de produção
npm start
```

O site estará disponível em `http://localhost:3000`

## Estrutura do Projeto

```
habilityconsult/
├── app/
│   ├── layout.tsx          # Layout raiz
│   ├── page.tsx           # Página home
│   └── globals.css        # Estilos globais
├── components/
│   ├── NavigationBar.tsx   # Barra de navegação
│   ├── HeroSection.tsx     # Seção hero
│   ├── BenefitsSection.tsx # Seção de benefícios
│   ├── ServicesSection.tsx # Seção de serviços
│   ├── CompaniesSection.tsx# Seção de empresas
│   ├── IndustriesSection.tsx# Seção de indústrias
│   ├── TestimonialsSection.tsx# Testemunhos
│   ├── ProcessSection.tsx  # Seção de processo
│   ├── CTASection.tsx      # Call-to-action
│   └── Footer.tsx          # Rodapé
├── next.config.js         # Configuração Next.js
├── tailwind.config.js     # Configuração Tailwind
├── tsconfig.json          # Configuração TypeScript
└── package.json           # Dependências do projeto
```

## Design System

### Cores
- **Orange**: #F15A29, #F37C4A, #F6986C, #FABE9E, #FDE0D0, #FEF2EC
- **Grey**: #111111, #1E1E1E, #363636, #4A4A4A, #6E6E6E, #A0A0A0, #C8C8C8, #E8E8E8, #F5F5F5
- **Red**: #4A0F0B, #7A1812, #AA221A, #EF4136, #F58480

### Tipografia
- **Overused Grotesk** - Headlines e textos principais
- **PP Neue Montreal** - Headings especiais
- **Linear Grotesk** - Textos alternativos

## Animações

O projeto utiliza Framer Motion para animações suaves:
- Fade-in ao carregar seções
- Hover effects em botões e cards
- Stagger animations em listas
- Scroll-triggered animations
- Transitions suaves entre estados

## Responsividade

O site é totalmente responsivo para:
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)

## Customização

### Cores
Editar em `tailwind.config.js`:
```js
colors: {
  'orange': { ... },
  'grey': { ... },
  'red': { ... }
}
```

### Fonts
Adicionar Google Fonts em `app/globals.css`

### Conteúdo
Editar componentes em `components/`

## Build e Deploy

```bash
# Build para produção
npm run build

# Testar build localmente
npm start
```

O projeto está pronto para deploy em:
- Vercel (recomendado)
- Netlify
- AWS
- Google Cloud

## Performance

- ✅ Otimizado para Core Web Vitals
- ✅ Lazy loading de imagens
- ✅ Code splitting automático
- ✅ Optimized CSS
- ✅ Server-side rendering

## SEO

- ✅ Meta tags automáticas
- ✅ Open Graph configurado
- ✅ Sitemap dinâmico
- ✅ robots.txt

## Licença

© 2026 Hability Consult. Todos os direitos reservados.
