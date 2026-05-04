'use client'

import { motion } from 'framer-motion'
import { ChevronDown, User } from 'lucide-react'
import { useState } from 'react'

export default function NavigationBar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="absolute inset-0 backdrop-blur-md bg-white/20 border-b border-white/20" />

      <div className="relative max-w-7xl mx-auto px-5 py-5">
        <div className="flex items-center justify-between gap-5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl px-6 py-5">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="h-9 w-28 flex-shrink-0"
          >
            <div className="h-full bg-white/20 rounded-lg flex items-center justify-center text-xs font-bold text-white">
              HABILITY
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <NavLink href="#erp">ERP Sankhya</NavLink>
            <NavLink href="#bpo">
              BPO Contábil
              <ChevronDown className="w-4 h-4 ml-2" />
            </NavLink>
            <NavLink href="#labs">
              Hability Labs
              <ChevronDown className="w-4 h-4 ml-2" />
            </NavLink>
            <NavLink href="#tributaria">Reforma Tributária</NavLink>
            <NavLink href="#about">
              Sobre Nós
              <ChevronDown className="w-4 h-4 ml-2" />
            </NavLink>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-5">
            <NavLink href="#login" className="hidden sm:flex">
              <User className="w-4 h-4 mr-2" />
              Login
            </NavLink>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm px-5 py-3 rounded-lg transition-colors"
            >
              Fale com um especialista
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

function NavLink({
  href,
  children,
  className = ''
}: {
  href: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.a
      href={href}
      whileHover={{ color: '#fabe9e' }}
      className={`text-white font-semibold text-sm flex items-center hover:text-orange-200 transition-colors ${className}`}
    >
      {children}
    </motion.a>
  )
}
