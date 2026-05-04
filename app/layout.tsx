import type { Metadata, Viewport } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Hability Consult - ERP Sankhya, BPO Contábil e Hability Labs",
  description: "Consultoria ERP Sankhya, BPO Contábil completo e Hability Labs. Operação que funciona de verdade.",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-white">
        {children}
      </body>
    </html>
  )
}
