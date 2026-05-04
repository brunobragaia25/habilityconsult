'use client'

import { motion } from 'framer-motion'

export default function BenefitsSection() {
  const benefits = [
    {
      title: 'ERP estável em todos os módulos',
      description: 'Sustentação, melhorias e projetos em compras, vendas, financeiro, produção e WMS.'
    },
    {
      title: 'Fechamento que não atrasa',
      description: 'BPO contábil + fiscal + trabalhista com calendário, trilha de auditoria e evidências.'
    },
    {
      title: 'Próximo passo em 30 min',
      description: 'Triagem objetiva → diagnóstico → backlog priorizado. Sem enrolação, sem pitch de vendas.'
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="relative py-20 lg:py-32 bg-white border-t border-grey-200">
      <div className="max-w-7xl mx-auto px-5">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="flex flex-col gap-4"
            >
              <motion.div
                className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <div className="w-10 h-10 bg-orange-500 rounded-lg" />
              </motion.div>
              <h3 className="text-xl font-bold text-grey-900">{benefit.title}</h3>
              <p className="text-grey-600 text-sm leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
