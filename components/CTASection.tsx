'use client'

import { motion } from 'framer-motion'

export default function CTASection() {
  return (
    <section className="relative py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 rounded-2xl p-12 lg:p-16 overflow-hidden"
        >
          {/* Decorative background */}
          <motion.div
            animate={{
              x: [0, 20, 0],
              y: [0, -10, 0]
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute right-0 top-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -z-10"
          />

          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Sua operação tem um gargalo que <span className="font-black">você já sabe que existe.</span>
            </h2>
            <p className="text-lg text-white/90 mb-8">
              O primeiro passo é uma conversa de 30 minutos com quem entende ERP e contabilidade de verdade.
            </p>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-white hover:bg-grey-50 text-grey-900 font-bold text-base px-8 py-4 rounded-full transition-all inline-block"
            >
              Fale com um especialista
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
