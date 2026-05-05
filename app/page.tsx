'use client'

import { motion } from 'framer-motion'
import { ChevronDown, ChevronUp, ChevronRight, ChevronLeft, User } from 'lucide-react'
import { useState } from 'react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

// All Figma Assets
const ASSETS = {
  logo: 'https://www.figma.com/api/mcp/asset/783c26dc-dd5d-4090-9cfd-e56b60c0e9eb',
  frame141: 'https://www.figma.com/api/mcp/asset/480288f0-ac3c-4b7f-8e3e-307dcda47f16',
  ellipse10: 'https://www.figma.com/api/mcp/asset/11d66592-923d-4e6e-b822-a86bec626d10',
  whisk: 'https://www.figma.com/api/mcp/asset/823e5298-20a4-46ba-af3f-235d7eb1b695',
  frame142: 'https://www.figma.com/api/mcp/asset/d631678e-f20a-4461-97fa-e65da40785ce',
  frame143: 'https://www.figma.com/api/mcp/asset/9943c623-887f-4fe3-b9a3-b3501a6acfdf',
  frame: 'https://www.figma.com/api/mcp/asset/95126218-7771-4b6d-a1af-3fba3a50ef39',
  frameSeparator: 'https://www.figma.com/api/mcp/asset/ac690a60-6c6c-423b-ada8-fdc129e2b622',
  chevronDown: 'https://www.figma.com/api/mcp/asset/5c9fc620-ed5c-4fb3-b793-8fdf20555e10',
  chevronDown1: 'https://www.figma.com/api/mcp/asset/5e9802cd-9ac0-41d8-9546-123618eb3dc8',
  chevronDown2: 'https://www.figma.com/api/mcp/asset/2563b303-9ad5-4742-8f85-af8b98ec8498',
  frame148: 'https://www.figma.com/api/mcp/asset/b8082769-f3b8-4e7a-95fa-37346590ca24',
  frame149: 'https://www.figma.com/api/mcp/asset/c7f94eb5-f318-4c83-9f2c-5b12eb38832d',
  frame150: 'https://www.figma.com/api/mcp/asset/b95b1012-9a03-463e-869d-2a8be4bc5726',
  frame151: 'https://www.figma.com/api/mcp/asset/e21eccec-6b97-4e6e-a7e7-a4ee966c49d0',
  frame8: 'https://www.figma.com/api/mcp/asset/00a0fdbd-6f2c-4725-8cda-f6d729948544',
  frame9: 'https://www.figma.com/api/mcp/asset/e657a955-0c8d-4b37-95a7-67e74b3db1eb',
  diferencialIcon1: 'https://www.figma.com/api/mcp/asset/08337a26-bb63-4ada-9e52-aa9ee36648ed',
  diferencialIcon2: 'https://www.figma.com/api/mcp/asset/9603684a-50ae-4cbd-95a7-ae93f4a39b8c',
  diferencialIcon3: 'https://www.figma.com/api/mcp/asset/af87ef60-274d-46ec-8ecf-e2a869f52a6b',
  serviceCardBg1: '/Consultoria-ERP-foto.png',
  serviceCardBg2: '/BPO Completo-foto.png',
  serviceCardBg3: '/Hability Labs-foto.png',
  industriesIcon1: '/industrial-icon.svg',
  industriesIcon2: '/distribuicao-icon.svg',
  industriesIcon3: '/servicos-icon.svg',
  testimonialVector: 'https://www.figma.com/api/mcp/asset/36f3ca0b-dd39-47ee-97c9-62eb1e4fd244',
  testimonialQuoteStart: '/aspas-icon.svg',
  testimonialQuoteEnd: '/aspas-2-icon.svg',
  testimonialDecor: '/circle-infinite-hability.svg',
  processVector: 'https://www.figma.com/api/mcp/asset/bc8d7c74-410c-4ebb-9b84-e2c22e6482e5',
  resultsSeparator: 'https://www.figma.com/api/mcp/asset/534f9b7d-7af2-45dc-a75a-f387cd563b40',
  resultsCheckmark: '/check-check.svg',
  ctaImage: 'https://www.figma.com/api/mcp/asset/fcae2887-1122-4e35-9197-80ddd7c59dbf',
  footerLogo: 'https://www.figma.com/api/mcp/asset/d50d35c0-0134-4bcb-89a5-f71b2b7e7383',
  footerArrowUp: 'https://www.figma.com/api/mcp/asset/fe47f790-ecb6-4d96-87df-b4aa51a83efe',
  footerSeparatorV: 'https://www.figma.com/api/mcp/asset/2d7d6805-d99e-434b-8e02-325dad9e18b4',
  footerSeparatorH: 'https://www.figma.com/api/mcp/asset/e4b62939-714f-41ed-b9d6-5e918e9baf5c',
  footerDesenvolvidoPor: 'https://www.figma.com/api/mcp/asset/03976c88-cf62-4268-be7e-d2487247037f',
  footerDevz: '/logo-devz.svg',
  servicesEllipse: 'https://www.figma.com/api/mcp/asset/23c21ef0-2c42-4648-a457-d40334ea861a',
  servicesLineShort: 'https://www.figma.com/api/mcp/asset/f9dbf94c-5808-4ca7-a78a-ce29b999c950',
  servicesIcon1: '/dashboard.svg',
  servicesLineLong: 'https://www.figma.com/api/mcp/asset/d2f10918-94ce-4689-ac51-eb58cd53a801',
  servicesIcon2: '/calendar.svg',
  servicesIcon3: '/timer-30.svg',
}

