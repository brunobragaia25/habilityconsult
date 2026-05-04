'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function ProcessSection() {
  const [expanded, setExpanded] = useState(0)

  const steps = [
    {
      title: 'Triagem (30 min)',
      description: 'Entendemos objetivo, criticidade, módulos ou rotinas afetados e prazos. Você sai com um próximo passo claro — sem enrolação.'
    },
    {
      title: 'Diagnóstico',
      description: 'Análise profunda das dores atuais, mapeamento de processos e identificação de oportunidades de melhoria.'
    },
    {
      title: 'Plano Priorizado',
      description: 'Roadmap claro com prioridades, impacto e prazos. Sem coisas óbvias que ninguém quer fazer.'
    },
    {
      title: 'Execução com rastreabilidade',
      description: 'Implementação com governança total, trilha de auditoria, evidências e entrega de valor incremental.'
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-6">
            Como trabalhamos —{' '}
            <span className="text-orange-500">processo definido, não improviso</span>
          </h2>
          <p className="text-lg text-grey-600 max-w-2xl mx-auto">
            Mesma lógica para ERP e BPO: diagnóstico com evidência, prioridade por impacto, execução com governança e rastreabilidade.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto space-y-3"
        >
          {steps.map((step, idx) => (
            <motion.button
              key={idx}
              onClick={() => setExpanded(expanded === idx ? -1 : idx)}
              className={`w-full text-left transition-all ${
                expanded === idx
                  ? 'bg-orange-100 border border-orange-300'
                  : 'bg-grey-100 border border-grey-200 hover:bg-grey-200'
              } rounded-2xl p-6`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    expanded === idx ? 'bg-white' : 'bg-grey-300'
                  }`} />
                  <div>
                    <p className={`font-bold ${expanded === idx ? 'text-orange-600' : 'text-grey-900'}`}>
                      {step.title}
                    </p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: expanded === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className={`w-6 h-6 ${expanded === idx ? 'text-orange-600' : 'text-grey-600'}`} />
                </motion.div>
              </div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: expanded === idx ? 1 : 0,
                  height: expanded === idx ? 'auto' : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-grey-600 text-sm mt-4">{step.description}</p>
              </motion.div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
