# ADR-007 — Estratégia de Storage: Supabase Storage

**Status:** Proposto  
**Data:** 2026-06-15

## Contexto

A plataforma precisará armazenar: avatares de usuários, logos de grupos, banners de patrocinadores, OG cards gerados, bandeiras de seleções.

## Decisão

Usar **Supabase Storage** para todos os assets da plataforma.

## Justificativa

- Integrado ao mesmo projeto Supabase (mesmo painel, mesma fatura)
- Políticas de acesso via RLS (mesmo modelo do banco)
- CDN embutido para servir assets
- SDK unificado com o resto da stack

## Buckets Planejados

| Bucket | Acesso | Conteúdo |
|---|---|---|
| `avatars` | Público | Fotos de perfil dos usuários |
| `groups` | Público | Logos e imagens de grupos |
| `sponsors` | Público | Logos e banners de patrocinadores |
| `flags` | Público | Bandeiras das seleções |
| `og-cards` | Público | OG cards gerados dinamicamente |
| `private` | Privado | Documentos internos |

## Consequências

- URLs de imagens no formato `https://<project>.supabase.co/storage/v1/object/public/<bucket>/...`
- `next.config.ts` configurado para aceitar domínio `*.supabase.co`
- Validação de tipo e tamanho de arquivo no upload (implementar na Fase 4)