export default function Home() {
  const [testimonialIdx, setTestimonialIdx] = useState(0)
  const [expandedProcess, setExpandedProcess] = useState(0)
  const [hoveredCard, setHoveredCard] = useState<number | null>(0)

  const testimonials = [
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      author: 'Bruno Bragaia',
      role: 'Diretor de Operações • Indústria'
    },
    {
      text: 'Aliquam erat volutpat. Sed do eiusmod tempor incididunt ut labore.',
      author: 'Maria Silva',
      role: 'CFO • Distribuição'
    }
  ]

  const processSteps = [
    {
      title: 'Triagem (30 min)',
      desc: 'Entendemos objetivo, criticidade, módulos ou rotinas afetados e prazos. Você sai com um próximo passo claro.',
      icon: '/clock-fading.svg'
    },
    {
      title: 'Diagnóstico',
      desc: 'Análise profunda das dores atuais e mapeamento de oportunidades.',
      icon: '/microscope.svg'
    },
    {
      title: 'Plano Priorizado',
      desc: 'Roadmap claro com prioridades, impacto e prazos.',
      icon: '/diamond-plus.svg'
    },
    {
      title: 'Execução com rastreabilidade',
      desc: 'Implementação com governança total e entrega de valor incremental.',
      icon: '/circle-check.svg'
    }
  ]

  return (
    <div className="bg-white w-full">
      {/* NAVIGATION BAR - FIXED */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="max-w-7xl mx-auto">
          <NavBar />
        </div>
      </motion.div>

      {/* HERO SECTION */}
      <section
        className="relative min-h-screen w-full flex justify-center items-center pt-40 pb-20 overflow-hidden"
        style={{
          backgroundImage: 'url(/background-hero-consult.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-[1280px] mx-auto px-5 z-10 w-full flex items-center"
        >
          <div className="flex flex-col gap-14 w-full max-w-2xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-1.5 bg-white rounded-full px-4 py-1 w-fit"
            >
              <img alt="" src="/astherisc-icon.svg" className="w-6 h-6" />
              <span className="text-xs font-grotesk font-medium text-grey-800 uppercase tracking-[1.32px]">
                ERP SANKHYA • BPO CONTÁBIL • HABILITY LABS
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight font-grotesk w-full max-w-2xl">
                ERP travado. Fechamento atrasado. O problema tem nome{' '}
                <span style={{ color: '#fabe9e' }} className="font-bold">
                  — e tem solução.
                </span>
              </h1>

              {/* Description */}
              <p className="text-base lg:text-lg text-white leading-relaxed max-w-2xl font-grotesk font-light">
                ERP e contabilidade desalinhados geram retrabalho, fechamentos caóticos e decisões cegas. A Hability resolve nas duas frentes: Consultoria ERP Sankhya (compras, vendas, financeiro, produção, WMS e integrações) e BPO Contábil completo — com processo, governança e rastreabilidade.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-3 w-fit"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white font-grotesk font-light text-sm px-3 py-3 rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2.5"
              >
                Ver Consultoria ERP
                <div className="bg-white rounded w-5 h-5 flex items-center justify-center flex-shrink-0">
                  <img alt="" src="/chevron-down-black.svg" className="w-4 h-4" />
                </div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ backgroundColor: '#f37c4a' }}
                className="text-white font-grotesk font-light text-sm px-3 py-3 rounded-lg flex items-center gap-2.5"
              >
                Ver BPO Contábil
                <div className="bg-white rounded w-5 h-5 flex items-center justify-center flex-shrink-0">
                  <img alt="" src="/chevron-down-black.svg" className="w-4 h-4" />
                </div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ backgroundColor: '#fabe9e' }}
                className="text-grey-600 font-grotesk font-light text-sm px-3 py-3 rounded-lg flex items-center gap-2.5"
              >
                Ver Hability Labs
                <div style={{ backgroundColor: '#f15a29' }} className="rounded w-5 h-5 flex items-center justify-center flex-shrink-0">
                  <img alt="" src="/chevron-down-white.svg" className="w-4 h-4" />
                </div>
              </motion.button>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center gap-3 pt-4"
            >
              <div className="flex items-center pr-4">
                <img
                  alt=""
                  src={ASSETS.frame148}
                  className="w-11 h-11 rounded-full border-2 border-white"
                />
                <img
                  alt=""
                  src={ASSETS.frame149}
                  className="w-11 h-11 rounded-full border-2 border-white -ml-4"
                />
                <img
                  alt=""
                  src={ASSETS.frame150}
                  className="w-11 h-11 rounded-full border-2 border-white -ml-4"
                />
                <img
                  alt=""
                  src={ASSETS.frame151}
                  className="w-11 h-11 rounded-full border-2 border-white -ml-4"
                />
              </div>
              <div>
                <p className="font-bold text-white text-sm font-grotesk">+ de 100 clientes</p>
                <p className="text-white text-xs font-grotesk font-light">atendidos em todo Brasil</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* SERVICES HIGHLIGHT SECTION */}
      <section className="w-full flex justify-center pt-[80px] pb-[40px] px-[20px] bg-white">
        <div className="max-w-[1240px] w-full bg-white rounded-[28px] p-[40px] lg:p-[64px] shadow-lg">
          <div className="flex flex-col gap-[20px] items-center w-full">
            {/* Icons and Lines */}
            <div className="flex items-center justify-center w-full gap-[20px] lg:gap-0">
              <img src={ASSETS.servicesEllipse} alt="" className="w-[14px] h-[14px]" />

              <svg width="160" height="6" viewBox="0 0 160 6" className="w-[160px]">
                <line x1="0" y1="3" x2="160" y2="3" stroke="#F15A29" strokeWidth="1" strokeDasharray="8,4" className="animated-line" />
                <animateMotion dur="2s" repeatCount="indefinite">
                  <circle cx="0" cy="3" r="2" className="energy-dot" />
                  <mpath href="#path" />
                </animateMotion>
                <path id="path" d="M 0 3 L 160 3" style={{ display: 'none' }} />
              </svg>

              <div className="relative w-[86px] h-[87px] flex-shrink-0">
                <div className="absolute border border-[#fabe9e] rounded-full opacity-30 w-[86px] h-[87px] top-0 left-0" />
                <div className="absolute w-[56px] h-[56px] rounded-full shadow-[0px_11px_21.2px_-5px_rgba(241,90,41,0.2)] top-[16px] left-[15px] flex items-center justify-center icon-circle-pulse-1">
                  <img src={ASSETS.servicesIcon1} alt="" className="w-[24px] h-[24px]" />
                </div>
              </div>

              <svg width="240" height="6" viewBox="0 0 240 6" className="w-[240px]">
                <line x1="0" y1="3" x2="240" y2="3" stroke="#F15A29" strokeWidth="1" strokeDasharray="8,4" className="animated-line" />
                <animateMotion dur="2s" repeatCount="indefinite">
                  <circle cx="0" cy="3" r="2" className="energy-dot" />
                  <mpath href="#path-long" />
                </animateMotion>
                <path id="path-long" d="M 0 3 L 240 3" style={{ display: 'none' }} />
              </svg>

              <div className="relative w-[86px] h-[87px] flex-shrink-0">
                <div className="absolute border border-[#fabe9e] rounded-full opacity-30 w-[86px] h-[87px] top-0 left-0" />
                <div className="absolute w-[56px] h-[56px] rounded-full shadow-[0px_11px_21.2px_-5px_rgba(241,90,41,0.2)] top-[16px] left-[15px] flex items-center justify-center icon-circle-pulse-2">
                  <img src={ASSETS.servicesIcon2} alt="" className="w-[24px] h-[24px]" />
                </div>
              </div>

              <svg width="240" height="6" viewBox="0 0 240 6" className="w-[240px]">
                <line x1="0" y1="3" x2="240" y2="3" stroke="#F15A29" strokeWidth="1" strokeDasharray="8,4" className="animated-line" />
                <animateMotion dur="2s" repeatCount="indefinite">
                  <circle cx="0" cy="3" r="2" className="energy-dot" />
                  <mpath href="#path-long" />
                </animateMotion>
                <path id="path-long" d="M 0 3 L 240 3" style={{ display: 'none' }} />
              </svg>

              <div className="relative w-[86px] h-[87px] flex-shrink-0">
                <div className="absolute border border-[#fabe9e] rounded-full opacity-30 w-[86px] h-[87px] top-0 left-0" />
                <div className="absolute w-[56px] h-[56px] rounded-full shadow-[0px_11px_21.2px_-5px_rgba(241,90,41,0.2)] top-[16px] left-[15px] flex items-center justify-center icon-circle-pulse-3">
                  <img src={ASSETS.servicesIcon3} alt="" className="w-[24px] h-[24px]" />
                </div>
              </div>

              <svg width="160" height="6" viewBox="0 0 160 6" className="w-[160px]">
                <line x1="0" y1="3" x2="160" y2="3" stroke="#F15A29" strokeWidth="1" strokeDasharray="8,4" className="animated-line" />
                <animateMotion dur="2s" repeatCount="indefinite">
                  <circle cx="0" cy="3" r="2" className="energy-dot" />
                  <mpath href="#path" />
                </animateMotion>
                <path id="path" d="M 0 3 L 160 3" style={{ display: 'none' }} />
              </svg>

              <img src={ASSETS.servicesEllipse} alt="" className="w-[14px] h-[14px]" />
            </div>

            {/* Text Content */}
            <div className="flex flex-col lg:flex-row gap-[80px] items-center justify-center w-full pt-[20px]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col gap-[20px] items-center text-center max-w-[233px]"
              >
                <h3 className="font-grotesk font-bold text-[16px] leading-[1.5] text-orange-500">
                  ERP estável em todos os módulos
                </h3>
                <p className="font-grotesk font-medium text-[16px] leading-[1.43] text-grey-900">
                  Sustentação, melhorias e projetos em compras, vendas, financeiro, produção e WMS.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col gap-[20px] items-center text-center max-w-[233px]"
              >
                <h3 className="font-grotesk font-bold text-[16px] leading-[1.5] text-orange-500">
                  Fechamento que não atrasa
                </h3>
                <p className="font-grotesk font-medium text-[16px] leading-[1.43] text-grey-900">
                  BPO contábil + fiscal + trabalhista com calendário, trilha de auditoria e evidências.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col gap-[20px] items-center text-center max-w-[233px]"
              >
                <h3 className="font-grotesk font-bold text-[16px] leading-[1.5] text-orange-500">
                  Próximo passo em 30 min
                </h3>
                <p className="font-grotesk font-medium text-[16px] leading-[1.43] text-grey-900">
                  Triagem objetiva → diagnóstico → backlog priorizado. Sem enrolação, sem pitch de vendas.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

