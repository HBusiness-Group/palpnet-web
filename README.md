# PalpNet

**Plataforma social de palpites esportivos.**

Crie grupos com amigos, faça palpites nos jogos, dispute no ranking e acompanhe cada partida com mais emoção. Sem apostas — só palpites.

---

## Links

- **Produção:** https://palpnet.com.br
- **Repositório:** https://github.com/HBusiness-Group/PalpNet-web
- **Holding:** HBusiness Group Tecnologia

---

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | Next.js 14 (App Router) |
| Estilização | Tailwind CSS |
| Banco de Dados | Supabase (PostgreSQL) |
| Autenticação | Supabase Auth |
| Deploy | Vercel |
| Repositório | GitHub |

---

## Status Atual

> **Estrutura v1.0 — Pronta para Fase 1**  
> Estrutura oficial do projeto definida. Inclui `config/`, `emails/`, `public/brand/` e toda a hierarquia de rotas e módulos. Pronto para iniciar a Fase 1 de desenvolvimento.

---

## Roadmap Resumido

| Fase | Descrição |
|---|---|
| 1 | Fundação do projeto (dependências, config, ambiente) |
| 2 | Banco de dados e autenticação |
| 3 | Landing page e identidade visual |
| 4 | Sistema de usuários e grupos |
| 5 | Competições, jogos e palpites |
| 6 | Rankings e gamificação |
| 7 | Patrocinadores e compartilhamento |
| 8 | Painel administrativo e produção |

---

## Primeira Competição

**Copa do Mundo FIFA 2026** — Estados Unidos, Canadá e México.

---

## Desenvolvimento Local

```bash
git clone https://github.com/HBusiness-Group/PalpNet-web.git
cd PalpNet-web
cp .env.example .env.local
# preencher .env.local com credenciais do Supabase
npm install
npm run dev
```

Acesse: http://localhost:3000

---

## Estrutura de Pastas (v1.0)

```
PalpNet-web/
├── app/            → Rotas Next.js 14 (App Router)
├── components/     → Componentes React reutilizáveis
├── config/         → Navegação, menus, constantes, feature flags
├── emails/         → Templates de e-mail transacional
├── lib/            → Utilitários, scoring, ranking, gamificação
├── hooks/          → React hooks customizados
├── services/       → Integração com APIs e Supabase
├── types/          → Tipos TypeScript globais
├── database/       → Schema SQL, políticas RLS, funções, seeds
├── public/brand/   → Logo, favicon e OG image da marca
├── styles/         → Estilos globais adicionais
├── docs/           → Documentação técnica e ADRs
├── scripts/        → Scripts utilitários
└── tests/          → Testes unitários, integração e E2E
```

---

## Documentação

Consulte a pasta [`/docs`](./docs/README.md) para arquitetura, design system, banco de dados e decisões técnicas.
