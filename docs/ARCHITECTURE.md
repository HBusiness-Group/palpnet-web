# PalpNet — Arquitetura

## Stack

| Camada | Tecnologia | Justificativa |
|---|---|---|
| Framework | Next.js 14 (App Router) | SSR, rotas aninhadas, Server Components |
| Estilização | Tailwind CSS | Utilitário, consistência, dark mode |
| Banco de Dados | Supabase (PostgreSQL) | RLS nativo, Auth integrado, realtime |
| Autenticação | Supabase Auth | Integrado ao banco, JWT, OAuth |
| Deploy | Vercel | Auto-deploy, Edge Network, preview branches |
| Repositório | GitHub / HBusiness-Group | CI/CD, colaboração |

## Padrão de Componentes

- **Server Components** por padrão (sem `"use client"`)
- **Client Components** apenas para interatividade (formulários, hooks de estado)
- Dados buscados diretamente em Server Components via `createServerClient()`

## Roteamento

| Área | Grupo | Proteção |
|---|---|---|
| Páginas públicas | `(public)` | Nenhuma |
| Autenticação | `(auth)` | Redireciona se já logado |
| Dashboard do usuário | `dashboard/` | Requer sessão |
| Páginas de grupo | `grupo/[slug]/` | Público ou membro (depende da config) |
| Administração | `admin/` | Requer role admin |

## Fluxo de Dados

```
Cliente → Next.js Server Component → Supabase Client (service role ou anon)
                                    ↕ RLS policies
                                    PostgreSQL
```

## Segurança

- RLS habilitado em todas as tabelas
- `SUPABASE_SERVICE_ROLE_KEY` nunca exposta no client
- Middleware valida sessão antes de renderizar rotas protegidas
- Inputs sanitizados no servidor antes de queries

## Estrutura de Módulos (v1.0)

| Pasta | Responsabilidade |
|---|---|
| `app/` | Rotas, layouts e pages (Next.js App Router) |
| `components/` | Componentes React reutilizáveis por domínio |
| `config/` | Configurações estáticas globais: navegação, menus, constantes, feature flags |
| `emails/` | Templates de e-mail transacional (React Email) |
| `lib/` | Lógica pura: scoring, ranking, gamificação, formatadores, utilitários |
| `hooks/` | React hooks customizados |
| `services/` | Camada de acesso a dados e integrações externas |
| `types/` | Tipos TypeScript compartilhados |
| `database/` | SQL: schema, RLS, funções, triggers, índices, seeds |
| `public/brand/` | Ativos de marca: logo, favicon, OG image |
| `styles/` | Estilos globais complementares ao Tailwind |
| `docs/` | Documentação técnica, produto e ADRs |
| `scripts/` | Scripts de automação e utilitários de desenvolvimento |
| `tests/` | Testes: unitários, integração e E2E |