{/* SERVICES SECTION */}
      <section className="bg-white w-full flex justify-center">
        <div className="flex flex-col gap-[40px] items-start justify-center pb-[40px] pt-[80px] px-[20px] w-full max-w-[1280px]">
          {/* Header */}
          <div className="flex flex-col items-center w-full gap-[20px]">
            <div className="flex flex-col gap-[20px] items-center w-full max-w-[852px] mx-auto text-center">
              <div>
                <p className="font-grotesk font-medium leading-[1.1] text-[48px] text-grey-900">
                  Três frentes. Um parceiro.
                </p>
                <p className="font-grotesk font-bold leading-[1.1] text-[48px] text-orange-500">
                  Operação que funciona de verdade.
                </p>
              </div>
              <p className="font-grotesk font-medium leading-[1.5] text-[16px] text-grey-500">
                A Hability atua onde a maioria da consultoria não chega:{' '}
                <span className="font-bold">
                  na interseção entre ERP, contabilidade e Hability Labs — onde o retrabalho mora.
                </span>
              </p>
            </div>
          </div>

          {/* Cards Container */}
          <div className="flex gap-[12px] items-start w-full">
            {/* Card 1 - BPO Contábil */}
            <div
              className="border border-[rgba(241,90,41,0.3)] border-solid flex flex-1 flex-col items-end justify-between p-[6px] rounded-[16px] h-[600px] cursor-pointer"
              onMouseEnter={() => setHoveredCard(0)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex flex-1 flex-col items-start justify-between p-[40px] rounded-[12px] w-full relative">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
                  <div className="absolute bg-gradient-to-b from-[#f15a29] to-[#dd3f01] inset-0 rounded-[12px]" />
                  <div className="absolute inset-0 overflow-hidden rounded-[12px]">
                    <img alt="" className="absolute inset-0 w-full h-full object-cover object-top" src={ASSETS.serviceCardBg2} />
                  </div>
                  <div className="absolute bg-gradient-to-b from-transparent to-black/60 inset-0 rounded-[12px]" />
                </div>

                {/* Number Circle */}
                <div className="relative w-[64px] h-[64px] z-10 flex items-center justify-center bg-white rounded-full">
                  <p className="font-grotesk font-medium text-orange-500 text-[28px] text-center whitespace-nowrap">
                    01
                  </p>
                </div>

                {/* Content */}
                <motion.div
                  className="flex flex-col gap-[28px] items-start w-full relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={hoveredCard === 0 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-col gap-[20px] items-start w-full">
                    <p className="font-grotesk font-medium leading-[1.5] text-[24px] text-center text-white whitespace-nowrap">
                      BPO Contábil Completo
                    </p>
                    <p className="font-grotesk leading-[1.424] text-[14px] text-white w-full">
                      Além de cumprir as obrigações do fisco, usamos a contabilidade como ferramenta de gestão: fechamento previsível, indicadores confiáveis e base sólida para decisão. Funciona em qualquer ERP.
                    </p>
                  </div>
                  <div className="flex gap-[12px] items-start">
                    <button className="bg-orange-500 border border-orange-300 border-solid flex gap-[12px] items-center justify-center px-[20px] py-[12px] rounded-[8px]">
                      <p className="font-grotesk font-medium leading-[1.5] text-[14px] text-center text-white whitespace-nowrap">
                        Ver mais
                      </p>
                      <img src="/chevron-down-white.svg" alt="" className="w-[16px] h-[16px] -rotate-90" />
                    </button>
                    <button className="border border-white border-solid flex gap-[12px] items-center justify-center px-[20px] py-[12px] rounded-[8px]">
                      <p className="font-grotesk font-medium leading-[1.5] text-[14px] text-center text-white whitespace-nowrap">
                        Solicitar diagnóstico
                      </p>
                      <img src="/chevron-down-white.svg" alt="" className="w-[16px] h-[16px] -rotate-90" />
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Card 2 - Consultoria ERP Sankhya */}
            <div
              className="border border-[rgba(241,90,41,0.3)] border-solid flex flex-1 flex-col items-end justify-between p-[6px] rounded-[16px] h-[600px] cursor-pointer"
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex flex-1 flex-col items-start justify-between p-[40px] rounded-[12px] w-full relative">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
                  <div className="absolute bg-gradient-to-b from-[#f15a29] to-[#dd3f01] inset-0 rounded-[12px]" />
                  <div className="absolute inset-0 overflow-hidden rounded-[12px]">
                    <img alt="" className="absolute inset-0 w-full h-full object-cover object-top" src={ASSETS.serviceCardBg1} />
                  </div>
                  <div className="absolute bg-gradient-to-b from-transparent to-black/60 inset-0 rounded-[12px]" />
                </div>

                {/* Number Circle */}
                <div className="relative w-[64px] h-[64px] z-10 flex items-center justify-center bg-white rounded-full">
                  <p className="font-grotesk font-medium text-orange-500 text-[28px] text-center whitespace-nowrap">
                    02
                  </p>
                </div>

                {/* Content */}
                <motion.div
                  className="flex flex-col gap-[28px] items-start w-full relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={hoveredCard === 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-col gap-[20px] items-start w-full">
                    <p className="font-grotesk font-medium leading-[1.5] text-[24px] text-center text-white whitespace-nowrap">
                      Consultoria ERP Sankhya
                    </p>
                    <p className="font-grotesk leading-[1.424] text-[14px] text-white w-full">
                      Diagnóstico técnico real, mapeamento de gargalos e entrega de estabilidade com governança — em compras, vendas, financeiro, produção, WMS e integrações.
                    </p>
                  </div>
                  <div className="flex gap-[12px] items-start">
                    <button className="bg-orange-500 border border-orange-300 border-solid flex gap-[12px] items-center justify-center px-[20px] py-[12px] rounded-[8px]">
                      <p className="font-grotesk font-medium leading-[1.5] text-[14px] text-center text-white whitespace-nowrap">
                        Ver mais
                      </p>
                      <img src="/chevron-down-white.svg" alt="" className="w-[16px] h-[16px] -rotate-90" />
                    </button>
                    <button className="border border-white border-solid flex gap-[12px] items-center justify-center px-[20px] py-[12px] rounded-[8px]">
                      <p className="font-grotesk font-medium leading-[1.5] text-[14px] text-center text-white whitespace-nowrap">
                        Solicitar diagnóstico
                      </p>
                      <img src="/chevron-down-white.svg" alt="" className="w-[16px] h-[16px] -rotate-90" />
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Card 3 - Hability Labs */}
            <div
              className="border border-[rgba(241,90,41,0.3)] border-solid flex flex-1 flex-col items-end justify-between p-[6px] rounded-[16px] h-[600px] cursor-pointer"
              onMouseEnter={() => setHoveredCard(2)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex flex-1 flex-col items-start justify-between p-[40px] rounded-[12px] w-full relative">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
                  <div className="absolute bg-gradient-to-b from-[#f15a29] to-[#dd3f01] inset-0 rounded-[12px]" />
                  <div className="absolute inset-0 overflow-hidden rounded-[12px]">
                    <img alt="" className="absolute inset-0 w-full h-full object-cover object-top" src={ASSETS.serviceCardBg3} />
                  </div>
                  <div className="absolute bg-gradient-to-b from-transparent to-black/60 inset-0 rounded-[12px]" />
                </div>

                {/* Number Circle */}
                <div className="relative w-[64px] h-[64px] z-10 flex items-center justify-center bg-white rounded-full">
                  <p className="font-grotesk font-medium text-orange-500 text-[28px] text-center whitespace-nowrap">
                    03
                  </p>
                </div>

                {/* Content */}
                <motion.div
                  className="flex flex-col gap-[28px] items-start w-full relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={hoveredCard === 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-col gap-[20px] items-start w-full">
                    <p className="font-grotesk font-medium leading-[1.5] text-[24px] text-center text-white whitespace-nowrap">
                      Hability Labs
                    </p>
                    <p className="font-grotesk leading-[1.424] text-[14px] text-white w-full">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius malesuada dictum. Nam sapien libero, vestibulum non nisi a, facilisis pharetra eros. Praesent nec commodo libero.
                    </p>
                  </div>
                  <div className="flex gap-[12px] items-start">
                    <button className="bg-orange-500 border border-orange-300 border-solid flex gap-[12px] items-center justify-center px-[20px] py-[12px] rounded-[8px]">
                      <p className="font-grotesk font-medium leading-[1.5] text-[14px] text-center text-white whitespace-nowrap">
                        Ver mais
                      </p>
                      <img src="/chevron-down-white.svg" alt="" className="w-[16px] h-[16px] -rotate-90" />
                    </button>
                    <button className="border border-white border-solid flex gap-[12px] items-center justify-center px-[20px] py-[12px] rounded-[8px]">
                      <p className="font-grotesk font-medium leading-[1.5] text-[14px] text-center text-white whitespace-nowrap">
                        Solicitar diagnóstico
                      </p>
                      <img src="/chevron-down-white.svg" alt="" className="w-[16px] h-[16px] -rotate-90" />
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPANIES SECTION */}
      <section className="w-full bg-white flex flex-col">
        {/* Title & Description - Limited width */}
        <div className="flex justify-center py-[40px]">
          <div className="max-w-[1280px] w-full px-[20px] flex flex-col gap-[40px] items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex flex-col gap-[20px] items-center text-center">
              <h2 className="font-grotesk font-medium text-[48px] leading-[1.1] text-grey-900">
                <div>Empresas que já trabalham com</div>
                <div className="font-bold text-orange-500">estrutura, não com improviso.</div>
              </h2>
              <p className="font-grotesk font-light text-[16px] leading-[1.5] text-grey-500 max-w-[968px]">
                Atuamos em médias e grandes empresas nos setores de indústria, distribuição, varejo e serviços.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Infinite Scroll Logos - Full Width */}
        <div className="w-screen overflow-hidden">
          <div className="infinite-scroll flex gap-[20px] items-center px-[20px]">
            {/* First set of logos */}
            {Array(9).fill(0).map((_, i) => (
              <div key={`logo-1-${i}`} className="h-[80px] w-[210px] bg-[#d9d9d9] rounded-[300px] flex items-center justify-center shrink-0">
                <span className="font-grotesk font-light text-[16px] text-black text-center whitespace-nowrap">logo da empresa</span>
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {Array(9).fill(0).map((_, i) => (
              <div key={`logo-2-${i}`} className="h-[80px] w-[210px] bg-[#d9d9d9] rounded-[300px] flex items-center justify-center shrink-0">
                <span className="font-grotesk font-light text-[16px] text-black text-center whitespace-nowrap">logo da empresa</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES SECTION */}
      <section className="w-full flex justify-center pt-[80px] pb-[80px] bg-white">
        <div className="max-w-[1280px] w-full px-[20px] flex gap-[20px] items-center">
          {/* Card 1 - Industrial e Manufatura */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="flex-1 bg-white border border-[#e8e8e8] rounded-[28px] p-[40px] flex flex-col gap-[28px]"
          >
            {/* Icon Container */}
            <div className="relative w-[74px] h-[74px]">
              <div className="absolute inset-0 border border-[rgba(250,190,158,0.4)] rounded-[20px]" />
              <div className="absolute inset-[13px] bg-white rounded-[12px] shadow-[0px_11px_21.2px_-5px_rgba(241,90,41,0.2)]" />
              <div className="absolute inset-[25px] flex items-center justify-center">
                <img src={ASSETS.industriesIcon1} alt="Industrial" className="w-[24px] h-[24px]" />
              </div>
            </div>

            {/* Title */}
            <h3 className="font-grotesk font-bold text-[20px] leading-[1.5] text-orange-500">
              Industrial e Manufatura
            </h3>

            {/* Description */}
            <p className="font-grotesk font-light text-[16px] leading-[1.5] text-grey-500">
              PCP, apontamentos, custo de produção, WMS, estoque e integração fiscal/financeiro sem divergências.
            </p>
          </motion.div>

          {/* Card 2 - Distribuição e varejo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="flex-1 bg-white border border-[#e8e8e8] rounded-[28px] p-[40px] flex flex-col gap-[28px]"
          >
            {/* Icon Container */}
            <div className="relative w-[74px] h-[74px]">
              <div className="absolute inset-0 border border-[rgba(250,190,158,0.4)] rounded-[20px]" />
              <div className="absolute inset-[13px] bg-white rounded-[12px] shadow-[0px_11px_21.2px_-5px_rgba(241,90,41,0.2)]" />
              <div className="absolute inset-[25px] flex items-center justify-center">
                <img src={ASSETS.industriesIcon2} alt="Distribuição" className="w-[24px] h-[24px]" />
              </div>
            </div>

            {/* Title */}
            <h3 className="font-grotesk font-bold text-[20px] leading-[1.5] text-orange-500">
              Distribuição e varejo
            </h3>

            {/* Description */}
            <p className="font-grotesk font-light text-[16px] leading-[1.5] text-grey-600">
              Compras, vendas, faturamento, conferência de expedição e automações operacionais com rastreabilidade.
            </p>
          </motion.div>

          {/* Card 3 - Serviços e tecnologia */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="flex-1 bg-white border border-[#e8e8e8] rounded-[28px] p-[40px] flex flex-col gap-[28px]"
          >
            {/* Icon Container */}
            <div className="relative w-[74px] h-[74px]">
              <div className="absolute inset-0 border border-[rgba(250,190,158,0.4)] rounded-[20px]" />
              <div className="absolute inset-[13px] bg-white rounded-[12px] shadow-[0px_11px_21.2px_-5px_rgba(241,90,41,0.2)]" />
              <div className="absolute inset-[25px] flex items-center justify-center">
                <img src={ASSETS.industriesIcon3} alt="Serviços" className="w-[24px] h-[24px]" />
              </div>
            </div>

            {/* Title */}
            <h3 className="font-grotesk font-bold text-[20px] leading-[1.5] text-orange-500">
              Serviços e tecnologia
            </h3>

            {/* Description */}
            <p className="font-grotesk font-light text-[16px] leading-[1.5] text-grey-600">
              Financeiro, contratos recorrentes, faturamento e governança contábil/fiscal/trabalhista integrada.
            </p>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="w-full flex flex-col justify-center items-center gap-[80px] bg-[#f5f5f5]">
        <div className="max-w-[1280px] w-full px-[20px] flex flex-col gap-[40px] items-start pt-[80px] pb-[40px]">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full flex justify-center items-center"
          >
            <div className="flex flex-col gap-0 text-center">
              <h2 className="font-grotesk font-medium text-[48px] leading-[1.1] text-grey-900">
                <div>O que os clientes dizem depois de</div>
                <div className="font-bold text-orange-500">ter a operação estruturada</div>
              </h2>
            </div>
          </motion.div>


          {/* Testimonial Carousel */}
          <div className="w-full relative h-[483px]">
            {/* Gradient backgrounds */}
            <div
              className="absolute top-[114px] left-0 w-[1239px] h-[412px] rounded-bl-[40px] rounded-br-[20px]"
              style={{
                backgroundImage:
                  'linear-gradient(24.347557372021924deg, rgb(241, 90, 41) 1.0548%, rgba(241, 90, 41, 0) 88.214%)',
              }}
            />
            <div
              className="absolute top-[114px] left-[57px] w-[489px] h-[369px] rounded-bl-[40px]"
              style={{
                backgroundImage:
                  'linear-gradient(45.760242982789514deg, rgb(241, 90, 41) 1.0548%, rgba(241, 90, 41, 0) 88.214%)',
              }}
            />
            <div
              className="absolute top-[114px] left-[121px] w-[425px] h-[321px] rounded-bl-[40px]"
              style={{
                backgroundImage:
                  'linear-gradient(45.786526424229116deg, rgb(241, 90, 41) 1.0548%, rgba(241, 90, 41, 0) 88.214%)',
              }}
            />
            <div
              className="absolute top-[114px] left-[179px] w-[367px] h-[277px] rounded-bl-[40px]"
              style={{
                backgroundImage:
                  'linear-gradient(45.766586339588386deg, rgb(241, 90, 41) 1.0548%, rgba(241, 90, 41, 0) 88.214%)',
              }}
            />
            <div
              className="absolute top-[114px] left-[237px] w-[309px] h-[233px] rounded-bl-[40px]"
              style={{
                backgroundImage:
                  'linear-gradient(45.739137350575504deg, rgb(241, 90, 41) 1.0548%, rgba(241, 90, 41, 0) 88.214%)',
              }}
            />

            {/* Navigation Buttons - Top Left */}
            <div className="absolute top-0 left-0 flex gap-[15.9px] items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setTestimonialIdx((testimonialIdx - 1 + testimonials.length) % testimonials.length)}
                className="w-[53px] h-[53px] rounded-[10.6px] bg-[#c8c8c8] flex items-center justify-center hover:bg-orange-500 transition-colors"
              >
                <ChevronLeft className="w-[42.4px] h-[42.4px] text-white" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setTestimonialIdx((testimonialIdx + 1) % testimonials.length)}
                className="w-[53px] h-[53px] rounded-[10.6px] bg-orange-500 flex items-center justify-center hover:bg-orange-600 transition-colors"
              >
                <ChevronRight className="w-[42.4px] h-[42.4px] text-white" />
              </motion.button>
            </div>

            {/* White Card with Testimonial - Top Right */}
            <motion.div
              key={testimonialIdx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="absolute top-0 right-0 w-[909px] h-[483px] bg-white rounded-[20px] p-[68px] flex flex-col justify-between"
            >
              {/* Quote and Text */}
              <div className="flex flex-col gap-[12px] items-start">
                <img src={ASSETS.testimonialQuoteStart} alt="" className="w-[54px] h-[54px]" />
                <p className="font-grotesk font-light text-[24px] leading-[1.424] text-grey-600">
                  {testimonials[testimonialIdx].text}
                </p>
              </div>

              {/* Closing Quote and Author */}
              <div className="flex flex-col gap-[20px] items-end">
                <img src={ASSETS.testimonialQuoteEnd} alt="" className="w-[54px] h-[54px]" />
                <div className="w-full flex gap-[20px] items-center">
                  <div className="w-[60px] h-[59px] bg-[#c8c8c8] rounded-full shrink-0" />
                  <div>
                    <p className="font-grotesk font-semibold text-[16px] leading-[1.5] text-grey-800">
                      {testimonials[testimonialIdx].author}
                    </p>
                    <p className="font-grotesk font-bold text-[16px] leading-[1.5] text-orange-500">
                      {testimonials[testimonialIdx].role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Decorative logo circle */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
              className="absolute top-[231px] left-[261px] w-[138px] h-[138px]"
            >
              <img src={ASSETS.testimonialDecor} alt="" className="w-full h-full" />
            </motion.div>
          </div>
        </div>

        {/* PROCESS SECTION - Inside Testimonials Section */}
        <div className="max-w-[1280px] w-full px-[20px] flex flex-col gap-[40px] items-center pt-[40px] pb-[80px]">
          {/* Title and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-[20px] items-center text-center w-full"
          >
            <div className="font-grotesk font-medium text-[48px] leading-[1.1] text-grey-900">
              <div>Como trabalhamos —</div>
              <div className="font-bold text-orange-500">processo definido, não improviso</div>
            </div>
            <p className="font-grotesk font-light text-[16px] leading-[1.5] text-grey-500 max-w-[968px]">
              Mesma lógica para ERP e BPO: diagnóstico com evidência, prioridade por impacto, execução com governança
              e rastreabilidade.
            </p>
          </motion.div>

          {/* Accordion Container */}
          <div className="w-full flex gap-[28px] items-stretch bg-[#f5f5f5] border border-[#e8e8e8] rounded-[28px] p-[28px] min-h-[500px]">
            {/* Left Placeholder */}
            <div className="flex-1 bg-[#d9d9d9] rounded-[12px]" />

            {/* Right Accordion */}
            <div className="flex-1 flex flex-col gap-[20px] justify-start">
              {processSteps.map((step, idx) => (
                <div
                  key={idx}
                  className={`w-full text-left transition-all rounded-[12px] p-[20px] ${
                    expandedProcess === idx
                      ? 'bg-[#fde0d0] border border-[#fabe9e]'
                      : 'bg-[#e8e8e8] border border-[#c8c8c8]'
                  }`}
                >
                  <motion.button
                    onClick={() => setExpandedProcess(expandedProcess === idx ? -1 : idx)}
                    className="w-full flex items-center justify-between"
                  >
                    <div className="flex gap-[12px] items-center">
                      <div
                        className={`w-[45px] h-[45px] rounded-[8px] flex-shrink-0 flex items-center justify-center ${
                          expandedProcess === idx ? 'bg-white' : 'bg-[#d9d9d9]'
                        }`}
                      >
                        <img src={step.icon} alt="" className="w-[24px] h-[24px]" />
                      </div>
                      <p
                        className={`font-grotesk font-bold text-[16px] leading-[1.5] whitespace-nowrap ${
                          expandedProcess === idx ? 'text-[#ef4136]' : 'text-grey-800'
                        }`}
                      >
                        {step.title}
                      </p>
                    </div>

                    <motion.div animate={{ rotate: expandedProcess === idx ? 180 : 0 }} transition={{ duration: 0.3 }}>
                      <ChevronDown
                        className={`w-[24px] h-[24px] ${expandedProcess === idx ? 'text-[#ef4136]' : 'text-grey-600'}`}
                      />
                    </motion.div>
                  </motion.button>

                  {expandedProcess === idx && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="w-full flex flex-col gap-[20px] mt-[20px]"
                    >
                      <div className="w-full h-px overflow-hidden">
                        <img src={ASSETS.processVector} alt="" className="w-full h-px object-cover" />
                      </div>
                      <p className="font-grotesk font-light text-[14px] leading-[1.5] text-[#363636]">
                        {step.desc}
                      </p>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS SECTION */}
      <section className="relative w-full flex justify-center py-[80px] overflow-hidden bg-white">
        {/* Gradient Layer 1 - Top */}
        <div className="absolute top-0 left-0 right-0 h-[494px] w-full" style={{ backgroundImage: 'linear-gradient(19.3deg, rgb(241, 90, 41) 1.05%, rgba(255, 255, 255, 0) 88.21%)', pointerEvents: 'none' }} />

        {/* Gradient Layer 2 - Top (rotated) */}
        <div className="absolute top-[46px] left-0 right-0 h-[402px] w-full" style={{ backgroundImage: 'linear-gradient(19.56deg, rgb(241, 90, 41) 1.15%, rgba(255, 255, 255, 0) 100%)', transform: 'scaleY(-1)', pointerEvents: 'none' }} />

        {/* Gradient Layer 3 - Top (rotated) */}
        <div className="absolute top-[90px] left-0 right-0 h-[313px] w-full" style={{ backgroundImage: 'linear-gradient(15.41deg, rgb(241, 90, 41) 1.15%, rgba(255, 255, 255, 0) 100.33%)', transform: 'scaleY(-1)', pointerEvents: 'none' }} />

        <div className="max-w-[1280px] w-full px-[20px] relative z-10">
          <div className="bg-white rounded-[20px] shadow-lg p-[20px]">
            <div className="flex gap-[20px]">
              {/* Left Card - Results */}
              <div className="flex-1 bg-[#f5f5f5] border border-[#e8e8e8] rounded-[12px] p-[40px] flex flex-col gap-[20px]">
                <h3 className="font-grotesk font-black text-[20px] leading-[1.5] text-orange-500">
                  Resultados que os clientes reportam
                </h3>
                <div className="w-full h-px overflow-hidden">
                  <img src={ASSETS.resultsSeparator} alt="" className="w-full h-px object-cover" />
                </div>
                <div className="flex flex-col gap-[16px]">
                  {[
                    'Redução significativa de exceções manuais e retrabalho',
                    'Maior estabilidade e performance nas rotinas críticas do ERP',
                    'Fechamento contábil mais previsível e com menos divergências',
                    'Mais confiança nos números para tomada de decisão'
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-[10px] items-start">
                      <div className="w-[16px] h-[16px] rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                        <img src={ASSETS.resultsCheckmark} alt="" className="w-[10px] h-[10px]" />
                      </div>
                      <p className="font-grotesk font-medium text-[16px] leading-[1.5] text-grey-900">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Card - Daily Changes */}
              <div className="flex-1 bg-[#f5f5f5] border border-[#e8e8e8] rounded-[12px] p-[40px] flex flex-col gap-[20px]">
                <h3 className="font-grotesk font-black text-[20px] leading-[1.5] text-orange-500">
                  O que muda no dia a dia
                </h3>
                <div className="w-full h-px overflow-hidden">
                  <img src={ASSETS.resultsSeparator} alt="" className="w-full h-px object-cover" />
                </div>
                <div className="flex flex-col gap-[16px]">
                  {[
                    'Você sabe o que está em andamento, com prazo e responsável',
                    'Critérios claros de "concluído" — sem demanda reaberta sem motivo',
                    'Trilha de auditoria de mudanças e ajustes contábeis',
                    'Time interno menos sobrecarregado, mais foco em evolução'
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-[10px] items-start">
                      <div className="w-[16px] h-[16px] rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                        <img src={ASSETS.resultsCheckmark} alt="" className="w-[10px] h-[10px]" />
                      </div>
                      <p className="font-grotesk font-medium text-[16px] leading-[1.5] text-grey-900">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="w-full flex justify-center py-[40px] px-[20px] bg-white pt-[80px] pb-[80px] mt-[40px]">
        <div className="w-full max-w-[1240px]">
          <div className="bg-[#fef2ec] rounded-[28px] p-[12px]">
            <motion.div className="bg-gradient-to-r from-[#f15a29] via-[#fabe9e] to-[#f15a29] rounded-[16px] relative px-[80px] py-[60px] h-[367px] flex items-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              {/* Pattern Background */}
              <img
                src="/pattern-bolinhas.png"
                alt=""
                className="absolute inset-0 w-full h-full object-cover rounded-[16px] pointer-events-none"
              />

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative z-10 flex flex-col gap-[28px] max-w-[488px]"
              >
                <h2 className="font-grotesk font-light text-[36px] leading-[1.1] text-white">
                  Sua operação tem um gargalo que{' '}
                  <span className="font-bold">você já sabe que existe.</span>
                </h2>
                <p className="font-grotesk font-medium text-[16px] leading-[1.5] text-white" style={{ maxWidth: '385.42px' }}>
                  O primeiro passo é uma conversa de 30 minutos com quem entende ERP e contabilidade de verdade.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-grey-900 font-grotesk font-medium text-[16px] px-[20px] py-[8px] rounded-full w-fit hover:bg-grey-50 transition-colors"
                >
                  Fale com um especialista
                </motion.button>
              </motion.div>

              {/* Image - Absolute */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="absolute right-[80px] -top-[91px] h-[458px] w-[490px] rounded-r-[16px] z-10"
              >
                <img
                  src="/mulher-CTA.png"
                  alt="Especialista"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
