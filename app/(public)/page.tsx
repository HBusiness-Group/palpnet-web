import Link from 'next/link'
import {
  Trophy,
  Users,
  Star,
  Target,
  Zap,
  Shield,
  Globe,
  ChevronRight,
  CheckCircle2,
  TrendingUp,
  Sparkles,
  Building2,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Container } from '@/components/layout/container'
import { siteConfig } from '@/config/site'

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <HowItWorksSection />
      <CompetitionSection />
      <FeaturesSection />
      <NooonSection />
      <HBusinessSection />
      <CtaSection />
    </div>
  )
}

/* ─────────────────────────────────────────
   HERO
───────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[92vh] flex items-center">
      {/* Background atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <Container className="relative py-24">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Competição badge */}
          <Badge className="mb-6 px-4 py-1.5 text-sm gap-2 cursor-default">
            <Trophy className="h-3.5 w-3.5" />
            Copa do Mundo FIFA 2026 — Em breve
          </Badge>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]">
            Faça seus palpites,{' '}
            <span className="text-gradient">dispute com amigos.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Plataforma social de palpites esportivos. Crie grupos, palpite nos jogos, suba no
            ranking e viva a Copa do Mundo com muito mais emoção — sem apostar dinheiro.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <Button size="xl" className="w-full sm:w-auto shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30" asChild>
              <Link href="/cadastro">
                Criar meu grupo
                <ChevronRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button size="xl" variant="outline" className="w-full sm:w-auto" asChild>
              <Link href="/grupos">Entrar em um grupo</Link>
            </Button>
            <Button size="xl" variant="ghost" className="w-full sm:w-auto" asChild>
              <Link href="/patrocinadores">
                Sou patrocinador
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Social proof / stats */}
          <div className="mt-16 grid grid-cols-3 gap-6 sm:gap-10 w-full max-w-lg">
            {[
              { value: '48', label: 'Seleções' },
              { value: '100%', label: 'Gratuito' },
              { value: '0', label: 'Apostas' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl sm:text-4xl font-extrabold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

/* ─────────────────────────────────────────
   COMO FUNCIONA
───────────────────────────────────────── */
function HowItWorksSection() {
  const steps = [
    {
      step: '01',
      icon: <Users className="h-6 w-6" />,
      title: 'Crie ou entre em um grupo',
      description:
        'Crie seu grupo e convide amigos, colegas ou familiares. Ou entre em um grupo público e dispute com outros fãs.',
    },
    {
      step: '02',
      icon: <Target className="h-6 w-6" />,
      title: 'Faça seus palpites',
      description:
        'Palpite o placar de cada partida antes do apito inicial. Quanto mais certeiro, mais pontos você acumula.',
    },
    {
      step: '03',
      icon: <TrendingUp className="h-6 w-6" />,
      title: 'Acompanhe o ranking',
      description:
        'Veja sua posição no ranking em tempo real, desbloqueie conquistas e comemore cada acerto com seus amigos.',
    },
  ]

  return (
    <section className="py-24 bg-muted/20">
      <Container>
        <SectionHeader
          badge="Como funciona"
          title="Simples assim — três passos"
          description="Sem complicação. Em minutos você já está no seu grupo fazendo palpites."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-12 left-[calc(33.33%+1rem)] right-[calc(33.33%+1rem)] h-px bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0" />

          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col items-center text-center p-8">
              <div className="relative mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20">
                  {step.icon}
                </div>
                <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                  {step.step}
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

/* ─────────────────────────────────────────
   COMPETIÇÃO EM DESTAQUE
───────────────────────────────────────── */
function CompetitionSection() {
  const highlights = [
    '48 seleções participantes',
    '3 países sede: EUA, Canadá e México',
    'Fase de grupos + eliminatórias',
    'Grupos ilimitados de palpites',
    'Rankings em tempo real',
    'Conquistas exclusivas da Copa 2026',
  ]

  return (
    <section className="py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <Badge variant="outline" className="mb-4">
              Primeira competição
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
              Copa do Mundo{' '}
              <span className="text-gradient">FIFA 2026</span>
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              A maior competição de futebol do planeta chega com formato expandido — 48 seleções
              disputando o título em três países. O PalpNet foi construído para essa edição histórica.
            </p>
            <ul className="mt-8 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button className="mt-10" asChild>
              <Link href="/competicoes">
                Explorar competição
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Visual card */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-3xl" />
            <Card className="relative overflow-hidden border-primary/20">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
              <CardContent className="relative p-8">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Competição</p>
                    <p className="text-xl font-bold mt-1">Copa do Mundo FIFA 2026</p>
                  </div>
                  <div className="h-14 w-14 rounded-2xl bg-primary/15 flex items-center justify-center text-3xl">
                    🏆
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[
                    { label: 'Seleções', value: '48' },
                    { label: 'Grupos', value: '∞' },
                    { label: 'Jogos', value: '104' },
                  ].map((s) => (
                    <div key={s.label} className="text-center p-3 rounded-xl bg-muted/50">
                      <p className="text-2xl font-extrabold text-primary">{s.value}</p>
                      <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  {['Fase de Grupos', 'Oitavas de Final', 'Quartas de Final', 'Semifinais', 'Final'].map(
                    (phase) => (
                      <div key={phase} className="flex items-center justify-between text-sm py-2 border-b border-border/50 last:border-0">
                        <span className="text-muted-foreground">{phase}</span>
                        <Badge variant="muted" className="text-xs">Em breve</Badge>
                      </div>
                    )
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  )
}

/* ─────────────────────────────────────────
   FEATURES
───────────────────────────────────────── */
function FeaturesSection() {
  const features = [
    {
      icon: <Users className="h-5 w-5" />,
      title: 'Grupos públicos e privados',
      description: 'Crie grupos abertos para a comunidade ou fechados para seus amigos.',
    },
    {
      icon: <Trophy className="h-5 w-5" />,
      title: 'Rankings em tempo real',
      description: 'Pontuação atualizada automaticamente após cada resultado.',
    },
    {
      icon: <Star className="h-5 w-5" />,
      title: 'Conquistas e badges',
      description: 'Desbloqueie conquistas por acertos, sequências e posições no ranking.',
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: 'Notificações inteligentes',
      description: 'Alertas de palpite, resultados e posição no ranking.',
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: 'Sem apostas, sem riscos',
      description: 'Plataforma 100% entretenimento. Nenhuma transação financeira.',
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: 'Patrocinadores integrados',
      description: 'Marcas que apoiam seu grupo ganham visibilidade no ranking e nos palpites.',
    },
  ]

  return (
    <section className="py-24 bg-muted/20">
      <Container>
        <SectionHeader
          badge="Por que PalpNet?"
          title="Tudo que você precisa para palpitar"
          description="Construído para ser a melhor experiência de palpites esportivos do Brasil."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="group border-border/60 hover:border-primary/30 transition-colors"
            >
              <CardContent className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

/* ─────────────────────────────────────────
   DESTAQUE NOOON
───────────────────────────────────────── */
function NooonSection() {
  return (
    <section className="py-24">
      <Container size="lg">
        <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-card to-muted/30 p-1">
          <div className="rounded-[22px] p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-semibold text-primary mb-6">
                  <Sparkles className="h-3 w-3" />
                  Ecossistema NOOON
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  Parte de um ecossistema maior
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  O PalpNet é desenvolvido dentro do ecossistema <strong className="text-foreground">NOOON</strong> —
                  plataforma de produtos digitais voltados para engajamento, entretenimento e
                  gestão de comunidades.
                </p>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Isso significa infraestrutura robusta, segurança de nível enterprise e um time
                  dedicado a entregar a melhor experiência possível.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Button variant="outline" asChild>
                    <Link href="https://nooon.com.br" target="_blank" rel="noopener noreferrer">
                      Conhecer NOOON
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Visual */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Infraestrutura', icon: '🔧', desc: 'Alta disponibilidade' },
                  { label: 'Segurança', icon: '🔒', desc: 'Dados protegidos' },
                  { label: 'Escalabilidade', icon: '📈', desc: 'Cresce com você' },
                  { label: 'Experiência', icon: '✨', desc: 'UX de qualidade' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-border/50 bg-muted/30 p-4 text-center"
                  >
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <p className="text-sm font-semibold">{item.label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

/* ─────────────────────────────────────────
   DESTAQUE HBUSINESS
───────────────────────────────────────── */
function HBusinessSection() {
  return (
    <section className="py-24 bg-muted/20">
      <Container>
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-muted border border-border mb-6">
            <Building2 className="h-7 w-7 text-muted-foreground" />
          </div>

          <Badge variant="outline" className="mb-4">
            Quem faz o PalpNet
          </Badge>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Desenvolvido pela{' '}
            <span className="text-gradient">HBusiness Group</span>
          </h2>

          <p className="mt-4 text-muted-foreground leading-relaxed">
            A <strong className="text-foreground">HBusiness Group Tecnologia</strong> é uma empresa
            brasileira focada em criar produtos digitais que transformam a experiência das pessoas
            com tecnologia. O PalpNet é mais um produto da holding — construído com as mesmas
            práticas e padrões de qualidade aplicados em toda a suite.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
            {[
              { value: 'Brasil 🇧🇷', label: 'Empresa nacional' },
              { value: 'Suite', label: 'Produtos integrados' },
              { value: 'NOOON', label: 'Ecossistema próprio' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border/50 bg-card p-5 text-center"
              >
                <p className="text-xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Button variant="outline" asChild>
              <Link
                href="https://hbusiness-group.com.br"
                target="_blank"
                rel="noopener noreferrer"
              >
                Conhecer a HBusiness Group
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

/* ─────────────────────────────────────────
   CTA FINAL
───────────────────────────────────────── */
function CtaSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-accent/10 border border-primary/20 p-[1px]">
          <div className="relative rounded-[22px] bg-background/60 backdrop-blur-sm px-6 py-16 sm:px-12 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-[22px]" />
            <div className="relative">
              <div className="text-4xl mb-6">⚽</div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Pronto para palpitar?
              </h2>
              <p className="mt-4 text-muted-foreground max-w-lg mx-auto leading-relaxed">
                Crie sua conta grátis, monte seu grupo e prepare-se para a Copa do Mundo FIFA 2026.
                Sem apostas, sem riscos — só diversão.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button size="xl" className="shadow-lg shadow-primary/25" asChild>
                  <Link href="/cadastro">
                    Criar conta grátis
                    <ChevronRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button size="xl" variant="outline" asChild>
                  <Link href="/competicoes">Ver competições</Link>
                </Button>
              </div>
              <p className="mt-6 text-xs text-muted-foreground/60">
                {siteConfig.disclaimer}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

/* ─────────────────────────────────────────
   HELPER: Section Header
───────────────────────────────────────── */
function SectionHeader({
  badge,
  title,
  description,
}: {
  badge: string
  title: string
  description: string
}) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <Badge variant="outline" className="mb-4">
        {badge}
      </Badge>
      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">{title}</h2>
      <p className="mt-4 text-muted-foreground leading-relaxed">{description}</p>
    </div>
  )
}
