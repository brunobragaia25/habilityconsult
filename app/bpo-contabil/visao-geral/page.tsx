'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

function AnimatedNumber({ value, prefix = '', suffix = '', format = false }: { value: string | number; prefix?: string; suffix?: string; format?: boolean }) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    const numValue = typeof value === 'string' ? parseFloat(value) : value
    let start = 0
    const duration = 1.5
    const increment = numValue / (duration * 60)

    const interval = setInterval(() => {
      start += increment
      if (start >= numValue) {
        setDisplayValue(numValue)
        clearInterval(interval)
      } else {
        setDisplayValue(Math.round(start * 100) / 100)
      }
    }, 16)

    return () => clearInterval(interval)
  }, [value])

  const formatted = format ? Math.round(displayValue).toLocaleString('pt-BR') : Math.round(displayValue)

  return <span>{prefix}{formatted}{suffix}</span>
}

const ASSETS = {
  checkmark: 'https://www.figma.com/api/mcp/asset/45eabd81-03eb-43ad-97b4-ea060fcf0ab0',
  checkmarkWhite: 'https://www.figma.com/api/mcp/asset/160f6d2e-7a2c-44eb-997e-3ebc15465f33',
  frame264: 'https://www.figma.com/api/mcp/asset/5122bffd-34a7-43d9-99df-9e7139a1c910',
  panelsTopLeft: 'https://www.figma.com/api/mcp/asset/a252dd89-d075-4304-b740-8b44d37b71e3',
  vector20: 'https://www.figma.com/api/mcp/asset/93886798-e2a1-4513-a6b5-814e32eb7ebb',
  governanceRectangle: 'https://www.figma.com/api/mcp/asset/fae3b8cd-1f65-44fb-b843-d7f365e53328',
  governanceChecked: 'https://www.figma.com/api/mcp/asset/138f0c10-9120-40f5-b6de-e77026c7b29f',
  governanceUnchecked: 'https://www.figma.com/api/mcp/asset/dc63449c-1c7a-4498-a557-3e35fbfd7c9c',
  governanceChecklistIcon: 'https://www.figma.com/api/mcp/asset/a35d5ac9-58a8-4b55-b359-0c0cf6d4a19e',
  governanceFrame68: 'https://www.figma.com/api/mcp/asset/7a421e6b-01fc-4e73-993a-43f011d78011',
  circlePlus: '/circle-plus.svg',
  fileCheckCorner: '/file-check-corner.svg',
  userPlus: '/user-plus.svg',
}

