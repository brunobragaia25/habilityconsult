'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

// Asset constants from Figma
const ICONS = {
  governanca: 'https://www.figma.com/api/mcp/asset/41c447dd-a0b1-46f8-942a-ca2839c945ea',
  previsibilidade: 'https://www.figma.com/api/mcp/asset/4065ad29-a5d2-4e7e-8764-aa7b06f2ad8a',
  gestao: 'https://www.figma.com/api/mcp/asset/b0535634-c328-495d-80f4-80b1d73af4d3',
  separatorLine: 'https://www.figma.com/api/mcp/asset/b6d5bd21-972d-4e6f-9b72-65abbc524799',
  deliveryIcon: 'https://www.figma.com/api/mcp/asset/053c38ed-4018-4365-8c25-17761d12288e',
  exampleIcon: 'https://www.figma.com/api/mcp/asset/acae3aca-8f29-4284-bb72-f4cb573b1132',
  dividerLine: 'https://www.figma.com/api/mcp/asset/26bb92c4-ff9b-4cf2-b068-292f5b8cb426',
  topSeparator: 'https://www.figma.com/api/mcp/asset/165e0b58-955d-4f31-9abf-844ccb6fe1d2',
  checkIcon: 'https://www.figma.com/api/mcp/asset/bff481d4-e6c7-4ad7-8bcc-e5d10628f870',
  itemSeparator: 'https://www.figma.com/api/mcp/asset/a84b2324-2361-4e00-8d24-dc1e0650e136',
  faqSeparator: 'https://www.figma.com/api/mcp/asset/d954d1ac-a37c-4b47-82f7-a4b9c2aa9162',
  plusIcon: 'https://www.figma.com/api/mcp/asset/92084012-0289-4c88-9100-f974b64498a4',
  faqDivider: 'https://www.figma.com/api/mcp/asset/b2e90698-c99f-4f1b-9151-38ec43353186',
}

