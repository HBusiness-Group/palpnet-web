# ADR-003 — Motor de Ranking: Funções PostgreSQL

**Status:** Proposto  
**Data:** 2026-06-15

## Contexto

Rankings precisam ser calculados em tempo real ou quase-real quando resultados de partidas são atualizados. A lógica deve ser consistente independente de qual cliente disparar a atualização.

## Decisão

Implementar o **motor de ranking dentro do PostgreSQL** via funções e triggers, com cache na tabela `rankings`.

## Justificativa

- Consistência garantida pelo banco (não pelo cliente)
- Trigger em `matches` dispara recálculo automático
- Cache em `rankings` evita recálculo a cada request
- Sem race conditions entre múltiplos clientes simultâneos

## Alternativas Consideradas

- Edge Functions do Supabase: mais flexível mas adiciona latência e complexidade
- Cálculo no cliente: inconsistente e custoso para grupos grandes

## Consequências

- Lógica de negócio parcialmente no banco (tradeoff aceitável para performance)
- Necessidade de testes específicos para funções PostgreSQL
