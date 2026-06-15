# PalpNet — Banco de Dados

## Plataforma

**Supabase** — PostgreSQL gerenciado, região `sa-east-1` (São Paulo)

## Arquivos SQL

| Arquivo | Descrição |
|---|---|
| `schema.sql` | Definição de todas as tabelas e relacionamentos |
| `policies.sql` | Políticas de Row Level Security (RLS) |
| `functions.sql` | Funções PostgreSQL (pontuação, ranking, conquistas) |
| `triggers.sql` | Triggers automáticos (on_auth_user_created, on_match_result_updated) |
| `indexes.sql` | Índices de performance |
| `seed.sql` | Dados iniciais para desenvolvimento |
| `migrations/` | Migrações versionadas (Supabase CLI) |

## Regras Gerais

- RLS habilitado em **todas** as tabelas sem exceção
- Sempre filtrar por `user_id` ou contexto de grupo nas policies
- Migrações versionadas via `supabase/migrations/` (nunca alterações manuais em produção)
- Funções críticas (ranking, pontuação) rodam com `SECURITY DEFINER` quando necessário

## Tabelas Principais (planejadas)

Detalhamento completo implementado na Fase 2. Ver `database/schema.sql`.

- `profiles` — Extensão de `auth.users`
- `competitions` — Competições esportivas
- `teams` — Seleções/Times
- `matches` — Partidas com resultados
- `groups` — Grupos de palpites
- `group_members` — Membros com roles
- `predictions` — Palpites dos usuários
- `rankings` — Cache de rankings
- `achievements` — Catálogo de conquistas
- `user_achievements` — Conquistas desbloqueadas
- `sponsors` — Patrocinadores
- `sponsor_campaigns` — Campanhas
- `banners` — Banners publicitários
- `notifications` — Notificações
- `activity_logs` — Auditoria
