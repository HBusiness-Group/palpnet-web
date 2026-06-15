import type { NavItem } from '@/types'

export const publicNavItems: NavItem[] = [
  { label: 'Competições', href: '/competicoes' },
  { label: 'Grupos', href: '/grupos' },
  { label: 'Ranking', href: '/ranking' },
  { label: 'Sobre', href: '/sobre' },
]

export const dashboardNavItems: NavItem[] = [
  { label: 'Início', href: '/dashboard' },
  { label: 'Meus Grupos', href: '/dashboard/grupos' },
  { label: 'Palpites', href: '/dashboard/palpites' },
  { label: 'Conquistas', href: '/dashboard/conquistas' },
  { label: 'Notificações', href: '/dashboard/notificacoes' },
  { label: 'Perfil', href: '/dashboard/perfil' },
]

export const adminNavItems: NavItem[] = [
  { label: 'Dashboard', href: '/admin/dashboard' },
  { label: 'Usuários', href: '/admin/usuarios' },
  { label: 'Competições', href: '/admin/competicoes' },
  { label: 'Seleções', href: '/admin/selecoes' },
  { label: 'Partidas', href: '/admin/partidas' },
  { label: 'Grupos', href: '/admin/grupos' },
  { label: 'Patrocinadores', href: '/admin/patrocinadores' },
  { label: 'Campanhas', href: '/admin/campanhas' },
  { label: 'Banners', href: '/admin/banners' },
  { label: 'Configurações', href: '/admin/configuracoes' },
]

export const footerLinks = {
  plataforma: [
    { label: 'Competições', href: '/competicoes' },
    { label: 'Grupos', href: '/grupos' },
    { label: 'Ranking', href: '/ranking' },
    { label: 'Palpites', href: '/dashboard/palpites' },
    { label: 'Conquistas', href: '/dashboard/conquistas' },
  ],
  empresa: [
    { label: 'Sobre o PalpNet', href: '/sobre' },
    { label: 'Patrocinadores', href: '/patrocinadores' },
    { label: 'HBusiness Group', href: 'https://hbusiness-group.com.br', external: true },
    { label: 'NOOON', href: 'https://nooon.com.br', external: true },
  ],
  juridico: [
    { label: 'Termos de Uso', href: '/termos' },
    { label: 'Privacidade', href: '/privacidade' },
    { label: 'Cookies', href: '/cookies' },
  ],
}
