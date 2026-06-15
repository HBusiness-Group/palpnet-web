# PalpNet — Guia de Contribuição

## Branches

- `main` — produção (auto-deploy Vercel)
- `develop` — integração
- `feature/nome-da-feature` — funcionalidades
- `fix/nome-do-bug` — correções

## Commits

Seguir Conventional Commits:

```
feat: adiciona sistema de palpites
fix: corrige cálculo de pontuação no placar exato
docs: atualiza ROADMAP fase 3
chore: atualiza dependências
refactor: extrai lógica de ranking para lib/ranking
```

## Pull Requests

- PRs sempre apontam para `develop`
- Título claro e descritivo
- Descrição com o que mudou e por quê
- Nunca subir secrets ou chaves de API

## Padrões de Código

- TypeScript strict mode
- Server Components por padrão
- `"use client"` apenas quando necessário
- Prettier + ESLint passando antes do PR
- Funções pequenas e com nome descritivo

## Ambiente Local

```bash
git clone https://github.com/HBusiness-Group/PalpNet-web.git
cd PalpNet-web
cp .env.example .env.local
# preencher .env.local com credenciais do Supabase
npm install
npm run dev
```
