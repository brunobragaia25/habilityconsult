'use client'

import { motion } from 'framer-motion'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

const ASSETS = {
  checkmark: 'https://www.figma.com/api/mcp/asset/45eabd81-03eb-43ad-97b4-ea060fcf0ab0',
  checkmarkWhite: 'https://www.figma.com/api/mcp/asset/160f6d2e-7a2c-44eb-997e-3ebc15465f33',
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
      <section className="w-full flex justify-center bg-[#d9d9d9] pt-[210px] pb-[128px]">
        <div className="w-full max-w-[1280px] px-[20px] flex flex-col gap-[40px]">
          <div className="flex flex-col gap-[20px] max-w-[816px]">
            <h1 className="font-linear font-black text-[60px] leading-[61.6px] text-white">
              Fechamento todo mês virando<br />
              <span className="text-orange-500">correria?</span> <span className="text-orange-500">Isso não é inevitável.</span><br />
              <span className="text-orange-500">É falta de método.</span>
            </h1>
          </div>
          <div className="flex gap-[12px]">
            <button className="bg-[#e8e8e8] border border-[#c8c8c8] rounded-[12px] px-[20px] py-[12px] flex items-center gap-[12px] hover:opacity-80 transition-opacity">
              <span className="font-linear font-black text-[16px] text-black">Solicitar diagnóstico</span>
              <div className="w-[20px] h-[20px] bg-[#d9d9d9] rounded-[4px]" />
            </button>
            <button className="bg-[#e8e8e8] border border-[#c8c8c8] rounded-[12px] px-[20px] py-[12px] flex items-center gap-[12px] hover:opacity-80 transition-opacity">
              <span className="font-linear font-black text-[16px] text-black">Ver áreas do BPO</span>
              <div className="w-[20px] h-[20px] bg-[#d9d9d9] rounded-[4px]" />
            </button>
            <button className="bg-[#e8e8e8] border border-[#c8c8c8] rounded-[12px] px-[20px] py-[12px] flex items-center gap-[12px] hover:opacity-80 transition-opacity">
              <span className="font-linear font-black text-[16px] text-black">Geral</span>
              <div className="w-[20px] h-[20px] bg-[#d9d9d9] rounded-[4px]" />
            </button>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="w-full flex justify-center bg-white py-[80px]">
        <div className="w-full max-w-[1280px] px-[20px] flex justify-center">
          <p className="font-linear font-medium text-[24px] leading-[1.65] text-[#1e1e1e] text-center w-full">
            A Hability opera o BPO Contábil completo — contábil, fiscal e trabalhista — independentemente do ERP utilizado. Além de atender todas as obrigações exigidas pelo governo e pelo fisco, usamos a contabilidade em prol da gestão: entregamos informações organizadas, indicadores e base para dashboards e análises que apoiam decisões.
            <br /><br />
            Atuamos integrados ao seu sistema ou, quando necessário, realizamos o fechamento pelo Sistema Domínio, garantindo padrão, rastreabilidade e conformidade.
          </p>
        </div>
      </section>

      {/* Benefits Cards */}
      <section className="w-full flex justify-center bg-white py-[40px]">
        <div className="w-full max-w-[1280px] px-[20px] grid grid-cols-3 gap-[20px]">
          {[
            { title: 'Independente de ERP', desc: 'Atuamos no seu sistema atual ou via Domínio.' },
            { title: 'Fechamento com padrão', desc: 'Conciliações, evidências e rastreabilidade.' },
            { title: 'Previsibilidade', desc: 'Calendário, responsabilidades e entregáveis claros.' }
          ].map((item, idx) => (
            <div key={idx} className="bg-white border border-[#e8e8e8] rounded-[28px] p-[40px] flex flex-col gap-[28px]">
              <div className="flex flex-col gap-[20px]">
                <div className="w-[74px] h-[74px] border border-[rgba(250,190,158,0.4)] rounded-[20px] relative">
                  <div className="absolute w-[48px] h-[48px] bg-white rounded-[12px] shadow-[0px_11px_21.2px_-5px_rgba(241,90,41,0.2)] top-[13px] left-[13px]" />
                </div>
                <h3 className="font-grotesk font-bold text-[20px] text-orange-500">{item.title}</h3>
              </div>
              <p className="font-grotesk font-medium text-[16px] text-[#1e1e1e]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Compliance Section */}
      <section className="w-full flex justify-center bg-white py-[40px]">
        <div className="w-full max-w-[1280px] px-[20px]">
          <div className="flex flex-col gap-[40px] items-center mb-[40px]">
            <div className="text-center max-w-[720px]">
              <h2 className="font-linear font-medium text-[48px] leading-[1.1] text-[#111] mb-[20px]">
                <span className="font-grotesk font-medium">Compliance é o mínimo.</span><br />
                <span className="font-grotesk font-semibold text-orange-500">O que entregamos vai além.</span>
              </h2>
              <p className="font-grotesk font-medium text-[16px] text-[#4a4a4a]">
                Obrigação entregue no prazo é esperado. O diferencial é a informação organizada, os indicadores e a base pronta para quem decide.
              </p>
            </div>
          </div>

          {/* Info for CFO */}
          <div className="flex gap-[64px] items-center mb-[40px]">
            <div className="flex-1 bg-[#d9d9d9] h-[400px] rounded-[28px]" />
            <div className="flex-1 flex flex-col gap-[40px]">
              <div>
                <h3 className="font-grotesk font-bold text-[28px] text-orange-500 mb-[16px]">Informação para quem decide</h3>
                <p className="font-grotesk font-medium text-[20px] text-[#1e1e1e]">
                  Margem, despesas, resultado e variações com consistência — informação pronta para o CFO, não só para o auditor.
                </p>
              </div>
              <div className="flex flex-col gap-[16px]">
                {['Fechamento com trilha de ajustes', 'Comparativos (mês a mês / orçamento)', 'Pontos de atenção e recomendações'].map((item, idx) => (
                  <div key={idx} className="flex gap-[10px] items-center">
                    <img src={ASSETS.checkmark} alt="" className="w-4 h-4" />
                    <p className="font-grotesk font-medium text-[16px] text-black">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dashboard Section */}
          <div className="flex gap-[64px] items-center mb-[40px]">
            <div className="flex-1 flex flex-col gap-[40px]">
              <div>
                <h3 className="font-grotesk font-bold text-[28px] text-orange-500 mb-[16px]">Base pronta para dashboards</h3>
                <p className="font-grotesk font-medium text-[20px] text-[#1e1e1e]">
                  Quando o dado é padronizado, o dashboard funciona. Ajudamos a deixar a informação "pronta para gestão"
                </p>
              </div>
              <div className="flex flex-col gap-[16px]">
                {['Regras e cadastros consistentes', 'Dimensões (centro de custo, projeto, filial)', 'Rotina estável para atualização'].map((item, idx) => (
                  <div key={idx} className="flex gap-[10px] items-center">
                    <img src={ASSETS.checkmark} alt="" className="w-4 h-4" />
                    <p className="font-grotesk font-medium text-[16px] text-black">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 bg-[#d9d9d9] h-[400px] rounded-[28px]" />
          </div>

          {/* Governance Section */}
          <div className="flex gap-[64px] items-center">
            <div className="flex-1 bg-[#d9d9d9] h-[400px] rounded-[28px]" />
            <div className="flex-1 flex flex-col gap-[40px]">
              <div>
                <h3 className="font-grotesk font-bold text-[28px] text-orange-500 mb-[16px]">Governança que reduz ruído</h3>
                <p className="font-grotesk font-medium text-[20px] text-[#1e1e1e]">
                  Cada competência com checklist, evidências e responsável definido. Gestão que confia no processo — não que torce pra não ter surpresa.
                </p>
              </div>
              <div className="flex flex-col gap-[16px]">
                {['Checklist por competência', 'Conferências e aprovações', 'Rastreabilidade e padrão'].map((item, idx) => (
                  <div key={idx} className="flex gap-[10px] items-center">
                    <img src={ASSETS.checkmark} alt="" className="w-4 h-4" />
                    <p className="font-grotesk font-medium text-[16px] text-black">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
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
                items: ['Conciliações e revisões', 'DRE, Balanço e relatórios', 'Padronização de lançamentos']
              },
              {
                title: 'Fiscal',
                desc: 'Apuração de tributos e obrigações acessórias com consistência e conferência.',
                items: ['Registro de cadastros e regras', 'Apuração e validação', 'Redução de risco fiscal']
              },
              {
                title: 'Trabalhista',
                desc: 'Folha de pagamento, encargos e eventos trabalhistas com governança.',
                items: ['Processamento de folha', 'Eventos eSocial', 'Conferência e controle']
              }
            ].map((card, idx) => (
              <div key={idx} className="bg-orange-500 rounded-[28px] p-[32px] flex flex-col justify-between h-[450px] text-white">
                <div>
                  <div className="w-[40px] h-[40px] bg-[#fef0ef] rounded-[12px] mb-[20px]" />
                  <h3 className="font-grotesk font-semibold text-[20px] mb-[10px]">{card.title}</h3>
                  <p className="font-grotesk font-normal text-[14px]">{card.desc}</p>
                </div>
                <div className="flex flex-col gap-[40px]">
                  <div className="flex flex-col gap-[16px]">
                    {card.items.map((item, i) => (
                      <div key={i} className="flex gap-[16px] items-center">
                        <img src={ASSETS.checkmarkWhite} alt="" className="w-4 h-4" />
                        <p className="font-grotesk font-normal text-[14px]">{item}</p>
                      </div>
                    ))}
                  </div>
                  <button className="border border-white rounded-full px-[20px] py-[8px] font-grotesk font-normal text-[14px] hover:bg-white hover:text-orange-500 transition-colors">
                    Saiba mais
                  </button>
                </div>
              </div>
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

      {/* CTA Section */}
      <section className="w-full flex justify-center bg-white py-[40px] mb-[80px]">
        <div className="w-full max-w-[1280px] px-[20px]">
          <div className="bg-[#fef2ec] flex items-center justify-center p-[12px] rounded-[28px]">
            <div className="bg-gradient-to-r from-orange-500 via-[#fabe9e] to-orange-500 rounded-[16px] px-[80px] py-[60px] w-full flex items-center">
              <div className="flex flex-col gap-[28px] max-w-[488px]">
                <p className="font-grotesk font-normal text-[36px] leading-[1.1] text-white">
                  Quer estruturar sua contabilidade com previsibilidade?
                </p>
                <p className="font-grotesk font-medium text-[16px] text-white max-w-[274px]">
                  Agende uma conversa e receba um direcionamento claro.
                </p>
                <button className="bg-white text-[#111] font-grotesk font-medium text-[16px] px-[20px] py-[8px] rounded-full w-fit hover:opacity-90 transition-opacity">
                  Solicitar diagnóstico
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
