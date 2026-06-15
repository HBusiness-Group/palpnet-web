import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PalpNet — Palpites Esportivos',
  description: 'Plataforma social de palpites esportivos. Crie grupos, faça palpites e dispute com amigos.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
