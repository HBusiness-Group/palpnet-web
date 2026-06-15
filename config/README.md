# config/

Centraliza todas as configurações globais estáticas do PalpNet.

## O que pertence aqui

| Arquivo (planejado) | Conteúdo |
|---|---|
| `navigation.ts` | Itens de menu público, dashboard e admin |
| `menus.ts` | Estrutura de menus laterais e dropdowns |
| `constants.ts` | Constantes da aplicação (paginação, limites, etc.) |
| `site.ts` | Metadados institucionais (nome, domínio, descrição, redes sociais) |
| `links.ts` | Links públicos, redes sociais, suporte |
| `features.ts` | Feature flags para controle de funcionalidades |

## O que NÃO pertence aqui

- Lógica de negócio → `lib/`
- Chamadas à API → `services/`
- Variáveis de ambiente → `.env.local`
- Tipos TypeScript → `types/`

## Exemplo de uso

```ts
import { siteConfig } from '@/config/site'
import { navItems } from '@/config/navigation'
```
