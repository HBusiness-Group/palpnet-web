# ADR-004 — Suporte a Múltiplas Competições

**Status:** Proposto  
**Data:** 2026-06-15

## Contexto

A primeira competição é a Copa do Mundo FIFA 2026. Mas a plataforma deve suportar futuras competições (Libertadores, Brasileirão, Eurocopa, etc.).

## Decisão

Modelar o banco com **suporte nativo a múltiplas competições** desde a Fase 2, mesmo que a Fase 5 implemente apenas a Copa 2026.

## Justificativa

- Refatorar multi-competição depois é custoso e arriscado
- Custo adicional de design agora é baixo
- Permite expansão comercial da plataforma

## Estrutura

```
competitions (id, name, slug, type, season, status)
    └── matches (competition_id, ...)
         └── match_predictions (match_id, ...)

groups (competition_id, ...)  ← grupo por competição
```

## Consequências

- Todas as queries de ranking e palpite filtram por `competition_id`
- Interface permite seleção de competição ativa
