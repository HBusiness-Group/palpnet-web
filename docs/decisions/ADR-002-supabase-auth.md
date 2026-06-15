# ADR-002 — Autenticação: Supabase Auth

**Status:** Aceito  
**Data:** 2026-06-15

## Contexto

Precisamos de autenticação segura, integrada ao banco de dados e com suporte a múltiplos métodos.

## Decisão

Usar **Supabase Auth** como único provedor de autenticação.

## Justificativa

- Integração nativa com o PostgreSQL do Supabase
- JWT gerenciado automaticamente
- Suporte a email/senha, magic link e OAuth (Google, etc.)
- Trigger `on_auth_user_created` para criação automática de perfil
- RLS policies podem referenciar `auth.uid()` diretamente

## Consequências

- Sem implementação de auth própria (reduz superfície de ataque)
- Dependência do Supabase para auth (aceito dado o stack escolhido)
- Session handling no middleware via `@supabase/ssr`
