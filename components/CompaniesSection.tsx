'use client'

import { motion } from 'framer-motion'

export default function CompaniesSection() {
  const companies = Array(9).fill(0)

  return (
    <section className="relative py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-4">
            Empresas que já trabalham com{' '}
            <span className="text-orange-500">estrutura, não com improviso.</span>
          </h2>
          <p className="text-lg text-grey-600">
            Atuamos em médias e grandes empresas nos setores de indústria, distribuição, varejo e serviços.
          </p>
        </motion.div>

        {/* Companies Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {companies.map((_, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5, scale: 1.02 }}
              className="h-20 bg-grey-200 rounded-3xl flex items-center justify-center cursor-pointer group"
            >
              <span className="text-sm font-semibold text-grey-600 group-hover:text-grey-900 transition-colors">
                logo da empresa
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
