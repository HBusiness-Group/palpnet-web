import Link from 'next/link'
import { Trophy, ExternalLink } from 'lucide-react'
import { Container } from './container'
import { footerLinks } from '@/config/navigation'

const siteLinks = [
  { label: 'Instagram', href: 'https://instagram.com/palpnet' },
  { label: 'X / Twitter', href: 'https://twitter.com/palpnet' },
  { label: 'GitHub', href: 'https://github.com/HBusiness-Group/PalpNet-web' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border/50 bg-background">
      <Container>
        <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Trophy className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-extrabold tracking-tight">
                Palp<span className="text-primary">Net</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Plataforma social de palpites esportivos. Sem apostas — só diversão.
            </p>
            <div className="flex items-center gap-3">
              {siteLinks.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-3 w-3" />
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Plataforma */}
          <FooterColumn title="Plataforma" links={footerLinks.plataforma} />

          {/* Empresa */}
          <FooterColumn title="Empresa" links={footerLinks.empresa} />

          {/* Jurídico */}
          <FooterColumn title="Jurídico" links={footerLinks.juridico} />
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/50 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {year} PalpNet — HBusiness Group Tecnologia. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground/70 text-center sm:text-right max-w-sm">
            🚫 PalpNet não é uma plataforma de apostas. Nenhuma transação financeira é realizada.
          </p>
        </div>
      </Container>
    </footer>
  )
}

function FooterColumn({
  title,
  links,
}: {
  title: string
  links: { label: string; href: string; external?: boolean }[]
}) {
  return (
    <div className="space-y-3">
      <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {title}
      </h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
