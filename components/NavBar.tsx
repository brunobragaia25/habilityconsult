'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, CircleUserRound } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

// Assets from Figma
const ASSETS = {
  logoLight: '/logo-hability.svg',
  logoDark: '/logo-hability-dark.svg',
}

export default function NavBar({ transparent = false }: { transparent?: boolean }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isBPOMenuOpen, setIsBPOMenuOpen] = useState(false)
  const [isHabilityLabsMenuOpen, setIsHabilityLabsMenuOpen] = useState(false)
  const [isAboutMenuOpen, setIsAboutMenuOpen] = useState(false)
  const [selectedHabilityTab, setSelectedHabilityTab] = useState('aplicativos')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleBPOMenuClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsHabilityLabsMenuOpen(false)
    setIsAboutMenuOpen(false)
    setIsBPOMenuOpen(!isBPOMenuOpen)
  }

  const handleHabilityMenuClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsBPOMenuOpen(false)
    setIsAboutMenuOpen(false)
    setIsHabilityLabsMenuOpen(!isHabilityLabsMenuOpen)
  }

  const handleAboutMenuClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsBPOMenuOpen(false)
    setIsHabilityLabsMenuOpen(false)
    setIsAboutMenuOpen(!isAboutMenuOpen)
  }

  const closeAllMenus = () => {
    setIsBPOMenuOpen(false)
    setIsHabilityLabsMenuOpen(false)
    setIsAboutMenuOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = () => {
      closeAllMenus()
    }

    if (isBPOMenuOpen || isHabilityLabsMenuOpen || isAboutMenuOpen) {
      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener('click', handleClickOutside)
    }
  }, [isBPOMenuOpen, isHabilityLabsMenuOpen, isAboutMenuOpen])

  const textColor = isScrolled ? 'text-grey-900' : 'text-white'
  const hoverColor = isScrolled ? 'hover:text-grey-700' : 'hover:text-grey-300'
  const iconColor = isScrolled ? 'text-grey-900' : 'text-white'
  const iconHoverColor = isScrolled ? 'group-hover:text-grey-700' : 'group-hover:text-grey-300'

  return (
    <div className="w-full relative z-50">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full flex items-center justify-center relative mt-[20px]"
      >
        <div className="flex-1 inline-grid place-items-start relative w-full max-w-[1280px] px-[20px]" data-name="nav-bar">
        {/* Main Nav Container */}
        <div
          className={`content-stretch flex items-center justify-between p-[20px] relative rounded-[20px] w-full transition-all duration-300 backdrop-blur-lg ${
            transparent
              ? isScrolled
                ? 'bg-white/60 border border-white/40 shadow-lg'
                : 'bg-transparent border border-transparent'
              : isScrolled
              ? 'bg-white/60 border border-white/40 shadow-lg'
              : 'bg-white/20 border border-white/20'
          }`}
          data-name="Nav-Bar"
        >
          {/* Logo */}
          <Link href="/" className="h-[36px] w-[114px] relative shrink-0" data-name="Logo">
            <img
              alt="Hability Consult"
              className="absolute block inset-0 max-w-none size-full"
              src={isScrolled ? ASSETS.logoDark : ASSETS.logoLight}
            />
          </Link>

          {/* Menu Items */}
          <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
            {/* ERP Sankhya */}
            <p className={`font-grotesk font-normal leading-[1.43] relative shrink-0 text-[14px] whitespace-nowrap cursor-pointer transition-colors ${textColor}`}>
              ERP Sankhya
            </p>

            {/* BPO Contábil */}
            <div
              className="relative shrink-0"
              onClick={handleBPOMenuClick}
            >
              <div className="content-stretch flex gap-[6px] items-center cursor-pointer">
                <p className={`font-grotesk font-normal leading-[1.43] relative shrink-0 text-[14px] whitespace-nowrap transition-colors ${textColor}`}>
                  BPO Contábil
                </p>
                <ChevronDown className={`w-[16px] h-[16px] transition-colors transition-transform duration-300 ${iconColor} ${isBPOMenuOpen ? 'rotate-180' : ''}`} />
              </div>
            </div>

            {/* Hability Labs */}
            <div
              className="relative shrink-0"
              onClick={handleHabilityMenuClick}
            >
              <div className="content-stretch flex gap-[6px] items-center cursor-pointer">
                <p className={`font-grotesk font-normal leading-[1.43] relative shrink-0 text-[14px] whitespace-nowrap transition-colors ${textColor}`}>
                  Hability Labs
                </p>
                <ChevronDown className={`w-[16px] h-[16px] transition-colors transition-transform duration-300 ${iconColor} ${isHabilityLabsMenuOpen ? 'rotate-180' : ''}`} />
              </div>
            </div>

            {/* Reforma Tributária */}
            <p className={`font-grotesk font-normal leading-[1.43] relative shrink-0 text-[14px] whitespace-nowrap cursor-pointer transition-colors ${textColor}`}>
              Reforma Tributária
            </p>

            {/* Sobre Nós */}
            <div
              className="relative shrink-0"
              onClick={handleAboutMenuClick}
            >
              <div className="content-stretch flex gap-[6px] items-center cursor-pointer">
                <p className={`font-grotesk font-normal leading-[1.43] relative shrink-0 text-[14px] whitespace-nowrap transition-colors ${textColor}`}>
                  Sobre Nós
                </p>
                <ChevronDown className={`w-[16px] h-[16px] transition-colors transition-transform duration-300 ${iconColor} ${isAboutMenuOpen ? 'rotate-180' : ''}`} />
              </div>
            </div>
          </div>

          {/* Right Actions */}
          <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
            {/* Login */}
            <div className="content-stretch flex gap-[6px] items-center relative shrink-0 cursor-pointer group">
              <CircleUserRound className={`w-[16px] h-[16px] transition-colors ${iconColor}`} />
              <p className={`font-grotesk font-normal leading-[1.43] relative shrink-0 text-[14px] whitespace-nowrap transition-colors ${textColor}`}>
                Login
              </p>
            </div>

            {/* CTA Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="bg-[#f15a29] content-stretch flex items-center justify-center px-[20px] py-[12px] relative rounded-[8px] shrink-0 transition-colors ripple-button"
              data-name="Button-01"
            >
              <p className="font-grotesk font-normal leading-[1.43] relative shrink-0 text-[14px] text-white whitespace-nowrap">
                Fale com um especialista
              </p>
            </motion.button>
          </div>
        </div>
      </div>
      </motion.div>

      <AnimatePresence>
        {/* BPO Menu Overlay */}
        {isBPOMenuOpen && (
          <motion.div
            key="bpo-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-10 pointer-events-none"
          />
        )}

        {/* BPO Menu Dropdown */}
        {isBPOMenuOpen && (
          <motion.div
            key="bpo-dropdown"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="relative z-50 mx-[20px] w-[calc(100%-40px)] bg-white backdrop-blur-lg border-t border-white/40 shadow-lg rounded-[20px]"
          >
          <div className="flex justify-center">
            <div className="w-full max-w-[1280px] px-[80px] py-[80px]">
              {/* First Row */}
              <div className="flex gap-[10px] mb-[48px]">
                {/* Visão Geral */}
                <Link href="/bpo-contabil/visao-geral" className="flex-1 flex gap-[20px] items-center cursor-pointer hover:opacity-80 transition-opacity">
                  <div className="relative shrink-0 w-[61px] h-[61px]">
                    <div className="absolute inset-0 bg-white rounded-[56.744px] ml-[10.64px] mt-[11.35px] w-[39.721px] h-[39.721px] shadow-[0px_7.802px_15.037px_-3.547px_rgba(241,90,41,0.2)]" />
                    <div className="absolute inset-0 border border-[#fabe9e] rounded-[56.744px] opacity-30" />
                  </div>
                  <div className="flex flex-col gap-[10px]">
                    <p className="font-grotesk font-bold text-[20px] text-orange-500">Visão geral</p>
                    <p className="font-grotesk font-normal text-[14px] text-grey-900">Calendário, evidências e responsabilidades.</p>
                  </div>
                </Link>

                {/* BPO Contábil */}
                <Link href="/bpo-contabil" className="flex-1 flex gap-[20px] items-center cursor-pointer hover:opacity-80 transition-opacity">
                  <div className="relative shrink-0 w-[61px] h-[61px]">
                    <div className="absolute inset-0 bg-white rounded-[56.744px] ml-[10.64px] mt-[11.35px] w-[39.721px] h-[39.721px] shadow-[0px_7.802px_15.037px_-3.547px_rgba(241,90,41,0.2)]" />
                    <div className="absolute inset-0 border border-[#fabe9e] rounded-[56.744px] opacity-30" />
                  </div>
                  <div className="flex flex-col gap-[10px]">
                    <p className="font-grotesk font-bold text-[20px] text-orange-500">BPO Contábil</p>
                    <p className="font-grotesk font-normal text-[14px] text-grey-900">Calendário, evidências e responsabilidades.</p>
                  </div>
                </Link>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-[#FDE0D0] mb-[48px]" />

              {/* Second Row */}
              <div className="flex gap-[10px]">
                {/* BPO Fiscal */}
                <div className="flex-1 flex gap-[20px] items-center">
                  <div className="relative shrink-0 w-[61px] h-[61px]">
                    <div className="absolute inset-0 bg-white rounded-[56.744px] ml-[10.64px] mt-[11.35px] w-[39.721px] h-[39.721px] shadow-[0px_7.802px_15.037px_-3.547px_rgba(241,90,41,0.2)]" />
                    <div className="absolute inset-0 border border-[#fabe9e] rounded-[56.744px] opacity-30" />
                  </div>
                  <div className="flex flex-col gap-[10px]">
                    <p className="font-grotesk font-bold text-[20px] text-orange-500">BPO Fiscal</p>
                    <p className="font-grotesk font-normal text-[14px] text-grey-900">Calendário, evidências e responsabilidades.</p>
                  </div>
                </div>

                {/* BPO Trabalhista */}
                <div className="flex-1 flex gap-[20px] items-center">
                  <div className="relative shrink-0 w-[61px] h-[61px]">
                    <div className="absolute inset-0 bg-white rounded-[56.744px] ml-[10.64px] mt-[11.35px] w-[39.721px] h-[39.721px] shadow-[0px_7.802px_15.037px_-3.547px_rgba(241,90,41,0.2)]" />
                    <div className="absolute inset-0 border border-[#fabe9e] rounded-[56.744px] opacity-30" />
                  </div>
                  <div className="flex flex-col gap-[10px]">
                    <p className="font-grotesk font-bold text-[20px] text-orange-500">BPO Trabalhista</p>
                    <p className="font-grotesk font-normal text-[14px] text-grey-900">Calendário, evidências e responsabilidades.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </motion.div>
        )}

        {/* Hability Labs Menu Overlay */}
        {isHabilityLabsMenuOpen && (
          <motion.div
            key="hability-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-10 pointer-events-none"
          />
        )}

        {/* Hability Labs Menu Dropdown */}
        {isHabilityLabsMenuOpen && (
          <motion.div
            key="hability-dropdown"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="relative z-50 mx-[20px] w-[calc(100%-40px)] bg-white backdrop-blur-lg border-t border-white/40 shadow-lg rounded-[20px]"
          >
            <div className="flex justify-center">
              <div className="w-full max-w-[1280px] px-[80px] py-[80px]">
                {/* Tabs */}
                <div className="flex gap-[40px] mb-[48px] border-b border-[#FDE0D0] pb-[20px]">
                  <div
                    onMouseEnter={() => setSelectedHabilityTab('aplicativos')}
                    className={`font-grotesk font-bold text-[16px] pb-[20px] border-b-2 transition-colors cursor-pointer ${
                      selectedHabilityTab === 'aplicativos'
                        ? 'text-orange-500 border-orange-500'
                        : 'text-grey-600 border-transparent'
                    }`}
                  >
                    Aplicativos
                  </div>
                  <div
                    onMouseEnter={() => setSelectedHabilityTab('whatsapp')}
                    className={`font-grotesk font-bold text-[16px] pb-[20px] border-b-2 transition-colors cursor-pointer ${
                      selectedHabilityTab === 'whatsapp'
                        ? 'text-orange-500 border-orange-500'
                        : 'text-grey-600 border-transparent'
                    }`}
                  >
                    Whatsapp + Sankhya
                  </div>
                  <div
                    onMouseEnter={() => setSelectedHabilityTab('integracao')}
                    className={`font-grotesk font-bold text-[16px] pb-[20px] border-b-2 transition-colors cursor-pointer ${
                      selectedHabilityTab === 'integracao'
                        ? 'text-orange-500 border-orange-500'
                        : 'text-grey-600 border-transparent'
                    }`}
                  >
                    Integrações - Visão Geral
                  </div>
                </div>

                {/* Content */}
                <div>
                  {selectedHabilityTab === 'aplicativos' && (
                    <div className="grid grid-cols-2 gap-[40px]">
                      {['App Conferência', 'App Inventário', 'App Produção', 'App Força de Vendas'].map((app, idx) => (
                        <div key={`app-${idx}`} className="flex gap-[20px] items-center">
                          <div className="relative shrink-0 w-[61px] h-[61px]">
                            <div className="absolute inset-0 bg-white rounded-[56.744px] ml-[10.64px] mt-[11.35px] w-[39.721px] h-[39.721px] shadow-[0px_7.802px_15.037px_-3.547px_rgba(241,90,41,0.2)]" />
                            <div className="absolute inset-0 border border-[#fabe9e] rounded-[56.744px] opacity-30" />
                          </div>
                          <div className="flex flex-col gap-[10px]">
                            <p className="font-grotesk font-bold text-[20px] text-orange-500">{app}</p>
                            <p className="font-grotesk font-normal text-[14px] text-grey-900">Conheça melhor</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {selectedHabilityTab === 'whatsapp' && (
                    <div className="grid grid-cols-2 gap-[40px]">
                      {['PowerWhats', 'PowerChat'].map((app, idx) => (
                        <div key={`whatsapp-${idx}`} className="flex gap-[20px] items-center">
                          <div className="relative shrink-0 w-[61px] h-[61px]">
                            <div className="absolute inset-0 bg-white rounded-[56.744px] ml-[10.64px] mt-[11.35px] w-[39.721px] h-[39.721px] shadow-[0px_7.802px_15.037px_-3.547px_rgba(241,90,41,0.2)]" />
                            <div className="absolute inset-0 border border-[#fabe9e] rounded-[56.744px] opacity-30" />
                          </div>
                          <div className="flex flex-col gap-[10px]">
                            <p className="font-grotesk font-bold text-[20px] text-orange-500">{app}</p>
                            <p className="font-grotesk font-normal text-[14px] text-grey-900">Conheça melhor</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {selectedHabilityTab === 'integracao' && (
                    <div className="flex gap-[20px] items-center">
                      <div className="relative shrink-0 w-[61px] h-[61px]">
                        <div className="absolute inset-0 bg-white rounded-[56.744px] ml-[10.64px] mt-[11.35px] w-[39.721px] h-[39.721px] shadow-[0px_7.802px_15.037px_-3.547px_rgba(241,90,41,0.2)]" />
                        <div className="absolute inset-0 border border-[#fabe9e] rounded-[56.744px] opacity-30" />
                      </div>
                      <div className="flex flex-col gap-[10px]">
                        <p className="font-grotesk font-bold text-[20px] text-orange-500">Integrações - Visão Geral</p>
                        <p className="font-grotesk font-normal text-[14px] text-grey-900">Conheça nossas integrações</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* About Menu Overlay */}
        {isAboutMenuOpen && (
          <motion.div
            key="about-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-10 pointer-events-none"
          />
        )}

        {/* About Menu Dropdown */}
        {isAboutMenuOpen && (
          <motion.div
            key="about-dropdown"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="relative z-50 mx-[20px] w-[calc(100%-40px)] bg-white backdrop-blur-lg border-t border-white/40 shadow-lg rounded-[20px]"
          >
            <div className="flex justify-center">
              <div className="w-full max-w-[1280px] px-[80px] py-[80px]">
                <div className="flex gap-[40px]">
                  {/* Quem somos */}
                  <div className="flex-1 flex gap-[20px] items-center">
                    <div className="relative shrink-0 w-[61px] h-[61px]">
                      <div className="absolute inset-0 bg-white rounded-[56.744px] ml-[10.64px] mt-[11.35px] w-[39.721px] h-[39.721px] shadow-[0px_7.802px_15.037px_-3.547px_rgba(241,90,41,0.2)]" />
                      <div className="absolute inset-0 border border-[#fabe9e] rounded-[56.744px] opacity-30" />
                    </div>
                    <div className="flex flex-col gap-[10px]">
                      <p className="font-grotesk font-bold text-[20px] text-orange-500">Quem somos</p>
                      <p className="font-grotesk font-normal text-[14px] text-grey-900">Conheça nossa história</p>
                    </div>
                  </div>

                  {/* Trabalhe conosco */}
                  <div className="flex-1 flex gap-[20px] items-center">
                    <div className="relative shrink-0 w-[61px] h-[61px]">
                      <div className="absolute inset-0 bg-white rounded-[56.744px] ml-[10.64px] mt-[11.35px] w-[39.721px] h-[39.721px] shadow-[0px_7.802px_15.037px_-3.547px_rgba(241,90,41,0.2)]" />
                      <div className="absolute inset-0 border border-[#fabe9e] rounded-[56.744px] opacity-30" />
                    </div>
                    <div className="flex flex-col gap-[10px]">
                      <p className="font-grotesk font-bold text-[20px] text-orange-500">Trabalhe conosco</p>
                      <p className="font-grotesk font-normal text-[14px] text-grey-900">Faça parte do time</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
