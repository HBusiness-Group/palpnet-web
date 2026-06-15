# ADR-001 — Framework: Next.js 14 (App Router)

**Status:** Aceito  
**Data:** 2026-06-15

## Contexto

Precisamos de um framework frontend moderno com suporte a SSR, roteamento avançado e boa integração com Supabase.

## Decisão

Adotar **Next.js 14** com **App Router**.

## Justificativa

- Server Components por padrão: melhor performance e SEO
- App Router: roteamento aninhado, layouts compostos, grupos de rotas
- Integração nativa com Vercel (deploy zero-config)
- Suporte a Route Handlers (API interna)
- Ecossistema maduro e grande comunidade

## Consequências

- Aprendizado da nova arquitetura App Router (diferente do Pages Router)
- `"use client"` deve ser usado conscientemente
- Fetch e cache gerenciados pelo framework
