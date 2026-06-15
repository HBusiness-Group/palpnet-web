# API Routes — PalpNet

Esta pasta conterá os Route Handlers do Next.js 14 (App Router).

## Estrutura planejada (Fase 2+)

```
api/
├── auth/
│   └── callback/route.ts        ← Callback do Supabase Auth
├── match-predictions/
│   └── route.ts                 ← CRUD de palpites (match_predictions)
├── groups/
│   └── route.ts                 ← CRUD de grupos
├── competitions/
│   └── route.ts                 ← Competições
├── rankings/
│   └── route.ts                 ← Cálculo de rankings
└── webhooks/
    └── route.ts                 ← Webhooks externos
```

## Convenções

- Todos os endpoints protegidos verificam sessão via Supabase Auth
- Respostas seguem o padrão `{ data, error }`
- Rate limiting será implementado na Fase 7
