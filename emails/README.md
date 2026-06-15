# emails/

Templates de e-mails transacionais do PalpNet.

## Finalidade

Armazena os templates de e-mail enviados automaticamente pela plataforma em resposta a eventos do sistema.

## Templates planejados

| Arquivo (planejado) | Gatilho |
|---|---|
| `welcome.tsx` | Novo cadastro de usuário |
| `reset-password.tsx` | Solicitação de recuperação de senha |
| `group-invite.tsx` | Convite para participar de um grupo |
| `group-joined.tsx` | Confirmação de entrada em grupo |
| `match-prediction-reminder.tsx` | Lembrete de palpite antes do fechamento da partida |
| `match-result.tsx` | Resultado de partida e pontuação obtida |
| `achievement-unlocked.tsx` | Conquista desbloqueada |
| `campaign.tsx` | E-mail de campanha de patrocinador |

## Stack de envio

A ser definida na Fase 7. Opções avaliadas:

- **Resend** — integração nativa com React Email
- **Supabase Edge Functions** — para disparos baseados em triggers do banco

## Convenções

- Templates escritos com **React Email** (`@react-email/components`)
- Um arquivo por tipo de e-mail
- Nomes em kebab-case
- Props tipadas via TypeScript
