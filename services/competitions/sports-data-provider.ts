import type { Competition, Match, Team } from '@/types'

/**
 * Abstração para provedores de dados esportivos.
 *
 * Toda a lógica de palpites e pontuação é independente da origem dos dados —
 * seja manual (admin), automática (API externa futura) ou híbrida.
 */
export interface SportsDataProvider {
  readonly name: string

  // Competições
  getCompetitions(): Promise<Competition[]>
  getCompetition(id: string): Promise<Competition | null>

  // Partidas
  getMatches(competitionId: string): Promise<Match[]>
  getMatch(id: string): Promise<Match | null>
  getUpcomingMatches(competitionId: string, limit?: number): Promise<Match[]>
  getLiveMatches(competitionId: string): Promise<Match[]>
  getFinishedMatches(competitionId: string): Promise<Match[]>

  // Times / Seleções
  getTeams(competitionId: string): Promise<Team[]>
  getTeam(id: string): Promise<Team | null>

  // Resultado de partida (usado para calcular pontuação dos palpites)
  getMatchResult(matchId: string): Promise<{ homeScore: number; awayScore: number } | null>
}

/**
 * Eventos que provedores podem emitir — para uso futuro com realtime.
 */
export type SportsDataEvent =
  | { type: 'match_started'; matchId: string }
  | { type: 'goal_scored'; matchId: string; team: 'home' | 'away'; score: { home: number; away: number } }
  | { type: 'match_finished'; matchId: string; finalScore: { home: number; away: number } }
  | { type: 'match_updated'; matchId: string }
