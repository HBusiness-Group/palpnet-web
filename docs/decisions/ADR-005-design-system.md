# ADR-005 — Design System: Tailwind CSS

**Status:** Aceito  
**Data:** 2026-06-15

## Contexto

Precisamos de uma solução de estilização que seja rápida de implementar, consistente e suporte dark mode nativo.

## Decisão

Usar **Tailwind CSS** como sistema de estilização principal, com tokens de design customizados via `tailwind.config.ts`.

## Justificativa

- Utilitário: sem conflitos de CSS, sem especificidade complexa
- Dark mode nativo via classe `dark:`
- Integração perfeita com Next.js e Vercel
- Purge automático em produção (bundle mínimo)
- Tokens centralizados no config (cores, fontes, espaçamentos)

## Tokens Principais

```js
colors: {
  primary: '#5ACB3D',
  'primary-dark': '#2E8F2D',
  background: '#0F172A',
}
fontFamily: {
  sans: ['Manrope', 'sans-serif']
}
```

## Alternativas Consideradas

- shadcn/ui: avaliado para Fase 3, pode ser adicionado sobre Tailwind
- CSS Modules: mais verboso, sem suporte a dark mode automático

## Consequências

- Componentes são compostos via classes Tailwind
- Design System documentado em `docs/DESIGN_SYSTEM.md`
