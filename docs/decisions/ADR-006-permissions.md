# ADR-006 — Permissões: RLS + Middleware

**Status:** Aceito  
**Data:** 2026-06-15

## Contexto

A plataforma tem múltiplos perfis (admin, dono do grupo, participante, visitante, patrocinador) com acessos diferentes a dados e rotas.

## Decisão

Implementar permissões em **duas camadas**:
1. **RLS no banco** — controla acesso aos dados
2. **Middleware Next.js** — controla acesso às rotas

## Justificativa

- RLS é a camada mais segura (aplicada no banco, não burlável pelo cliente)
- Middleware evita renderização desnecessária de páginas protegidas
- As duas camadas são complementares, não redundantes

## Mapeamento de Roles

| Role | Definido em |
|---|---|
| `admin` | `profiles.role = 'admin'` |
| `owner` | `group_members.role = 'owner'` |
| `member` | `group_members.role = 'member'` |
| Visitante | Sem sessão ativa |
| Patrocinador | `profiles.role = 'sponsor'` |

## Consequências

- Middleware verifica sessão e role antes de renderizar `/admin`
- RLS policies referenciam `auth.uid()` e joins com `group_members`
- Lógica de permissão centralizada em `lib/permissions/`
