# PalpNet — Roadmap

## Visão Geral

8 fases de desenvolvimento estruturado, da fundação até o lançamento em produção.

---

## Fase 1 — Fundação do Projeto
**Objetivo:** Estrutura organizacional, configuração de ambiente e base técnica.
- [x] Estrutura de pastas e arquivos
- [ ] Instalação de dependências (Next.js 14, Tailwind, Supabase JS)
- [ ] Configuração de linting e formatação
- [ ] Git e CI/CD inicial
- [ ] Vercel conectado ao repositório

---

## Fase 2 — Banco de Dados e Autenticação
**Objetivo:** Modelagem completa do banco e autenticação via Supabase.
- [ ] Schema de todas as tabelas
- [ ] Políticas RLS
- [ ] Funções e triggers PostgreSQL
- [ ] Supabase Auth configurado
- [ ] Middleware de proteção de rotas

---

## Fase 3 — Landing Page e Identidade
**Objetivo:** Identidade visual e página pública de conversão.
- [ ] Design System implementado no Tailwind
- [ ] Landing page com hero, features, como funciona, CTA
- [ ] Páginas públicas: competições, grupos, ranking
- [ ] Responsividade completa

---

## Fase 4 — Sistema de Usuários e Grupos
**Objetivo:** Cadastro, perfil e gestão de grupos.
- [ ] Fluxo de cadastro e login
- [ ] Perfil do usuário editável
- [ ] Criação e gestão de grupos
- [ ] Convite de membros
- [ ] Página pública de grupo

---

## Fase 5 — Competições, Jogos e Palpites
**Objetivo:** Núcleo funcional da plataforma.
- [ ] CRUD de competições e partidas (admin)
- [ ] Cadastro de seleções com bandeiras
- [ ] Interface de palpites (antes do fechamento)
- [ ] Tela "meus palpites" por partida e grupo
- [ ] Seed com Copa do Mundo FIFA 2026

---

## Fase 6 — Rankings e Gamificação
**Objetivo:** Motor de pontuação, rankings e conquistas.
- [ ] Algoritmo de pontuação de palpites
- [ ] Rankings em tempo real por grupo
- [ ] Ranking geral da competição
- [ ] Sistema de conquistas (achievements)
- [ ] Histórico de desempenho do usuário

---

## Fase 7 — Patrocinadores e Compartilhamento
**Objetivo:** Monetização e viralização.
- [ ] Cadastro e perfil de patrocinadores
- [ ] Campanhas publicitárias e banners
- [ ] Compartilhamento de palpites e ranking (OG Cards)
- [ ] Geração de cards personalizados
- [ ] Analytics de patrocinadores

---

## Fase 8 — Painel Administrativo e Produção
**Objetivo:** Operação, monitoramento e lançamento.
- [ ] Painel admin completo
- [ ] Gerenciamento de usuários, grupos, partidas
- [ ] Moderação de conteúdo
- [ ] Monitoramento e alertas
- [ ] Testes E2E e de carga
- [ ] Go live em palpnet.com.br
