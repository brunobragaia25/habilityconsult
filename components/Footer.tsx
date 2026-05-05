'use client'

import { motion } from 'framer-motion'

const ASSETS = {
  footerLogo: '/logo-hability-footer.svg',
  footerArrowUp: '/arrow-top.svg',
  footerDevz: '/logo-devz.svg',
}

export default function Footer() {
  return (
    <footer className="bg-[#ac3314] text-white">
      {/* Main Footer Content */}
      <div className="w-full flex justify-center py-[80px] px-[20px]">
        <div className="max-w-[1280px] w-full flex flex-col gap-[60px]">
          {/* Top Section - Logo and Actions */}
          <div className="flex items-center justify-between w-full">
            <img src={ASSETS.footerLogo} alt="Hability" className="h-[60px] w-[190px] object-contain" />
            <div className="flex items-center gap-[40px]">
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex gap-[12px] items-center text-white hover:opacity-80 transition-opacity"
              >
                <span className="font-grotesk font-medium text-[16px]">Voltar ao topo</span>
                <img src={ASSETS.footerArrowUp} alt="" className="w-[28px] h-[28px]" />
              </motion.button>

              <div className="w-px h-[29px] bg-white/30" />

              <div className="flex items-center gap-[20px]">
                <span className="font-grotesk font-medium text-[16px]">Siga nas redes</span>
                <div className="flex gap-[12px]">
                  <div className="bg-[#fde0d0] rounded-[8px] w-[28px] h-[28px] flex items-center justify-center cursor-pointer hover:opacity-80">
                    <img src="/instagram-icon.svg" alt="Instagram" className="w-[16px] h-[16px]" />
                  </div>
                  <div className="bg-[#fde0d0] rounded-[8px] w-[28px] h-[28px] flex items-center justify-center cursor-pointer hover:opacity-80">
                    <img src="/linkedin-icon.svg" alt="LinkedIn" className="w-[16px] h-[16px]" />
                  </div>
                  <div className="bg-[#fde0d0] rounded-[8px] w-[28px] h-[28px] flex items-center justify-center cursor-pointer hover:opacity-80">
                    <img src="/facebook-icon.svg" alt="Facebook" className="w-[16px] h-[16px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Separator */}
          <div className="w-full border-t border-white/20" />

          {/* Links Section */}
          <div className="grid grid-cols-5 gap-[20px] w-full">
            {/* Institucional */}
            <div className="flex flex-col gap-[40px]">
              <h4 className="font-grotesk font-medium text-[20px] leading-[1.5] text-[#f6986c]">
                Institucional
              </h4>
              <div className="flex flex-col gap-[20px]">
                <p className="font-grotesk font-light text-[16px] leading-[1.43] text-white cursor-pointer hover:opacity-80">
                  Quem somos
                </p>
                <p className="font-grotesk font-light text-[16px] leading-[1.43] text-white cursor-pointer hover:opacity-80">
                  Trabalhe Conosco
                </p>
                <p className="font-grotesk font-light text-[16px] leading-[1.43] text-white cursor-pointer hover:opacity-80">
                  LGPD e Privacidade
                </p>
              </div>
            </div>

            {/* Soluções */}
            <div className="flex flex-col gap-[40px]">
              <h4 className="font-grotesk font-medium text-[20px] leading-[1.5] text-[#f6986c]">
                Soluções
              </h4>
              <div className="flex flex-col gap-[20px]">
                <p className="font-grotesk font-light text-[16px] leading-[1.43] text-white cursor-pointer hover:opacity-80">
                  Consultoria ERP Sankhya
                </p>
                <p className="font-grotesk font-light text-[16px] leading-[1.43] text-white cursor-pointer hover:opacity-80">
                  BPO Contábil Completo
                </p>
                <p className="font-grotesk font-light text-[16px] leading-[1.43] text-white cursor-pointer hover:opacity-80">
                  Hability Labs
                </p>
                <p className="font-grotesk font-light text-[16px] leading-[1.43] text-white cursor-pointer hover:opacity-80">
                  Reforma Tributária 2026
                </p>
              </div>
            </div>

            {/* Aplicativos */}
            <div className="flex flex-col gap-[40px]">
              <h4 className="font-grotesk font-medium text-[20px] leading-[1.5] text-[#f6986c]">
                Aplicativos
              </h4>
              <div className="flex flex-col gap-[20px]">
                <p className="font-grotesk font-light text-[16px] leading-[1.43] text-white cursor-pointer hover:opacity-80">
                  App Conferência
                </p>
                <p className="font-grotesk font-light text-[16px] leading-[1.43] text-white cursor-pointer hover:opacity-80">
                  App Inventário
                </p>
                <p className="font-grotesk font-light text-[16px] leading-[1.43] text-white cursor-pointer hover:opacity-80">
                  App Produção
                </p>
                <p className="font-grotesk font-light text-[16px] leading-[1.43] text-white cursor-pointer hover:opacity-80">
                  App Força de Vendas
                </p>
              </div>
            </div>

            {/* Whatsapp + Sankhya */}
            <div className="flex flex-col gap-[40px]">
              <h4 className="font-grotesk font-medium text-[20px] leading-[1.5] text-[#f6986c]">
                Whatsapp + Sankhya
              </h4>
              <div className="flex flex-col gap-[20px]">
                <p className="font-grotesk font-light text-[16px] leading-[1.43] text-white cursor-pointer hover:opacity-80">
                  PowerWhats
                </p>
                <p className="font-grotesk font-light text-[16px] leading-[1.43] text-white cursor-pointer hover:opacity-80">
                  PowerChats
                </p>
              </div>
            </div>

            {/* Contato */}
            <div className="flex flex-col gap-[40px]">
              <h4 className="font-grotesk font-medium text-[20px] leading-[1.5] text-[#f6986c]">
                Contato
              </h4>
              <div className="flex flex-col gap-[20px]">
                <div>
                  <p className="font-grotesk font-light text-[16px] leading-[1.43] text-white">
                    comercial<br />@habilityconsult.com.br
                  </p>
                </div>
                <p className="font-grotesk font-light text-[16px] leading-[1.43] text-white cursor-pointer hover:opacity-80">
                  +55 11 99999 9999
                </p>
                <p className="font-grotesk font-light text-[16px] leading-[1.43] text-white cursor-pointer hover:opacity-80">
                  +55 11 99999 9999
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/20">
        <div className="w-full flex justify-center py-[16px] px-[20px] bg-[#ac3314]">
          <div className="max-w-[1280px] w-full flex items-center justify-between flex-wrap gap-[20px]">
            <p className="font-grotesk font-light text-[14px] leading-[1.43] text-white">
              © 2026 Hability Consult. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-[12px]">
              <span className="font-grotesk font-light text-[14px] leading-[1.43] text-white">Desenvolvido por</span>
              <img src={ASSETS.footerDevz} alt="DEVZ" className="h-[18px] w-auto object-contain" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
