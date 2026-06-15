# PalpNet — Segurança

## Princípios

1. **RLS em tudo** — Row Level Security habilitado em todas as tabelas sem exceção
2. **Service Role protegida** — `SUPABASE_SERVICE_ROLE_KEY` nunca exposta ao cliente
3. **Auth via Supabase** — Nunca implementar autenticação própria
4. **Inputs sanitizados** — Validação no servidor antes de qualquer query
5. **Sem SQL dinâmico** — Usar apenas Supabase JS SDK (prevenção de SQL injection)

## Variáveis de Ambiente

| Variável | Exposição | Uso |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Pública (client) | URL do projeto Supabase |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Pública (client) | Chave anônima (RLS protege) |
| `SUPABASE_SERVICE_ROLE_KEY` | **Apenas servidor** | Bypass de RLS (admin) |

## Regras de Desenvolvimento

- Nunca commitar `.env.local` ou arquivos com secrets
- `SUPABASE_SERVICE_ROLE_KEY` apenas em Server Components e Route Handlers
- Validar permissões no middleware antes de renderizar páginas admin
- Logs de auditoria em `activity_logs` para ações críticas

## OWASP Top 10 — Mitigações Planejadas

- **Injection:** Supabase SDK com queries parametrizadas
- **Broken Auth:** Supabase Auth + middleware de validação de sessão
- **XSS:** Next.js escapa HTML por padrão; evitar `dangerouslySetInnerHTML`
- **IDOR:** RLS policies garantem isolamento por usuário/grupo
- **Security Misconfiguration:** Variáveis de ambiente separadas por ambiente
