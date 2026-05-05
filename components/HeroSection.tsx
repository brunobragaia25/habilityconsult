'use client'

import { motion } from 'framer-motion'

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-500" />

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-400 to-transparent rounded-full blur-3xl opacity-40"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-600 to-transparent rounded-full blur-3xl opacity-40"
      />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative max-w-7xl mx-auto px-5 z-10 py-20"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div variants={containerVariants} className="space-y-8">
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 w-fit"
            >
              <img src="/astherisc-icon.svg" alt="" className="w-5 h-5" />
              <span className="text-xs font-bold text-grey-800 uppercase tracking-wider">
                ERP SANKHYA • BPO CONTÁBIL • HABILITY LABS
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                ERP travado. Fechamento atrasado. O problema tem nome{' '}
                <span className="text-orange-200">— e tem solução.</span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-white/90 max-w-xl leading-relaxed"
            >
              ERP e contabilidade desalinhados geram retrabalho, fechamentos caóticos e decisões cegas. A Hability resolve nas duas frentes: Consultoria ERP Sankhya (compras, vendas, financeiro, produção, WMS e integrações) e BPO Contábil completo — com processo, governança e rastreabilidade.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group border-2 border-white text-white font-bold text-sm px-6 py-3 rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2"
              >
                Ver Consultoria ERP
                <div className="w-5 h-5 rounded bg-white flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                  <img src="/chevron-down-black.svg" alt="" className="w-3 h-3" />
                </div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-orange-400 hover:bg-orange-500 text-white font-bold text-sm px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
              >
                Ver BPO Contábil
                <div className="w-5 h-5 rounded bg-white flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                  <img src="/chevron-down-black.svg" alt="" className="w-3 h-3" />
                </div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-orange-200 hover:bg-orange-300 text-grey-800 font-bold text-sm px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
              >
                Ver Hability Labs
                <div className="w-5 h-5 rounded bg-orange-500 flex items-center justify-center">
                  <img src="/chevron-down-white.svg" alt="" className="w-3 h-3" />
                </div>
              </motion.button>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 pt-8 border-t border-white/20"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-11 h-11 rounded-full border-2 border-white bg-gradient-to-r from-orange-300 to-orange-500"
                  />
                ))}
              </div>
              <div>
                <p className="font-bold text-white text-lg">+ de 100 clientes</p>
                <p className="text-white/80 text-sm">atendidos em todo Brasil</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Placeholder */}
          <motion.div
            variants={itemVariants}
            className="hidden lg:block h-96 bg-gradient-to-bl from-orange-400 to-orange-600 rounded-2xl shadow-2xl"
          />
        </div>
      </motion.div>
    </section>
  )
}