export default function BPOContabil() {
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    email: '',
    mensagem: '',
  })
  const [openFaqIndex, setOpenFaqIndex] = useState(0)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <main className="w-full bg-white">
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

      {/* Hero Section */}
      <section
        className="w-full flex justify-center"
        style={{
          backgroundImage: `linear-gradient(135deg, #F15330 0%, #F15330 100%), url(/bg-bpo-contabil.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
        data-name="Hero-Section"
      >
        <div className="w-full max-w-[1280px] px-[20px] flex gap-[64px] items-center pt-[236px] pb-[128px]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-[40px] items-start flex-1"
          >
            {/* Badge */}
            <div className="bg-[#fef0ef] rounded-full px-[12px] py-[4px] flex items-center justify-center">
              <p className="font-grotesk font-light text-[10px] text-[#111] tracking-[2.4px] uppercase whitespace-nowrap">
                BPO Contábil
              </p>
            </div>

            {/* Title */}
            <div className="flex flex-col gap-[8px]">
              <h1 className="font-grotesk font-bold text-[44px] leading-[1.2] text-white">
                Um fechamento organizado, conciliações com evidências e{' '}
                <span className="text-[#fabe9e] font-light">números prontos para apoiar decisões.</span>
              </h1>
            </div>

            {/* Description */}
            <p className="font-grotesk font-light text-[16px] leading-[24px] text-white max-w-[565px]">
              Atuamos diretamente no ERP do cliente ou por meio do nosso sistema interno, garantindo organização,
              calendário de obrigações, checklists de controle e trilha de auditoria em cada entrega.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-[12px] items-start">
              {/* Button 1 - White Border */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white rounded-[8px] px-[12px] py-[12px] flex gap-[12px] items-center justify-center group hover:bg-white/10 transition-colors"
              >
                <span className="font-grotesk font-light text-[14px] text-white">Solicitar contato</span>
                <div className="bg-white rounded-[4px] flex items-center justify-center w-[20px] h-[20px]">
                  <ChevronDown className="w-[16px] h-[16px] text-[#F15330] rotate-[-90deg]" />
                </div>
              </motion.button>

              {/* Button 2 - Orange */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#f37c4a] rounded-[8px] px-[12px] py-[12px] flex gap-[12px] items-center justify-center hover:bg-[#f26b39] transition-colors"
              >
                <span className="font-grotesk font-light text-[14px] text-white">Ver Escopo</span>
                <div className="bg-white rounded-[4px] flex items-center justify-center w-[20px] h-[20px]">
                  <ChevronDown className="w-[16px] h-[16px] text-[#f37c4a] rotate-[-90deg]" />
                </div>
              </motion.button>

              {/* Button 3 - Light Orange */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#fabe9e] rounded-[8px] px-[12px] py-[12px] flex gap-[12px] items-center justify-center hover:bg-[#f5a889] transition-colors"
              >
                <span className="font-grotesk font-light text-[14px] text-[#363636]">Ver visão geral</span>
                <div className="bg-[#f15a29] rounded-[4px] flex items-center justify-center w-[20px] h-[20px]">
                  <ChevronDown className="w-[16px] h-[16px] text-white rotate-[-90deg]" />
                </div>
              </motion.button>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 bg-white/90 backdrop-blur-[22.3px] rounded-[28px] p-[32px] flex flex-col gap-[20px]"
          >
            {/* Name Input */}
            <div className="flex flex-col gap-[10px]">
              <label className="font-grotesk font-light text-[12px] text-[#4a4a4a] tracking-[1.56px] uppercase">
                Nome
              </label>
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleInputChange}
                placeholder="Seu nome completo"
                className="border border-[#fabe9e] rounded-full px-[20px] py-[12px] font-grotesk font-light text-[14px] text-[#a0a0a0] placeholder-[#a0a0a0] focus:outline-none focus:border-[#f15a29] transition-colors"
              />
            </div>

            {/* WhatsApp and Email Row */}
            <div className="flex gap-[20px]">
              <div className="flex-1 flex flex-col gap-[10px]">
                <label className="font-grotesk font-light text-[12px] text-[#4a4a4a] tracking-[1.56px] uppercase">
                  WhatsApp
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  placeholder="(11) 99999-9999"
                  className="border border-[#fabe9e] rounded-full px-[20px] py-[12px] font-grotesk font-light text-[14px] text-[#a0a0a0] placeholder-[#a0a0a0] focus:outline-none focus:border-[#f15a29] transition-colors"
                />
              </div>
              <div className="flex-1 flex flex-col gap-[10px]">
                <label className="font-grotesk font-light text-[12px] text-[#4a4a4a] tracking-[1.56px] uppercase">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="voce@email.com"
                  className="border border-[#fabe9e] rounded-full px-[20px] py-[12px] font-grotesk font-light text-[14px] text-[#a0a0a0] placeholder-[#a0a0a0] focus:outline-none focus:border-[#f15a29] transition-colors"
                />
              </div>
            </div>

            {/* Message Textarea */}
            <div className="flex flex-col gap-[10px]">
              <label className="font-grotesk font-light text-[12px] text-[#4a4a4a] tracking-[1.56px] uppercase">
                Comente brevemente a sua situação
              </label>
              <textarea
                name="mensagem"
                value={formData.mensagem}
                onChange={handleInputChange}
                placeholder="Qual é o principal problema no seu fechamento contábil hoje?"
                className="border border-[#fabe9e] rounded-[16px] px-[20px] py-[12px] h-[120px] font-grotesk font-light text-[14px] text-[#a0a0a0] placeholder-[#a0a0a0] focus:outline-none focus:border-[#f15a29] transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSubmit}
              className="bg-[#ef4136] rounded-[12px] px-[74px] py-[16px] font-grotesk font-light text-[14px] text-[#fef0ef] hover:bg-[#e63a2f] transition-colors"
            >
              Solicitar avaliação gratuita
            </motion.button>

            {/* LGPD Notice */}
            <p className="font-grotesk font-light text-[11px] text-[#4a4a4a] text-center">
              Seus dados são protegidos conforme a LGPD e nunca serão compartilhados com terceiros.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefit Cards Section */}
      <section className="w-full flex justify-center py-[80px] pb-[40px]" data-name="Benefits">
        <div className="w-full max-w-[1280px] px-[20px]">
          <div className="flex gap-[20px] items-stretch">
            {/* Card 1 - Governança */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex-1 bg-[#c8c8c8] rounded-[20px] p-[28px] flex flex-col gap-[11px] justify-end h-[500px] group hover:shadow-lg transition-shadow"
            >
              <div className="bg-[#fef0ef] rounded-[12px] w-[40px] h-[40px] flex items-center justify-center">
                <img src={ICONS.governanca} alt="Governança" className="w-[20px] h-[20px]" />
              </div>
              <h3 className="font-grotesk font-bold text-[20px] leading-[22px] text-white">Governança</h3>
              <p className="font-grotesk font-light text-[14px] leading-[19.94px] text-white">
                Calendário, evidências e responsabilidades.
              </p>
            </motion.div>

            {/* Card 2 - Previsibilidade */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex-1 bg-[#c8c8c8] rounded-[20px] p-[28px] flex flex-col gap-[11px] justify-end h-[500px] group hover:shadow-lg transition-shadow"
            >
              <div className="bg-[#fef0ef] rounded-[12px] w-[40px] h-[40px] flex items-center justify-center">
                <img src={ICONS.previsibilidade} alt="Previsibilidade" className="w-[20px] h-[20px]" />
              </div>
              <h3 className="font-grotesk font-bold text-[20px] leading-[22px] text-white">Previsibilidade</h3>
              <p className="font-grotesk font-light text-[14px] leading-[19.94px] text-white">
                Rotina estável e entregáveis claros.
              </p>
            </motion.div>

            {/* Card 3 - Gestão */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex-1 bg-[#c8c8c8] rounded-[20px] p-[28px] flex flex-col gap-[11px] justify-end h-[500px] group hover:shadow-lg transition-shadow"
            >
              <div className="bg-[#fef0ef] rounded-[12px] w-[40px] h-[40px] flex items-center justify-center">
                <img src={ICONS.gestao} alt="Gestão" className="w-[20px] h-[20px]" />
              </div>
              <h3 className="font-grotesk font-bold text-[20px] leading-[22px] text-white">Gestão</h3>
              <p className="font-grotesk font-light text-[14px] leading-[19.94px] text-white">
                Dados consistentes para indicadores e dashboards.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="w-full flex justify-center bg-white py-[40px]">
        <div className="w-full max-w-[1280px] px-[20px] flex flex-col gap-[20px]">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col gap-[20px] items-center text-center mb-[60px]"
          >
            <p className="font-grotesk font-medium text-[12px] text-orange-500 tracking-[1.56px] uppercase">
              Escopo do serviço
            </p>
            <h2 className="font-grotesk font-medium text-[48px] leading-[1.1] text-grey-900">
              O que está <span className="font-bold text-orange-500">incluído</span>
            </h2>
          </motion.div>

          {/* Activities Covered Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="border border-[#e8e8e8] rounded-[28px] p-[28px] flex gap-[40px]"
          >
            <div className="flex-1 bg-[#d9d9d9] rounded-[16px] min-h-[400px]" />
            <div className="flex-1 flex flex-col gap-[20px]">
              <div className="bg-red-500 inline-flex items-center justify-center px-[12px] py-[4px] rounded-full w-fit">
                <p className="font-grotesk font-normal text-[10px] text-white tracking-[2.4px] uppercase">
                  Atividades Cobertas
                </p>
              </div>

              {[
                {
                  title: 'Fechamento contábil mensal',
                  text: 'estruturado, com registro detalhado das movimentações, documentação de suporte e rastreabilidade completa.'
                },
                {
                  title: 'Conciliações',
                  text: 'periódicas e documentadas de bancos, clientes, fornecedores e contas patrimoniais.'
                },
                {
                  title: 'Demonstrações',
                  text: 'contábeis e relatórios gerenciais para acompanhamento de desempenho e apoio à decisão.'
                },
                {
                  title: 'Padronização',
                  text: 'de lançamentos, critérios e classificações contábeis, garantindo consistência ao longo do tempo.'
                },
                {
                  title: 'Integração',
                  text: 'com as áreas fiscal e trabalhista, garantindo alinhamento de informações e maior confiabilidade dos dados.'
                }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col gap-[20px]">
                  <p className="font-grotesk font-medium text-[16px] leading-[1.5] text-grey-900">
                    <span className="text-orange-500 font-bold">{item.title}</span>
                    {' '}{item.text}
                  </p>
                  {idx < 4 && <div className="h-px bg-grey-200" />}
                </div>
              ))}
            </div>
          </motion.div>

          {/* How We Deliver Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="border border-[#e8e8e8] rounded-[28px] p-[28px] flex flex-col gap-[20px]"
          >
            <div className="bg-red-500 inline-flex items-center justify-center px-[12px] py-[4px] rounded-full w-fit">
              <p className="font-grotesk font-normal text-[10px] text-white tracking-[2.4px] uppercase">
                Como Entregamos
              </p>
            </div>

            <div className="grid grid-cols-3 gap-[20px]">
              {[
                'Calendário estruturado de fechamento, com definição clara de prazos e responsabilidades.',
                'Checklist por competência com pontos formais de conferência, garantindo controle e consistência na execução.',
                'SLA definido e canais dedicados para atendimento da rotina, assegurando previsibilidade e agilidade nas demandas.'
              ].map((text, idx) => (
                <div key={idx} className="bg-[#fef2ec] rounded-[12px] p-[40px] flex flex-col gap-[20px]">
                  <div className="relative w-[86px] h-[86px]">
                    <div className="absolute inset-0 bg-white rounded-full ml-[15px] mt-[16px] w-[56px] h-[56px] shadow-[0px_11px_21.2px_-5px_rgba(241,90,41,0.2)]" />
                    <img
                      src={ICONS.deliveryIcon}
                      alt="Icon"
                      className="absolute ml-[31px] mt-[31px] w-[24px] h-[24px]"
                    />
                    <div className="absolute inset-0 border border-[#fabe9e] rounded-full opacity-30" />
                  </div>
                  <p className="font-grotesk font-medium text-[16px] leading-[1.5] text-grey-900">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* For Who Section */}
      <section className="w-full flex justify-center bg-white py-[40px]">
        <div className="w-full max-w-[1280px] px-[20px] flex flex-col gap-[60px]">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col gap-[20px] items-center text-center"
          >
            <p className="font-grotesk font-medium text-[12px] text-orange-500 tracking-[1.56px] uppercase">
              Para quem é
            </p>
            <h2 className="font-grotesk font-medium text-[48px] leading-[1.1] text-grey-900">
              Exemplos típicos onde este
              <br />
              <span className="font-semibold text-orange-500">BPO gera resultado rapidamente.</span>
            </h2>
          </motion.div>

          {/* Content */}
          <div className="flex gap-[40px] items-center">
            {/* Left Examples */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex-1 flex flex-col gap-[40px]"
            >
              {[
                {
                  title: 'Fechamento "sempre atrasado"',
                  description: 'Rotina sem padrão, reaberturas e falta de previsibilidade.'
                },
                {
                  title: 'Gestão sem confiança nos números',
                  description: 'Quando o relatório não transmite segurança, as decisões ficam mais lentas e o crescimento perde ritmo.'
                },
                {
                  title: 'Energia consumida no básico',
                  description: 'Tempo demais resolvendo inconsistências e pouco tempo analisando o que realmente importa.'
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-[24px] items-start">
                  <div className="flex-shrink-0 w-[48px] h-[48px] rounded-full bg-orange-500 flex items-center justify-center">
                    <img src={ICONS.exampleIcon} alt="Icon" className="w-[24px] h-[24px]" />
                  </div>
                  <div className="flex-1 flex flex-col gap-[20px]">
                    <div>
                      <h3 className="font-grotesk font-medium text-[20px] text-grey-900 mb-[16px]">
                        {item.title}
                      </h3>
                      <p className="font-grotesk font-normal text-[14px] text-grey-600 leading-[1.5]">
                        {item.description}
                      </p>
                    </div>
                    {idx < 2 && <div className="h-px bg-grey-200" />}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Right Image Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex-1 min-h-[600px] rounded-[16px] border border-orange-500/30 p-[10px] flex flex-col"
            >
              <div className="flex-1 rounded-[12px] bg-[#d9d9d9]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="w-full flex justify-center bg-white py-[40px]">
        <div className="w-full max-w-[1280px] px-[20px] flex flex-col gap-[40px]">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col gap-[20px]"
          >
            <p className="font-grotesk font-medium text-[12px] text-orange-500 tracking-[1.56px] uppercase">
              Entregáveis
            </p>
            <h2 className="font-grotesk font-medium text-[48px] leading-[1.1] text-grey-900 max-w-[672px]">
              O que você recebe na rotina —
              <br />
              <span className="font-semibold text-orange-500">com padrão, conferência e rastreabilidade.</span>
            </h2>
          </motion.div>

          {/* Separator Line */}
          <div className="h-px bg-grey-200" />

          {/* Content */}
          <div className="flex gap-[40px] items-center">
            {/* Left Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex-1 min-h-[600px] rounded-[16px] border border-orange-500/30 p-[10px] flex flex-col"
            >
              <div className="flex-1 rounded-[12px] bg-[#d9d9d9]" />
            </motion.div>

            {/* Right List */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex-1 flex flex-col gap-[28px]"
            >
              {[
                'Calendário estruturado de fechamento com checklists por etapa, garantindo organização e previsibilidade na rotina.',
                'Conciliações documentadas e suportadas por evidências, assegurando consistência e confiabilidade nos números.',
                'Relatórios e análises gerenciais, com destaque para variações relevantes e pontos de atenção.',
                'Base contábil organizada e preparada para geração de indicadores e dashboards.',
                'Documentação formal de critérios, regras e padronizações contábeis, promovendo uniformidade e segurança ao longo do tempo.'
              ].map((text, idx) => (
                <div key={idx} className="flex flex-col gap-[28px]">
                  <div className="flex gap-[10px] items-flex-start">
                    <div className="flex-shrink-0 w-[16px] h-[16px] mt-[4px]">
                      <img src={ICONS.checkIcon} alt="Check" className="w-full h-full" />
                    </div>
                    <p className="font-grotesk font-medium text-[16px] leading-[1.5] text-grey-900">
                      {text}
                    </p>
                  </div>
                  {idx < 4 && <div className="h-px bg-grey-200" />}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full flex justify-center bg-white py-[40px] pb-[80px]">
        <div className="w-full max-w-[1280px] px-[20px] flex flex-col gap-[40px]">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col gap-[20px] items-center text-center"
          >
            <p className="font-grotesk font-medium text-[12px] text-orange-500 tracking-[1.56px] uppercase">
              FAQ
            </p>
            <h2 className="font-grotesk font-medium text-[48px] leading-[1.1] text-grey-900">
              Perguntas <span className="font-semibold text-orange-500">frequentes</span>
            </h2>
          </motion.div>

          {/* Separator */}
          <div className="h-px bg-grey-200" />

          {/* Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col gap-[20px]"
          >
            {[
              {
                question: 'Preciso migrar de ERP para contratar?',
                answer: 'Não. Atuamos diretamente no seu ERP atual — como Sankhya, TOTVS, SAP ou outro. Caso não haja módulo contábil adequado, podemos operar por meio do nosso sistema interno, sem necessidade de contratação de módulo adicional.'
              },
              {
                question: 'Vocês entregam mais do que obrigação fiscal?',
                answer: 'Sim, entregamos muito mais. Além das obrigações fiscais, fornecemos análises gerenciais, relatórios estruturados, indicadores de desempenho e suporte à tomada de decisão estratégica da empresa.'
              },
              {
                question: 'Como é o processo de entrada?',
                answer: 'O processo é simples: começamos com uma triagem inicial para entender seus objetivos e criticidades, depois fazemos um diagnóstico detalhado de seu cenário atual, estruturamos um plano priorizado de ação e iniciamos a implementação com governança total.'
              }
            ].map((item, idx) => (
              <motion.button
                key={idx}
                onClick={() => setOpenFaqIndex(openFaqIndex === idx ? -1 : idx)}
                className={`w-full text-left transition-all duration-300 rounded-[12px] border p-[20px] flex flex-col gap-[20px] ${
                  openFaqIndex === idx
                    ? 'bg-[#FDE0D0] border-[#FABE9E]'
                    : 'bg-[#E8E8E8] border-[#C8C8C8]'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <p className={`font-grotesk font-bold text-[16px] leading-[1.5] ${
                    openFaqIndex === idx ? 'text-orange-500' : 'text-grey-900'
                  }`}>
                    {item.question}
                  </p>
                  <motion.div
                    animate={{ rotate: openFaqIndex === idx ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 w-[24px] h-[24px]"
                  >
                    <img src={ICONS.plusIcon} alt="Toggle" className="w-full h-full" />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openFaqIndex === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="h-px bg-grey-300 mb-[20px]" />
                      <p className="font-grotesk font-normal text-[14px] leading-[1.5] text-grey-900">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
