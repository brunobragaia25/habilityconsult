'use client'

import { motion } from 'framer-motion'

export default function ServicesSection() {
  const services = [
    {
      number: '01',
      title: 'BPO Contábil Completo',
      description: 'Além de cumprir as obrigações do fisco, usamos a contabilidade como ferramenta de gestão: fechamento previsível, indicadores confiáveis e base sólida para decisão. Funciona em qualquer ERP.'
    },
    {
      number: '02',
      title: 'Consultoria ERP Sankhya',
      description: 'Diagnóstico técnico real, mapeamento de gargalos e entrega de estabilidade com governança — em compras, vendas, financeiro, produção, WMS e integrações.'
    },
    {
      number: '03',
      title: 'Hability Labs',
      description: 'Integrações customizadas, automações operacionais e aplicações web/mobile que conversam perfeitamente com seu ERP.'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section className="relative py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-6">
            Três frentes. Um parceiro.{' '}
            <span className="text-orange-500">Operação que funciona de verdade.</span>
          </h2>
          <p className="text-lg text-grey-500 max-w-3xl mx-auto">
            A Hability atua onde a maioria da consultoria não chega:{' '}
            <span className="font-bold">na interseção entre ERP, contabilidade e Hability Labs — onde o retrabalho mora.</span>
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-6"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="relative bg-gradient-to-br from-orange-600 to-orange-700 rounded-2xl p-1 overflow-hidden group"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-orange-500 to-orange-800" />

              <div className="relative bg-grey-900 rounded-xl p-10 h-full flex flex-col justify-between">
                {/* Icon + Number */}
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-3xl">{service.number}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{service.description}</p>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm px-5 py-2 rounded-lg transition-colors"
                  >
                    Ver mais
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border border-white text-white font-bold text-sm px-5 py-2 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    Solicitar diagnóstico
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
