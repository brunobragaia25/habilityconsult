'use client'

import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const testimonials = [
    {
      name: 'Bruno Bragaia',
      role: 'Diretor de Operações • Indústria',
      quote: 'A Hability transformou completamente nossa operação. Antes éramos reféns do ERP, agora temos governança e previsibilidade nos fechamentos.'
    },
    {
      name: 'Maria Silva',
      role: 'Controller • Distribuição',
      quote: 'Pela primeira vez conseguimos fechar o mês completo em 2 dias. A integração ERP + Contabilidade funcionando perfeitamente.'
    },
    {
      name: 'João Santos',
      role: 'CEO • Tecnologia',
      quote: 'Hability Labs nos entregou a integração que ninguém mais queria tocar. Perfeita, em prazo, sem gambiarras.'
    }
  ]

  return (
    <section className="relative py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-6">
            O que os clientes dizem depois de{' '}
            <span className="text-orange-500">ter a operação estruturada</span>
          </h2>
        </motion.div>

        {/* Testimonial Card */}
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white border-2 border-grey-100 rounded-2xl p-12 max-w-3xl mx-auto"
        >
          {/* Stars */}
          <div className="flex gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-2xl">⭐</span>
            ))}
          </div>

          {/* Quote */}
          <p className="text-2xl font-bold text-grey-900 mb-8">
            {testimonials[current].quote}
          </p>

          {/* Author */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-300 to-orange-500 rounded-full" />
            <div>
              <p className="font-bold text-grey-900">{testimonials[current].name}</p>
              <p className="text-orange-500 font-bold text-sm">{testimonials[current].role}</p>
            </div>
          </div>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrent((current - 1 + testimonials.length) % testimonials.length)}
            className="w-12 h-12 rounded-full bg-grey-200 hover:bg-orange-500 text-grey-900 hover:text-white transition-colors flex items-center justify-center"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <div className="flex items-center gap-2">
            {testimonials.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === current ? 'bg-orange-500 w-8' : 'bg-grey-300'
                }`}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrent((current + 1) % testimonials.length)}
            className="w-12 h-12 rounded-full bg-orange-500 hover:bg-orange-600 text-white transition-colors flex items-center justify-center"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
