import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'PalpNet — Palpites Esportivos',
    template: '%s | PalpNet',
  },
  description:
    'Plataforma social de palpites esportivos. Crie grupos, faça palpites e dispute com seus amigos na Copa do Mundo FIFA 2026.',
  keywords: ['palpites', 'futebol', 'copa do mundo', 'grupos', 'ranking'],
  authors: [{ name: 'HBusiness Group Tecnologia' }],
  metadataBase: new URL('https://palpnet.com.br'),
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://palpnet.com.br',
    siteName: 'PalpNet',
    title: 'PalpNet — Palpites Esportivos',
    description: 'Plataforma social de palpites esportivos.',
    images: [{ url: '/brand/social-preview.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PalpNet — Palpites Esportivos',
    description: 'Plataforma social de palpites esportivos.',
    images: ['/brand/social-preview.png'],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${manrope.variable} font-sans antialiased min-h-screen bg-background`}>
        {children}
      </body>
    </html>
  )
}