export default function BPOVisaoGeral() {
  return (
    <main className="w-full bg-white">
      {/* Navigation Bar */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center"
      >
        <div className="w-full max-w-[1280px]">
          <NavBar />
        </div>
      </motion.div>

      {/* Hero Section */}
      <section className="w-full flex justify-center pt-[210px] pb-[128px] relative overflow-hidden" style={{backgroundImage: 'url(/bg-visao-geral-bpo.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="w-full max-w-[1280px] px-[20px] flex flex-col gap-[40px] relative z-10">
          <motion.div
            className="flex flex-col gap-[20px] w-full"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            <h1 className="font-grotesk font-semibold text-[60px] leading-[61.6px] text-white">
              {['Fechamento', 'todo', 'mês', 'virando'].map((word, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="inline-block mr-2"
                >
                  {word}{' '}
                </motion.span>
              ))}
              <br />
              {['correria?', 'Isso', 'não', 'é', 'inevitável.'].map((word, i) => (
                <motion.span
                  key={`line2-${i}`}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="text-orange-500 inline-block mr-2"
                >
                  {word}{' '}
                </motion.span>
              ))}
              <br />
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="text-orange-500 inline-block"
              >
                É falta de método.
              </motion.span>
            </h1>
          </motion.div>
          <motion.div className="flex gap-[12px]" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border border-white rounded-[12px] px-[20px] py-[12px] flex items-center gap-[12px] hover:opacity-80 transition-opacity">
              <span className="font-grotesk font-medium text-[14px] text-white">Solicitar diagnóstico</span>
              <div className="w-[20px] h-[20px] bg-white rounded-[4px] flex items-center justify-center">
                <img src="/chevron-down-black.svg" alt="" className="w-[16px] h-[16px] rotate-0" />
              </div>
            </motion.button>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-[#f37c4a] rounded-[12px] px-[20px] py-[12px] flex items-center gap-[12px] hover:opacity-80 transition-opacity">
              <span className="font-grotesk font-medium text-[14px] text-white">Ver áreas do BPO</span>
              <div className="w-[20px] h-[20px] bg-white rounded-[4px] flex items-center justify-center">
                <img src="/chevron-down-black.svg" alt="" className="w-[16px] h-[16px] rotate-0" />
              </div>
            </motion.button>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-[#fabe9e] rounded-[12px] px-[20px] py-[12px] flex items-center gap-[12px] hover:opacity-80 transition-opacity">
              <span className="font-grotesk font-medium text-[14px] text-black">Geral</span>
              <div className="w-[20px] h-[20px] bg-[#f15a29] rounded-[4px] flex items-center justify-center">
                <img src="/chevron-down-white.svg" alt="" className="w-[16px] h-[16px] rotate-0" />
              </div>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Description Section */}
      <section className="w-full flex justify-center bg-white py-[80px]">
        <motion.div className="w-full max-w-[1280px] px-[20px] flex justify-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <p className="font-linear font-medium text-[24px] leading-[1.65] text-[#1e1e1e] text-center w-full">
            A Hability opera o BPO Contábil completo — contábil, fiscal e trabalhista — independentemente do ERP utilizado. Além de atender todas as obrigações exigidas pelo governo e pelo fisco, usamos a contabilidade em prol da gestão: entregamos informações organizadas, indicadores e base para dashboards e análises que apoiam decisões.
            <br /><br />
            Atuamos integrados ao seu sistema ou, quando necessário, realizamos o fechamento pelo Sistema Domínio, garantindo padrão, rastreabilidade e conformidade.
          </p>
        </motion.div>
      </section>

      {/* Benefits Cards */}
      <section className="w-full flex justify-center bg-white py-[40px]">
        <div className="w-full max-w-[1280px] px-[20px] grid grid-cols-3 gap-[20px]">
          {[
            { title: 'Independente de ERP', desc: 'Atuamos no seu sistema atual ou via Domínio.', icon: '/monitor-cog.svg' },
            { title: 'Fechamento com padrão', desc: 'Conciliações, evidências e rastreabilidade.', icon: '/circle-check.svg' },
            { title: 'Previsibilidade', desc: 'Calendário, responsabilidades e entregáveis claros.', icon: '/view.svg' }
          ].map((item, idx) => (
            <motion.div key={idx} className="bg-white border border-[#e8e8e8] rounded-[28px] p-[40px] flex flex-col gap-[28px]" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: idx * 0.15 }} viewport={{ once: true }} whileHover={{ y: -8 }}>
              <div className="flex flex-col gap-[20px]">
                <div className="w-[74px] h-[74px] border border-[rgba(250,190,158,0.4)] rounded-[20px] relative flex items-center justify-center">
                  <div className="absolute w-[48px] h-[48px] bg-white rounded-[12px] shadow-[0px_11px_21.2px_-5px_rgba(241,90,41,0.2)] flex items-center justify-center">
                    <img src={item.icon} alt="" className="w-[24px] h-[24px]" />
                  </div>
                </div>
                <h3 className="font-grotesk font-bold text-[20px] text-orange-500">{item.title}</h3>
              </div>
              <p className="font-grotesk font-medium text-[16px] text-[#1e1e1e]">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Compliance Section */}
      <section className="w-full flex justify-center bg-white py-[40px]">
        <div className="w-full max-w-[1280px] px-[20px]">
          <motion.div className="flex flex-col gap-[40px] items-center mb-[40px]" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <div className="text-center max-w-[720px]">
              <h2 className="font-linear font-medium text-[48px] leading-[1.1] text-[#111] mb-[20px]">
                <span className="font-grotesk font-medium">Compliance é o mínimo.</span><br />
                <span className="font-grotesk font-semibold text-orange-500">O que entregamos vai além.</span>
              </h2>
              <p className="font-grotesk font-medium text-[16px] text-[#4a4a4a]">
                Obrigação entregue no prazo é esperado. O diferencial é a informação organizada, os indicadores e a base pronta para quem decide.
              </p>
            </div>
          </motion.div>

          {/* Info for CFO */}
          <motion.div className="flex gap-[64px] items-center mb-[40px]" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <motion.div className="p-[10px] rounded-[16px] border border-transparent" style={{backgroundImage: 'linear-gradient(white, white), linear-gradient(to bottom, rgba(241, 90, 41, 0.5), #FFFFFF)', backgroundOrigin: 'border-box', backgroundClip: 'padding-box, border-box'}} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <div className="w-[568px] h-[380px] bg-[#fabe9e] pt-[10px] px-[10px] rounded-[16px] flex items-end justify-center overflow-hidden">
              <div className="w-[478px] h-[324px] bg-white pt-[11.698px] px-[11.698px] relative rounded-tl-[17.547px] rounded-tr-[17.547px] shadow-[0px_16.085px_31px_0px_rgba(241,90,41,0.2)] flex items-center justify-center">
                <div className="bg-white border-[#e8e8e8] border-l-[1.462px] border-r-[1.462px] border-t-[1.462px] flex flex-col items-center pb-[26px] relative rounded-tl-[8.774px] rounded-tr-[8.774px] w-full h-full">
                  <div className="flex flex-col gap-[15px] items-center justify-center w-full">
                    <div className="flex flex-col gap-[15px] items-start py-[12px] w-full">
                      <div className="flex gap-[20px] items-center px-[18px] w-full">
                        <div className="w-[61.416px] h-[14.623px]">
                          <img src={ASSETS.frame264} alt="" className="w-full h-full" />
                        </div>
                        <div className="w-[24px] h-[24px]">
                          <img src={ASSETS.panelsTopLeft} alt="" className="w-full h-full" />
                        </div>
                        <div className="flex flex-1 items-center justify-between">
                          <div className="bg-[#f1f3f4] h-[10px] rounded-[300px] w-[62px]" />
                          <div className="bg-[#f1f3f4] h-[10px] rounded-[300px] w-[62px]" />
                        </div>
                      </div>
                      <div className="h-0 relative w-[454.604px]">
                        <div className="absolute" style={{top: '-0.73px', bottom: '-0.73px', left: '0', right: '0'}}>
                          <img src={ASSETS.vector20} alt="" className="w-full h-full" />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start w-[388px]">
                      <motion.div className="flex flex-col gap-[2.436px]" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}>
                        <p className="font-inter font-medium text-[#6e6e6e] text-[12.994px]">Recebimentos</p>
                        <motion.p className="font-inter font-semibold text-[#111] text-[21.928px]" animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}>R$<AnimatedNumber value={401345} suffix=",21" format={true} /></motion.p>
                      </motion.div>
                      <div className="flex gap-[26.801px] items-end justify-center w-full">
                        {[
                          { month: 'Nov/25', bars: [91.366, 46.292] },
                          { month: 'Dez/25', bars: [54.82, 91.366] },
                          { month: 'Jan/26', bars: [70.656, 108.421] },
                          { month: 'Fev/26', bars: [126.694, 85.275] },
                          { month: 'Mar/26', bars: [102.33, 59.692] }
                        ].map((item, idx) => (
                          <motion.div key={idx} className="flex flex-col gap-[15.837px] items-center w-[56.038px]" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }} viewport={{ once: true }}>
                            <div className="flex gap-[7.309px] items-end w-full">
                              <motion.div className="bg-[#f15a29] rounded-[7.309px] w-[24.364px]" style={{height: `${item.bars[0]}px`}} initial={{ height: 0 }} whileInView={{ height: item.bars[0] }} transition={{ duration: 0.8, delay: 0.5 + idx * 0.1, ease: 'easeOut' }} viewport={{ once: true }} />
                              <motion.div className="bg-[#d9d9d9] rounded-[7.309px] w-[24.364px]" style={{height: `${item.bars[1]}px`}} initial={{ height: 0 }} whileInView={{ height: item.bars[1] }} transition={{ duration: 0.8, delay: 0.55 + idx * 0.1, ease: 'easeOut' }} viewport={{ once: true }} />
                            </div>
                            <p className="font-inter font-medium text-[#6e6e6e] text-[12.994px] text-center w-full">{item.month}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </motion.div>
            <div className="flex-1 flex flex-col gap-[40px]">
              <div>
                <h3 className="font-grotesk font-bold text-[28px] text-orange-500 mb-[16px]">Informação para quem decide</h3>
                <p className="font-grotesk font-medium text-[20px] text-[#1e1e1e]">
                  Margem, despesas, resultado e variações com consistência — informação pronta para o CFO, não só para o auditor.
                </p>
              </div>
              <div className="flex flex-col gap-[16px]">
                {['Fechamento com trilha de ajustes', 'Comparativos (mês a mês / orçamento)', 'Pontos de atenção e recomendações'].map((item, idx) => (
                  <motion.div key={idx} className="flex gap-[10px] items-center" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: idx * 0.1 }} viewport={{ once: true }}>
                    <div className="w-[16px] h-[16px] rounded-full bg-orange-500 flex items-center justify-center shrink-0">
                      <img src="/check-check.svg" alt="" className="w-[10px] h-[10px]" />
                    </div>
                    <p className="font-grotesk font-medium text-[16px] text-black">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Dashboard Section */}
          <motion.div className="flex gap-[64px] items-center mb-[40px]" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}>
            <div className="flex-1 flex flex-col gap-[40px]">
              <div>
                <h3 className="font-grotesk font-bold text-[28px] text-orange-500 mb-[16px]">Base pronta para dashboards</h3>
                <p className="font-grotesk font-medium text-[20px] text-[#1e1e1e]">
                  Quando o dado é padronizado, o dashboard funciona. Ajudamos a deixar a informação "pronta para gestão"
                </p>
              </div>
              <div className="flex flex-col gap-[16px]">
                {['Regras e cadastros consistentes', 'Dimensões (centro de custo, projeto, filial)', 'Rotina estável para atualização'].map((item, idx) => (
                  <motion.div key={idx} className="flex gap-[10px] items-center" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: idx * 0.1 }} viewport={{ once: true }}>
                    <div className="w-[16px] h-[16px] rounded-full bg-orange-500 flex items-center justify-center shrink-0">
                      <img src="/check-check.svg" alt="" className="w-[10px] h-[10px]" />
                    </div>
                    <p className="font-grotesk font-medium text-[16px] text-black">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div className="p-[10px] rounded-[16px] border border-transparent" style={{backgroundImage: 'linear-gradient(white, white), linear-gradient(to bottom, rgba(241, 90, 41, 0.5), #FFFFFF)', backgroundOrigin: 'border-box', backgroundClip: 'padding-box, border-box'}} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <div className="w-[568px] h-[380px] bg-[#fabe9e] pt-[10px] px-[10px] rounded-[16px] flex items-end justify-center overflow-hidden">
                <div className="w-[478px] h-[324px] bg-white pt-[11.698px] px-[11.698px] relative rounded-tl-[17.547px] rounded-tr-[17.547px] shadow-[0px_16.085px_31px_0px_rgba(241,90,41,0.2)] flex items-center justify-center">
                  <div className="bg-white border-[#e8e8e8] border-l-[1.462px] border-r-[1.462px] border-t-[1.462px] flex flex-col items-center pb-[26px] relative rounded-tl-[8.774px] rounded-tr-[8.774px] w-full h-full">
                    <div className="flex flex-col gap-[15px] items-center justify-center w-full">
                      {/* Header */}
                      <div className="flex flex-col gap-[15px] items-start py-[12px] w-full">
                        <div className="flex gap-[20px] items-center px-[18px] w-full">
                          <div className="w-[61.416px] h-[14.623px]">
                            <img src={ASSETS.frame264} alt="" className="w-full h-full" />
                          </div>
                          <div className="w-[24px] h-[24px]">
                            <img src={ASSETS.panelsTopLeft} alt="" className="w-full h-full" />
                          </div>
                          <div className="flex flex-1 items-center justify-between">
                            <div className="bg-[#f1f3f4] h-[10px] rounded-[300px] w-[62px]" />
                            <div className="bg-[#f1f3f4] h-[10px] rounded-[300px] w-[62px]" />
                          </div>
                        </div>
                        <div className="h-0 relative w-[454.604px]">
                          <div className="absolute inset-[-0.73px_0]">
                            <img src={ASSETS.vector20} alt="" className="w-full h-full" />
                          </div>
                        </div>
                      </div>

                      {/* Metrics Row */}
                      <div className="flex gap-[10px] items-center w-[388px] font-inter font-medium text-center whitespace-nowrap">
                        {[
                          { label: 'Margem', value: 32, suffix: '%' },
                          { label: 'Resultado', value: 18, prefix: '+', suffix: '%' },
                          { label: 'Desvio', value: -2, suffix: '%' }
                        ].map((metric, idx) => (
                          <motion.div key={idx} className="border border-[#e8e8e8] rounded-[12px] flex flex-1 flex-col h-[82px] items-start justify-between p-[12px]" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }} viewport={{ once: true }} whileHover={{ boxShadow: '0 8px 16px rgba(241,90,41,0.1)' }}>
                            <p className="text-[#f15a29] text-[12.994px]">{metric.label}</p>
                            <motion.p className="text-[#4a4a4a] text-[24px] font-semibold" animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}><AnimatedNumber value={metric.value} prefix={metric.prefix} suffix={metric.suffix} /></motion.p>
                          </motion.div>
                        ))}
                      </div>

                      {/* Chart and Dimensions Row */}
                      <div className="flex gap-[10px] h-[91px] items-center w-[388px]">
                        {/* Chart */}
                        <div className="border border-[#e8e8e8] rounded-[12px] flex flex-[1_0_0] flex-col h-full items-start justify-between p-[12px]">
                          <div className="flex flex-1 gap-[4px] items-end w-full">
                            {[14.612, 21.271, 25.19, 29.612, 36.612, 41.612, 48.612, 52.612, 57.612, 63.112, 70].map((height, idx) => (
                              <motion.div key={idx} className={idx % 2 === 0 ? "bg-[#f15a29]" : "bg-[#fabe9e]"} style={{width: '11.195px', borderRadius: '3.359px'}} initial={{ height: 0 }} whileInView={{ height }} transition={{ duration: 0.8, delay: 0.5 + idx * 0.08, ease: 'easeOut' }} viewport={{ once: true }} onMouseEnter={() => {}} whileHover={{ opacity: 0.8 }} />
                            ))}
                          </div>
                        </div>

                        {/* Dimensions */}
                        <div className="border border-[#e8e8e8] rounded-[12px] flex flex-[1_0_0] flex-col h-full items-start justify-between p-[12px]">
                          <div className="flex items-center justify-between w-full">
                            <p className="font-inter font-medium text-[#f15a29] text-[12.994px] whitespace-nowrap">Filial SP</p>
                            <div className="bg-[#fde0d0] flex items-center justify-center px-[8px] h-[20px] rounded-[300px] shrink-0">
                              <p className="font-inter font-medium text-[#a0a0a0] text-[10px] text-center whitespace-nowrap">CC 101</p>
                            </div>
                          </div>
                          <div className="flex items-center justify-between w-full">
                            <p className="font-inter font-medium text-[#f15a29] text-[12.994px] whitespace-nowrap">Projeto A</p>
                            <div className="bg-[#fde0d0] flex items-center justify-center px-[8px] h-[20px] rounded-[300px] shrink-0">
                              <p className="font-inter font-medium text-[#a0a0a0] text-[10px] text-center whitespace-nowrap">CC 205</p>
                            </div>
                          </div>
                          <div className="flex items-center justify-between w-full">
                            <p className="font-inter font-medium text-[#f15a29] text-[12.994px] whitespace-nowrap">Projeto B</p>
                            <div className="bg-[#fde0d0] flex items-center justify-center px-[8px] h-[20px] rounded-[300px] shrink-0">
                              <p className="font-inter font-medium text-[#a0a0a0] text-[10px] text-center whitespace-nowrap">CC 206</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <motion.div className="relative w-[388px] h-[12.198px] rounded-[40px] bg-[#d9d9d9] overflow-hidden" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.8 }} viewport={{ once: true }}>
                        <motion.div className="absolute inset-y-0 left-0 bg-[#f6986c] rounded-[40px]" initial={{ width: '0px' }} whileInView={{ width: '255.333px' }} transition={{ duration: 1.2, delay: 0.9, ease: 'easeOut' }} viewport={{ once: true }} />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Governance Section */}
          <motion.div className="flex gap-[64px] items-center mb-[40px]" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: true }}>
            <div className="border border-[rgba(241,90,41,0.3)] rounded-[16px] p-[10px] shrink-0">
              <div className="w-[568px] h-[380px] bg-[#ef4136] rounded-[16px] overflow-hidden flex items-end justify-center gap-[20px] pt-[56px] pl-[53px]">
                  {/* Column 1: Fiscal */}
                  <div className="w-[203px] h-[324px] bg-white pt-[11.698px] px-[11.698px] rounded-tl-[17.547px] rounded-tr-[17.547px] shadow-[0px_16.085px_31px_0px_rgba(241,90,41,0.2)] flex items-start justify-center">
                    <div className="bg-white border-[#e8e8e8] border-l-[1.462px] border-r-[1.462px] border-t-[1.462px] flex flex-col w-full h-full items-center pb-[26px] rounded-tl-[8.774px] rounded-tr-[8.774px] gap-[14.623px]">
                      {/* Header */}
                      <div className="flex flex-col items-center justify-center w-full">
                        <div className="flex flex-col items-start w-full">
                          <div className="flex items-center justify-center px-[12px] py-[8px] w-full">
                            <p className="font-inter font-medium text-[#f15a29] text-[12.994px] text-center whitespace-nowrap">Fiscal</p>
                          </div>
                          <div className="h-0 relative w-full">
                            <div className="absolute inset-[-0.73px_0]">
                              <img src={ASSETS.vector20} alt="" className="w-full h-full" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Items */}
                      <div className="flex flex-1 flex-col items-center justify-between w-full px-[12px]">
                        <div className="flex flex-col gap-[12px] w-full">
                          {[true, true, true, false, false].map((checked, idx) => (
                            <motion.div key={idx} className="flex gap-[10px] items-center w-full" initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4 + idx * 0.12 }} viewport={{ once: true }}>
                              <motion.div className="relative shrink-0 size-[16px]" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.4, delay: 0.5 + idx * 0.12, type: 'spring' }} viewport={{ once: true }}>
                                <img src={checked ? ASSETS.governanceChecked : ASSETS.governanceUnchecked} alt="" className="absolute inset-0 w-full h-full" />
                              </motion.div>
                              <motion.div className="flex flex-1 items-center" initial={{ width: '0%' }} whileInView={{ width: '100%' }} transition={{ duration: 0.6, delay: 0.55 + idx * 0.12 }} viewport={{ once: true }}>
                                <div className="bg-[#d9d9d9] flex-1 h-[16px] rounded-[300px]" />
                              </motion.div>
                            </motion.div>
                          ))}
                        </div>

                        {/* Footer Badge */}
                        <div className="bg-[#fde0d0] flex items-center justify-center px-[8px] h-[20px] rounded-[300px] w-full">
                          <p className="font-inter font-medium text-[#a0a0a0] text-[10px] text-center whitespace-nowrap">Luiz F. - Responsável</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Column 2: Contábil */}
                  <motion.div className="w-[203px] h-[324px] bg-white pt-[11.698px] px-[11.698px] rounded-tl-[17.547px] rounded-tr-[17.547px] shadow-[0px_16.085px_31px_0px_rgba(241,90,41,0.2)] flex items-start justify-center" initial={{ opacity: 0, y: 20, x: 20 }} whileInView={{ opacity: 1, y: 0, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
                    <div className="bg-white border-[#e8e8e8] border-l-[1.462px] border-r-[1.462px] border-t-[1.462px] flex flex-col w-full h-full items-center pb-[26px] rounded-tl-[8.774px] rounded-tr-[8.774px] gap-[14.623px]">
                      {/* Header */}
                      <div className="flex flex-col items-center justify-center w-full">
                        <div className="flex flex-col items-start w-full">
                          <div className="flex items-center justify-center px-[12px] py-[8px] w-full">
                            <p className="font-inter font-medium text-[#f15a29] text-[12.994px] text-center whitespace-nowrap">Contábil</p>
                          </div>
                          <div className="h-0 relative w-full">
                            <div className="absolute inset-[-0.73px_0]">
                              <img src={ASSETS.vector20} alt="" className="w-full h-full" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Items */}
                      <div className="flex flex-1 flex-col items-center justify-between w-full px-[12px]">
                        <div className="flex flex-col gap-[12px] w-full">
                          {[true, true, false, false].map((checked, idx) => (
                            <motion.div key={idx} className="flex gap-[10px] items-center w-full" initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4 + idx * 0.12 }} viewport={{ once: true }}>
                              <motion.div className="relative shrink-0 size-[16px]" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.4, delay: 0.5 + idx * 0.12, type: 'spring' }} viewport={{ once: true }}>
                                <img src={checked ? ASSETS.governanceChecked : ASSETS.governanceUnchecked} alt="" className="absolute inset-0 w-full h-full" />
                              </motion.div>
                              <motion.div className="flex flex-1 items-center" initial={{ width: '0%' }} whileInView={{ width: '100%' }} transition={{ duration: 0.6, delay: 0.55 + idx * 0.12 }} viewport={{ once: true }}>
                                <div className="bg-[#d9d9d9] flex-1 h-[16px] rounded-[300px]" />
                              </motion.div>
                            </motion.div>
                          ))}
                        </div>

                        {/* Footer Badge */}
                        <motion.div className="bg-[#fde0d0] flex items-center justify-center px-[8px] h-[20px] rounded-[300px] w-full" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.8 }} viewport={{ once: true }}>
                          <p className="font-inter font-medium text-[#a0a0a0] text-[10px] text-center whitespace-nowrap">Pedro M. - Responsável</p>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Column 3: Narrow with icon */}
                  <div className="w-[69px] h-[324px] bg-white pt-[11.698px] pl-[11.698px] rounded-tl-[17.547px] shadow-[0px_16.085px_31px_0px_rgba(241,90,41,0.2)] flex items-start justify-center">
                    <div className="bg-white border-[#e8e8e8] border-l-[1.462px] border-r-[1.462px] border-t-[1.462px] flex flex-col w-full h-full items-center pb-[26px] rounded-tl-[8.774px] gap-[14.623px]">
                      {/* Header with icon */}
                      <div className="flex flex-col items-center justify-center w-full">
                        <div className="h-[35px] relative w-full" style={{backgroundImage: `url('${ASSETS.governanceFrame68}')`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}} />
                      </div>

                      {/* Items */}
                      <div className="flex flex-1 flex-col items-center justify-between w-full pl-[12px]">
                        <div className="flex flex-col gap-[12px] w-full">
                          {[true, false, false].map((checked, idx) => (
                            <div key={idx} className="flex gap-[10px] items-center w-full">
                              <div className="relative shrink-0 size-[16px]">
                                <img src={checked ? ASSETS.governanceChecked : ASSETS.governanceUnchecked} alt="" className="absolute inset-0 w-full h-full" />
                              </div>
                              <div className="flex flex-1 items-center">
                                <div className="bg-[#d9d9d9] flex-1 h-[16px] rounded-bl-[300px] rounded-tl-[300px]" />
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Footer Badge - no text, just colored */}
                        <div className="bg-[#fde0d0] h-[20px] rounded-bl-[300px] rounded-tl-[300px] w-full" />
                      </div>
                    </div>
                  </div>
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-[40px]">
              <div>
                <h3 className="font-grotesk font-bold text-[28px] text-orange-500 mb-[16px]">Governança que reduz ruído</h3>
                <p className="font-grotesk font-medium text-[20px] text-[#1e1e1e]">
                  Cada competência com checklist, evidências e responsável definido. Gestão que confia no processo — não que torce pra não ter surpresa.
                </p>
              </div>
              <div className="flex flex-col gap-[16px]">
                {['Checklist por competência', 'Conferências e aprovações', 'Rastreabilidade e padrão'].map((item, idx) => (
                  <motion.div key={idx} className="flex gap-[10px] items-center" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: idx * 0.1 }} viewport={{ once: true }}>
                    <img src={ASSETS.governanceChecklistIcon} alt="" className="w-4 h-4" />
                    <p className="font-grotesk font-medium text-[16px] text-black">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Structure Section */}
      <section className="w-full flex justify-center bg-white py-[40px]">
        <div className="w-full max-w-[1280px] px-[20px]">
          <div className="flex items-end justify-between mb-[40px] gap-[40px]">
            <div className="flex-1">
              <h2 className="font-linear font-medium text-[48px] leading-[1.1] text-[#111] whitespace-pre-wrap">
                Como o BPO<br />
                <span className="font-linear font-black text-orange-500">está estruturado</span>
              </h2>
            </div>
            <div className="flex-1">
              <p className="font-grotesk font-medium text-[16px] text-[#4a4a4a] text-right">
                Três frentes com especialistas dedicados — e integração real entre elas para que o fechamento não dependa de uma "corrida de revezamento".
              </p>
            </div>
          </div>

          {/* Three Cards */}
          <div className="grid grid-cols-3 gap-[20px] mb-[20px]">
            {[
              {
                title: 'Contábil',
                desc: 'Fechamento mensal, conciliações, demonstrações e trilha de auditoria.',
                items: ['Conciliações e revisões', 'DRE, Balanço e relatórios', 'Padronização de lançamentos'],
                icon: ASSETS.circlePlus
              },
              {
                title: 'Fiscal',
                desc: 'Apuração de tributos e obrigações acessórias com consistência e conferência.',
                items: ['Registro de cadastros e regras', 'Apuração e validação', 'Redução de risco fiscal'],
                icon: ASSETS.fileCheckCorner
              },
              {
                title: 'Trabalhista',
                desc: 'Folha de pagamento, encargos e eventos trabalhistas com governança.',
                items: ['Processamento de folha', 'Eventos eSocial', 'Conferência e controle'],
                icon: ASSETS.userPlus
              }
            ].map((card, idx) => (
              <motion.div key={idx} className="bg-orange-500 rounded-[28px] p-[32px] flex flex-col justify-between h-[450px] text-white" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: idx * 0.15 }} viewport={{ once: true }} whileHover={{ y: -12 }}>
                <div>
                  <div className="w-[40px] h-[40px] bg-[#fef0ef] rounded-[12px] mb-[20px] flex items-center justify-center">
                    <img src={card.icon} alt="" className="w-[24px] h-[24px]" />
                  </div>
                  <h3 className="font-grotesk font-semibold text-[20px] mb-[10px]">{card.title}</h3>
                  <p className="font-grotesk font-normal text-[14px]">{card.desc}</p>
                </div>
                <div className="flex flex-col gap-[40px]">
                  <div className="flex flex-col gap-[16px]">
                    {card.items.map((item, i) => (
                      <div key={i} className="flex gap-[16px] items-center">
                        <div className="w-[16px] h-[16px] rounded-full bg-white flex items-center justify-center shrink-0">
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.5 5L4 7.5L8.5 2.5" stroke="#F15A29" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <p className="font-grotesk font-normal text-[14px]">{item}</p>
                      </div>
                    ))}
                  </div>
                  <button className="border border-white rounded-full px-[20px] py-[8px] font-grotesk font-normal text-[14px] hover:bg-white hover:text-orange-500 transition-colors">
                    Saiba mais
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ERP Integration Note */}
          <div className="flex gap-[20px] items-stretch">
            <div className="border border-orange-500 rounded-[16px] px-[40px] py-[20px] flex-shrink-0 flex items-center justify-center">
              <p className="font-linear font-black text-[20px] text-[#111] whitespace-nowrap">Integração com o ERP</p>
            </div>
            <div className="border border-[#e8e8e8] rounded-[16px] px-[40px] py-[20px] flex-1 flex items-center">
              <p className="font-linear font-medium text-[16px] text-black">
                Se sua empresa utiliza ERP (Sankhya ou outro), integramos o BPO diretamente. Caso não possua módulo contábil ou estrutura adequada, realizamos o fechamento pelo Sistema Domínio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="w-full flex justify-center py-[40px] px-[20px] bg-white pt-[80px] pb-[80px]">
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
                  Quer estruturar sua contabilidade com{' '}
                  <span className="font-bold">previsibilidade?</span>
                </h2>
                <p className="font-grotesk font-medium text-[16px] leading-[1.5] text-white max-w-[274px]">
                  Agende uma conversa e receba um direcionamento claro.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-grey-900 font-grotesk font-medium text-[16px] px-[20px] py-[8px] rounded-full w-fit hover:bg-grey-50 transition-colors"
                >
                  Solicitar diagnóstico
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

      {/* Footer */}
      <Footer />
    </main>
  )
}
