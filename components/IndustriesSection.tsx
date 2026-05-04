'use client'

import { motion } from 'framer-motion'

export default function IndustriesSection() {
  const industries = [
    {
      title: 'Industrial e Manufatura',
      description: 'PCP, apontamentos, custo de produção, WMS, estoque e integração fiscal/financeiro sem divergências.'
    },
    {
      title: 'Distribuição e varejo',
      description: 'Compras, vendas, faturamento, conferência de expedição e automações operacionais com rastreabilidade.'
    },
    {
      title: 'Serviços e tecnologia',
      description: 'Financeiro, contratos recorrentes, faturamento e governança contábil/fiscal/trabalhista integrada.'
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
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-6"
        >
          {industries.map((industry, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white border border-grey-100 rounded-3xl p-10 hover:shadow-2xl transition-all"
            >
              {/* Icon */}
              <motion.div
                className="w-20 h-20 bg-orange-100 rounded-2xl flex items-center justify-center mb-6"
                whileHover={{ rotate: 10, scale: 1.05 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl" />
              </motion.div>

              <h3 className="text-xl font-bold text-orange-500 mb-4">{industry.title}</h3>
              <p className="text-grey-600 text-sm leading-relaxed">{industry.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
